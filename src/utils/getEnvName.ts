import { EnvSchema } from "src/schemas/env.schema";

export const getEnvName = (key: keyof EnvSchema) => key