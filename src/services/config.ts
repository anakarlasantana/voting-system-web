import packageJSON from "../../package.json";

export const projectName = packageJSON.name;

export const API_URL = import.meta.env.VITE_API_URL;

export const STORAGE_KEYS = {
  ACCESS_TOKEN: `@${projectName}:access_token`,
  REFRESH_TOKEN: `@${projectName}:refresh_token`,
};
