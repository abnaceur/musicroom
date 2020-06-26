import creatDataContext from './CreateDataContext';
import userApi from '../api/user';

const authReducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({ username, email, password }) => {
        try {
            let response = await userApi.post('/users/signup', { username, email, password });
            console.log("Response signup : ", response);
        } catch (err) {
            console.error(err.message)
        }
    }
}

const signin = dispatch => {
    return async ({ email, password }) => {
        try {
            let response = await userApi.post('/users/signin', { email, password });
            console.log("Response signin : ", response);
        } catch (err) {
            console.error(err.message)
        }
    }
}


export const { Context, Provider } = creatDataContext(
    authReducer,
    { signup, signin },
    { isSignedIn: false }
)