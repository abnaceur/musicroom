import {AsyncStorage} from "react-native";

export const storePlayList = async (playList) => {
  try {
    await AsyncStorage.setItem("playlists", JSON.stringify(playList));
  } catch (error) {
    console.log(error);
  }
};

export const getPlayList = async () => {
  try {
    const response = await AsyncStorage.getItem("playlists");
    if (response) {
      console.log(response, " async");
    }
  } catch (error) {
    console.log(error);
  }
};

// export const mergePlayList = async (playList) => {
//     // Get the playList full
//     AsyncStorage.setItem("playlists", playList, () => {
//         // Add the new playlist
//         AsyncStorage.mergeItem("playlists", playList)
//     })
// }
