export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_KEY: string;
      NEXT_PUBLIC_TEMPLATE: string;
      ENV: "test" | "dev" | "prod";
    }
  }
}
