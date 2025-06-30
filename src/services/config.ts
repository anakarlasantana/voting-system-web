import packageJSON from "../../package.json";

export const projectName = packageJSON.name;

export const API_URL = "http://localhost:8000/api";

export const STORAGE_KEYS = {
  ACCESS_TOKEN: `@${projectName}:access_token`,
  REFRESH_TOKEN: `@${projectName}:refresh_token`,
};
