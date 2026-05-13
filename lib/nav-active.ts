/**
 * Whether a header/footer nav href should render as "current".
 * Handles home vs /#projects, and prefix matching for section roots (e.g. /services/*).
 */
export function isNavLinkActive(href: string, pathname: string, hash: string): boolean {
  const h = hash || "";

  if (href === "/#projects") {
    return pathname === "/" && h === "#projects";
  }

  if (href === "/") {
    return pathname === "/" && h !== "#projects";
  }

  const pathOnly = href.split("#")[0]?.split("?")[0] ?? href;
  if (!pathOnly || pathOnly === "/") {
    return false;
  }

  return pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
}
