// lay url tu api, sau khi deploy
export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "https://zndataserver.ddns.net:1705"
    : "https://zndataserver.ddns.net:1705";
// : "someDeployedURL";
export const LOCAL_STORAGE_TOKEN_NAME = "player-database";

export const DATA_LOADED_SUCCESS = "DATA_LOADED_SUCCESS";
export const DATA_LOADED_FAIL = "DATA_LOADED_FAIL";
export const ADD_DATA = "ADD_DATA";
export const DELETE_DATA = "DELETE_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const FIND_DATA = "FIND_DATA";
