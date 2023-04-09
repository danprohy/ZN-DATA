import { createContext, useReducer, useState } from "react";
import { dataReducer } from "../reducers/dataReducer";
import {
  apiUrl,
  DATA_LOADED_SUCCESS,
  DATA_LOADED_FAIL,
  ADD_DATA,
  DELETE_DATA,
  UPDATE_DATA,
  FIND_DATA,
} from "./constants";
import axios from "axios";

export const DataContexts = createContext();

const DataContextsProvider = ({ children }) => {
  // State
  const [dataState, dispatch] = useReducer(dataReducer, {
    player: null,
    players: [],
    dataLoading: true,
  });

  // Check Modal Open or Close
  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  // Get All data
  const getData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/user/player`);
      if (response.data.success) {
        dispatch({
          type: DATA_LOADED_SUCCESS,
          payload: response.data.players,
        });
      }
    } catch (err) {
      dispatch({ type: DATA_LOADED_FAIL });
    }
  };

  // Add Data
  const addData = async (newData) => {
    try {
      const response = await axios.post(`${apiUrl}/user/player`, newData);
      if (response.data.success) {
        dispatch({
          type: ADD_DATA,
          payload: response.data.player,
        });
        return response.data;
      }
    } catch (err) {
      return err.response.data
        ? err.response.data
        : { success: false, messeage: "Server error" };
    }
  };

  // Delete Data
  const deleteData = async (playerId) => {
    try {
      const response = await axios.delete(`${apiUrl}/user/player/${playerId}`);
      if (response.data.success) {
        dispatch({
          type: DELETE_DATA,
          payload: playerId,
        });
      }
    } catch (err) {
      return err.response.data
        ? err.response.data
        : { success: false, messeage: "Server error" };
    }
  };

  // Find Data when U=user update player
  const findData = (playerId) => {
    const player = dataState.players.find((player) => player._id === playerId);
    dispatch({
      type: FIND_DATA,
      payload: player,
    });
  };

  // Update Data
  const updateData = async (updatedData) => {
    try {
      const response = await axios.put(
        `${apiUrl}/user/player/${updatedData._id}`,
        updatedData
      );
      if (response.data.success) {
        dispatch({
          type: UPDATE_DATA,
          payload: response.data.player,
        });
        return response.data;
      }
    } catch (err) {
      return err.response.data
        ? err.response.data
        : { success: false, messeage: "Server error" };
    }
  };

  // Player context data
  const playerContextData = {
    dataState,
    getData,
    showAddModal,
    setShowAddModal,
    showUpdateModal,
    setShowUpdateModal,
    addData,
    deleteData,
    findData,
    updateData,
  };

  return (
    <DataContexts.Provider value={playerContextData}>
      {children}
    </DataContexts.Provider>
  );
};

export default DataContextsProvider;
