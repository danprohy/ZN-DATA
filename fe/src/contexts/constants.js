export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:1705/auth"
    : "someDeployedURL";
export const LOCAL_STORAGE_TOKEN_NAME = "player-database";
