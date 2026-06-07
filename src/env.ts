export const ENV_KEYS = ["DOMAIN", "TAGLINE", "ASKING_PRICE", "CONTACT_EMAIL"] as const;

export type EnvKey = (typeof ENV_KEYS)[number];

export function getViteEnvKey(key: EnvKey): `VITE_${EnvKey}` {
  return `VITE_${key}`;
}

function readEnv(key: EnvKey): string | undefined {
  const value = import.meta.env[getViteEnvKey(key)];
  return value?.trim() || undefined;
}

export function getEnv() {
  const missingKeys = ENV_KEYS.filter((key) => !readEnv(key));
  if (missingKeys.length > 0) {
    throw new Error(`Missing required env vars: ${missingKeys.join(", ")}`);
  }

  return Object.fromEntries(ENV_KEYS.map((key) => [key, readEnv(key)])) as Record<EnvKey, string>;
}
