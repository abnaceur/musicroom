import creatDataContext from './CreateDataContext';
import userApi from '../api/user';
import { AsyncStorage } from 'react-native';

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, error_msg: action.payload };
        case 'addToken':
            return { error_msg: '', token: action.payload };
        case 'rmToken':
            return { error_msg: '', token: null };
        default:
            return state;
    }
};

const signup = dispatch => async ({ username, email, password }) => {
    try {
        let response = await userApi.post('/users/signup', { username, email, password });
        if (response.data.code !== 200)
            dispatch({ type: "add_error", payload: response.data.data.msg })
    } catch (err) {
        dispatch({ type: "add_error", payload: "Sorry, something went wrong with signup" })
        console.error(err.message)
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        let response = await userApi.post('/users/signin', { email, password });
        if (response.data.code !== 200)
            dispatch({ type: "add_error", payload: response.data.data.msg })
        if (response.data.code == 200) {
            await AsyncStorage.setItem('token_id', response.data.data.token);
            await AsyncStorage.setItem('userInfo', response.data.data);
            dispatch({ type: 'addToken', payload: response.data.data.token })
        }
    } catch (err) {
        dispatch({ type: "add_error", payload: "Sorry, something went wrong with signin" })
        console.error(err.message)
    }
}

const signout = dispatch => async () => {
    await AsyncStorage.removeItem('token_id');
    await AsyncStorage.removeItem('userInfo');
    console.log("here");
    dispatch({ type: 'rmToken', payload: null });
}

export const { Context, Provider } = creatDataContext(
    authReducer,
    { signup, signin, signout },
    {
        token: null,
        error_msg: ""
    }
)