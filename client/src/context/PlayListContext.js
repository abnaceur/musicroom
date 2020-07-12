import creatDataContext from "./CreateDataContext";

const playlistReducer = (state, action) => {
  switch (action.type) {
    case "addTrack":
      return { ...state, trackList: [...state.trackList, action.payload] };
    case "deleteTrack":
      return {
        ...state,
        trackList: state.trackList.filter(
          ({ title }) => title !== action.payload
        ),
      };
    default:
      return state;
  }
};

const storeTrack = (dispatch) => async (track) => {
  dispatch({ type: "addTrack", payload: track });
};

const deleteTrack = (dispatch) => async (music) => {
  dispatch({ type: "deleteTrack", payload: music });
};

export const { Context, Provider } = creatDataContext(
  playlistReducer,
  { storeTrack, deleteTrack },
  {
    trackList: [],
  }
);
