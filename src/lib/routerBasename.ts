/**
 * React Router basename when the SPA is served under a subpath (e.g. /docs/).
 *
 * Production: infer from the loaded entry script URL (`…/assets/*.js`) so one build
 * works at `http://host/` and `http://host/docs/` without rebuilding.
 *
 * Optional override: VITE_PUBLIC_BASE_PATH (e.g. for unusual hosting).
 */
export function getRouterBasename(): string | undefined {
  const fromEnv = import.meta.env.VITE_PUBLIC_BASE_PATH?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;

  if (import.meta.env.DEV) return undefined;

  const scripts = document.querySelectorAll("script[type='module'][src]");
  const needle = "/assets/";
  for (const el of scripts) {
    const raw = (el as HTMLScriptElement).src;
    if (!raw) continue;
    let pathname: string;
    try {
      pathname = new URL(raw, window.location.origin).pathname;
    } catch {
      continue;
    }
    const i = pathname.lastIndexOf(needle);
    if (i <= 0) continue;
    return pathname.slice(0, i);
  }
  return undefined;
}
