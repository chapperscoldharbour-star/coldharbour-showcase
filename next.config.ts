import os from "node:os";
import path from "path";
import type { NextConfig } from "next";

function resolveAllowedDevOrigins() {
  const explicitOrigins = process.env.NEXT_ALLOWED_DEV_ORIGINS?.split(",")
    .map((origin) => origin.trim().toLowerCase())
    .filter(Boolean);

  if (explicitOrigins && explicitOrigins.length > 0) {
    return explicitOrigins;
  }

  if (process.env.NODE_ENV !== "development") {
    return undefined;
  }

  const interfaces = os.networkInterfaces();
  const localOrigins = new Set<string>();

  for (const adapter of Object.values(interfaces)) {
    if (!adapter) continue;
    for (const details of adapter) {
      if (!details || details.internal || details.family !== "IPv4") continue;
      localOrigins.add(details.address.toLowerCase());
    }
  }

  return localOrigins.size ? Array.from(localOrigins) : undefined;
}

const allowedDevOrigins = resolveAllowedDevOrigins();

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  ...(allowedDevOrigins ? { allowedDevOrigins } : {}),
};

export default nextConfig;
