"""Check the 480Academy handoff offline with Python 3.11+."""
import json
import re
import subprocess
import sys
import tomllib
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parents[1]
LINK = re.compile(r"\]\(([^\s)]+)\)")
HEADING = re.compile(r"^#{1,6}\s+(.+)$", re.MULTILINE)


def heading_ids(path):
    return {
        re.sub(r"[^\w\s-]", "", heading.lower()).replace(" ", "-")
        for heading in HEADING.findall(path.read_text(encoding="utf-8"))
    }


def check_links(documents, errors):
    checked = 0
    for document in documents:
        source = document.read_text(encoding="utf-8")
        for target in LINK.findall(source):
            parts = urlsplit(target)
            if parts.scheme or parts.netloc:
                continue
            checked += 1
            destination = (document.parent / unquote(parts.path)).resolve() if parts.path else document
            label = f"{document.relative_to(ROOT)} → {target}"
            if not destination.is_relative_to(ROOT) or not destination.exists():
                errors.append(f"Ruta local no válida: {label}")
            elif parts.fragment and destination.suffix == ".md":
                if unquote(parts.fragment) not in heading_ids(destination):
                    errors.append(f"Sección no encontrada: {label}")
    return checked


def check_stories(errors):
    source = ROOT / "docs/bitacora/480Academy-user-stories.md"
    official = set(re.findall(r"^#### HU-(\d+)\b", source.read_text(encoding="utf-8"), re.M))
    prd = (ROOT / "docs/PRD.md").read_text(encoding="utf-8")
    refs = re.findall(r"^\| REQ-\d+ \|.*?\| HU-(\d+(?:/\d+)*) \|", prd, re.M)
    covered = {story for group in refs for story in group.split("/")}
    if covered != official:
        errors.append(f"Trazabilidad HU incompleta: faltan {sorted(official - covered)}, sobran {sorted(covered - official)}")
    return len(covered)


def check_stitch(errors):
    directory = ROOT / "docs/mcp"
    manifest = json.loads((directory / "stitch.json").read_text(encoding="utf-8"))
    client = tomllib.loads((directory / "stitch.codex.example.toml").read_text(encoding="utf-8"))
    adapter = client["mcp_servers"]["stitch_480academy"]
    expected_tools = {"get_project", "list_screens", "get_screen"}
    if manifest["resource"]["id"] != "9338956345887203749":
        errors.append("El ID del manifiesto no coincide con el tablero de 480Academy.")
    if set(manifest["auth"]) != {"method", "secret_ref", "account_role"}:
        errors.append("La autenticación del manifiesto debe usar solo el método, el rol y una referencia.")
    if manifest["auth"]["secret_ref"] != "env:STITCH_API_KEY":
        errors.append("Referencia de credencial Stitch inesperada.")
    if manifest["endpoint"] != "https://stitch.googleapis.com/mcp" or adapter["url"] != manifest["endpoint"]:
        errors.append("El endpoint del manifiesto y el ejemplo deben ser el endpoint HTTPS de Stitch.")
    if (manifest["permissions"]["operations"] != ["read"]
            or set(manifest["permissions"]["tools"]) != expected_tools):
        errors.append("El contrato Stitch debe limitarse a las tres operaciones de lectura acordadas.")
    if adapter["enabled"] is not False or manifest["readiness"]["required_for_current_task"] is not False:
        errors.append("El adaptador de ejemplo debe seguir desactivado y la capacidad debe ser opcional.")
    if adapter["env_http_headers"] != {"X-Goog-Api-Key": "STITCH_API_KEY"} or "http_headers" in adapter:
        errors.append("El adaptador debe indicar solo una referencia de entorno para la cabecera de autenticación.")
    allowed_now = expected_tools if manifest["resource"]["screen_ids"] else expected_tools - {"get_screen"}
    if set(adapter["enabled_tools"]) != allowed_now:
        errors.append("Las herramientas del ejemplo no respetan la vinculación de pantallas.")
    for path in manifest["fallback"]["paths"]:
        fallback = (ROOT / path).resolve()
        if not fallback.is_relative_to(ROOT) or not fallback.exists():
            errors.append(f"Referencia local de D15 inválida: {path}")

    design = (ROOT / "DESIGN.md").read_text(encoding="utf-8")
    folder = ROOT / "docs/design/stitch"
    images = sorted(folder.glob("*.webp"))
    cited = {target for target in LINK.findall(design) if target.startswith("docs/design/stitch/") and target.endswith(".webp")}
    existing = {image.relative_to(ROOT).as_posix() for image in images}
    if len(images) != manifest["fallback"]["screen_count"] or cited != existing:
        errors.append("Las pantallas locales no coinciden con el inventario de DESIGN.md y el manifiesto.")
    for image in images:
        with image.open("rb") as file:
            header = file.read(12)
        if header[:4] != b"RIFF" or header[8:12] != b"WEBP" or image.stat().st_size <= 12:
            errors.append(f"Referencia WebP no válida: {image.relative_to(ROOT)}")
    return len(images)


def check_ignore(errors):
    if not (ROOT / ".git").exists():
        return
    for path in (".secrets/example", "secrets/example", ".env", ".env.local", "cert.pem",
                 ".codex/config.toml", ".mcp.json", "node_modules/example", ".data/example",
                 "data/local/example", "demo.sqlite"):
        check = subprocess.run(
            ["git", "check-ignore", "--no-index", "-q", "--", path], cwd=ROOT, check=False,
        )
        if check.returncode:
            errors.append(f"Falta protección Git para el patrón probado con {path}.")
    tracked = subprocess.run(
        ["git", "ls-files", "-ci", "--exclude-standard", "-z"], cwd=ROOT, check=True, capture_output=True,
    )
    if tracked.stdout:
        errors.append("Hay archivos versionados que coinciden con las exclusiones de Git. Revisa el índice en local.")


def main():
    documents = [*sorted(ROOT.glob("*.md")), *sorted((ROOT / "docs").glob("*.md")),
                 *sorted((ROOT / "docs/specs").glob("*.md"))]
    errors = []
    links = check_links(documents, errors)
    stories = check_stories(errors)
    screens = check_stitch(errors)
    check_ignore(errors)
    if errors:
        for error in errors:
            print(error, file=sys.stderr)
        return 1
    print(f"Bootstrap verificado: {links} enlaces locales, {stories} historias trazadas, "
          f"{screens} referencias WebP y alcance D15 comprobado de forma estática.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
