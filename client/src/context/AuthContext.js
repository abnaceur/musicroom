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
        case 'resetPwd_error':
            return { error_msg: action.payload, response_msg: "", token: null };
        case 'resetPwd':
            return { response_msg: action.payload, error_msg: "", token: null };
        case 'signup':
            return { response_msg: action.payload, error_msg: "", token: null };
        case 'hideMsg':
            return { response_msg: "", error_msg: "" };
        default:
            return state;
    }
};

const hideMessages = dispatch => async () => {
    setTimeout(() => {
        dispatch({ type: "hideMsg" })
    }, 2000)
}

const signup = dispatch => async ({ username, email, password }) => {
    try {
        let response = await userApi.post('/users/signup', { username, email, password });
        if (response.data.code !== 200) {
            dispatch({ type: "add_error", payload: response.data.data.msg })
        } else if (response.data.code === 200) {
            dispatch({ type: "signup", payload: response.data.data.msg });
        }
    } catch (err) {
        dispatch({ type: "add_error", payload: "Sorry, something went wrong with signup" })
        console.error(err.message)
    }
}

const signin = dispatch => async ({ email, password }) => {
    try {
        let response = await userApi.post('/users/signin', { email, password });
        if (response.data.code !== 200) {
            dispatch({ type: "add_error", payload: response.data.data.msg })
        }
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
    dispatch({ type: 'rmToken', payload: null });
}

const resetPwd = dispatch => async (email) => {
    try {
        let response = await userApi.post('/users/resetpwd', { email });
        if (response.data.code !== 200) {
            dispatch({ type: "resetPwd_error", payload: response.data.data.msg })
        }
        if (response.data.code == 200) {
            dispatch({ type: 'resetPwd', payload: response.data.data.msg })
        }
    } catch (err) {
        dispatch({ type: "resetPwd_error", payload: "Sorry, something went wrong with signin" })
        console.error(err.message)
    }
}

export const { Context, Provider } = creatDataContext(
    authReducer,
    { signup, signin, signout, resetPwd, hideMessages },
    {
        token: null,
        error_msg: "",
        response_msg: "",
    }
)