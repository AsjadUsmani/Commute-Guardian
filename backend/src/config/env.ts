import dotenv from 'dotenv';
import type {StringValue} from "ms";

dotenv.config();

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`${key} environment variable is required`);
  }
  return value;
}

export const env = {
  PORT: process.env.PORT ?? '3000',
  JWT_SECRET: getEnvVar('JWT_SECRET'),
  JWT_EXPIRES_IN: (process.env.JWT_EXPIRES_IN ?? '1d') as StringValue,
  SALT_ROUND: Number(process.env.SALT_ROUND ?? 10),
};
