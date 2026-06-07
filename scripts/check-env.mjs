import { loadEnv } from "vite";
import { ENV_KEYS, getViteEnvKey } from "../src/env.ts";

const env = loadEnv(process.env.MODE ?? "development", process.cwd(), "VITE_");

const missingEnv = ENV_KEYS.map(getViteEnvKey).filter((key) => !env[key]?.trim());

if (missingEnv.length > 0) {
  throw new Error(`Missing required env vars: ${missingEnv.join(", ")}`);
}
