import React from "react";
import { Alert } from "react-native";

import userApi from "../api/user";
import authHeader from "../api/authHeader";

const saveUserInfoService = async (datauser, token) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await userApi.post(`/users/update`, datauser, {
        headers: authHeader(token),
      });
      const { data, code } = response.data;
      if (code === 200) {
        console.log(data);
        resolve(data);
      } else {
        Alert.alert(data.msg);
      }
    } catch (error) {
      console.log(error, " error");
      reject(error);
    }
  });
};

export { saveUserInfoService };
