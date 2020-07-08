import creatDataContext from './CreateDataContext';

const playlistReducer = (state, action) => {

    switch (action.type) {
        case "addTrack" :
            return({...state, trackList: action.payload})
        default:
            return state;
    }
};

const storeTrack = dispatch => async ({ track }) => {
    console.log("Track", track);
    dispatch({ type: 'addTrack', payload: track })
}

export const { Context, Provider } = creatDataContext(
    playlistReducer,
    { storeTrack },
    {
        trackList: [],
    }
)