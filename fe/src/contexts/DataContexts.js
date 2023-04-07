import { createContext, useReducer, useState } from "react";
import { dataReducer } from "../reducers/dataReducer";
import { apiUrl, DATA_LOADED_SUCCESS, DATA_LOADED_FAIL } from "./constants";
import axios from "axios";

export const DataContexts = createContext();

const DataContextsProvider = ({ children }) => {
  // State
  const [dataState, dispatch] = useReducer(dataReducer, {
    players: [],
    dataLoading: true,
  });

  // Check Modal Open or Close
  const [showAddModal, setShowAddModal] = useState(false);

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
        dispatch({type: DATA_LOADED_FAIL});
    }
  };

  // Player context data
  const playerContextData = {dataState, getData, showAddModal, setShowAddModal};
  

  return (
    <DataContexts.Provider value={playerContextData}>
      {children}
    </DataContexts.Provider>
  );
};

export default DataContextsProvider;
