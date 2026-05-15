/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Mount path for the SPA (no trailing slash), e.g. /app/docs — set in .env.production for subdirectory deploys */
  readonly VITE_PUBLIC_BASE_PATH?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
