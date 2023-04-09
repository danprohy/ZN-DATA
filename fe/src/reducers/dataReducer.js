// Luu trang thai viec nguoi dung load duoc player hay ko
import {
  ADD_DATA,
  DATA_LOADED_FAIL,
  DATA_LOADED_SUCCESS,
  DELETE_DATA,
  FIND_DATA,
  UPDATE_DATA,
} from "../contexts/constants";

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case DATA_LOADED_SUCCESS:
      return {
        ...state,
        players: payload,
        dataLoading: false,
      };
    case DATA_LOADED_FAIL:
      return {
        ...state,
        players: [],
        dataLoading: false,
      };
    case ADD_DATA:
      return {
        ...state,
        players: [...state.players, payload],
      };
    case DELETE_DATA:
      return {
        ...state,
        players: state.players.filter((player) => player._id !== payload),
      };
    case FIND_DATA:
      return {
        ...state,
        player: payload
      };
    case UPDATE_DATA:
      const newData = state.players.map((player) =>
        player._id === payload._id ? payload : player
      );
      return {
        ...state,
        players: newData,
      };
    default:
      return state;
  }
};
