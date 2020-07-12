import React from "react";
import {
    Alert,
} from "react-native";

import userApi from "../api/user";
import authHeader from "../api/authHeader";

const savePlayListService = async (data, token) => {
    try {
        let response = await userApi.post(
            `/playlist/new`,
            data,
            {
                headers: authHeader(token)
            }
        );
        if (response.data.code === 200) {
            Alert.alert("Confirmation", response.data.data.msg)
        } else {
            Alert.alert(response.data.data.msg)
        }
    } catch (error) {
        console.log(error, " error");
    }
}

export {
    savePlayListService
}