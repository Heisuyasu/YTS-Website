// Ambient declaration for plain (non-module) CSS side-effect imports,
// e.g. `import "./globals.css"` in app/layout.tsx.
// Next.js only ships type declarations for `*.module.css` — this covers
// the plain global stylesheet case so editors/TS don't flag it.
declare module "*.css";
