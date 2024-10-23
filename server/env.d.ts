declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test"
    PORT?: string
    SESSION_SECRET: string
    CLIENT_URL: string
  }
}
