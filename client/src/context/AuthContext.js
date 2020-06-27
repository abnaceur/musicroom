import creatDataContext from './CreateDataContext';
import userApi from '../api/user';

const authReducer = (state, action) => {
    switch (action.type) {
        case "add_error":
            return { ...state, error_msg: action.payload };
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ username, email, password }) => {
        try {
            let response = await userApi.post('/users/signup', { username, email, password });
            if (response.data.code !== 200)
                dispatch({ type: "add_error", payload: response.data.data.msg })
        } catch (err) {
            dispatch({ type: "add_error", payload: "Sorry, something went wrong with signup" })
            console.error(err.message)
        }
    }
}

const signin = dispatch => {
    return async ({ email, password }) => {
        try {
            let response = await userApi.post('/users/signin', { email, password });
            if (response.data.code !== 200)
                dispatch({ type: "add_error", payload: response.data.data.msg })
        } catch (err) {
            dispatch({ type: "add_error", payload: "Sorry, something went wrong with signin" })
            console.error(err.message)
        }
    }
}


export const { Context, Provider } = creatDataContext(
    authReducer,
    { signup, signin },
    {
        isSignedIn: false,
        error_msg: ""
    }
)