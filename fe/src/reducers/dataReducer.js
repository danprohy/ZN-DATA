// Luu trang thai viec nguoi dung load duoc player hay ko
import {
  ADD_DATA,
  DATA_LOADED_FAIL,
  DATA_LOADED_SUCCESS,
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
    default:
      return state;
  }
};
