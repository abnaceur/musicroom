import userApi from "../api/user";
import authHeader from "../api/authHeader";
import { Alert } from "react-native";

const getMyBookmarck = (playlistId, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await userApi.post("/bookmark/mybookmarkbyplaylist", { playlistId }, {
                headers: authHeader(token),
            });
            const { code, data } = response.data;
            resolve(code);
        } catch (error) {
            console.log(error, " error");
        }
    });
};

const addFavoritService = (playlistId, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await userApi.post("/bookmark/new", { playlistId }, {
                headers: authHeader(token),
            });
            const { code, data } = response.data;
            resolve(code);
        } catch (error) {
            console.log(error, " error");
        }
    });
}


const rmFavoritService = (playlistId, token) => {
    return new Promise(async (resolve, reject) => {
        try {
            let response = await userApi.post("/bookmark/delete", { playlistId }, {
                headers: authHeader(token),
            });
            const { code, data } = response.data;
            resolve(code);
        } catch (error) {
            console.log(error, " error");
        }
    });
}

export {
    getMyBookmarck,
    rmFavoritService,
    addFavoritService
};
