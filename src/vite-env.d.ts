/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Optional override for react-router basename. Normally inferred from the script URL in production. */
  readonly VITE_PUBLIC_BASE_PATH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
