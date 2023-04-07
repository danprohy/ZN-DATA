// lay url tu api, sau khi deploy
export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:1705"
    : "someDeployedURL";
export const LOCAL_STORAGE_TOKEN_NAME = "player-database";

export const DATA_LOADED_SUCCESS = "DATA_LOADED_SUCCESS";
export const DATA_LOADED_FAIL = "DATA_LOADED_FAIL";
