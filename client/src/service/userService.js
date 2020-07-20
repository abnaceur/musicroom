import userApi from "../api/user";
import authHeader from "../api/authHeader";
import { Alert } from "react-native";

const isContributorExistService = async (dataContri, token) => {
  return new Promise(async (resolve, reject) => {
      try {
          let response = await userApi.post(`/users/contributor`, dataContri,
              { headers: authHeader(token) });
          if (response.data.code === 200) {
              resolve(response.data.code);
          } else {
              Alert.alert(response.data.data.msg)
          }
      } catch (error) {
          console.log(error, " error");
      }
  })
}


export {
  isContributorExistService,
};
