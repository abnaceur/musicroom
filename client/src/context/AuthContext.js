import creatDataContext from './CreateDataContext';
import userApi from '../api/user';

const authReducer = (state, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

const signup = dispatch => {
    return async ({username, email, password}) => {
        try {
            let response = await userApi.post('/user/signup', {username, email, password});
            console.log("Response signup : ", response);
        } catch (err) {
            console.error(err.message)
        }
    }
}

export const {Context, Provider} = creatDataContext(
    authReducer,
    { signup },
    {isSignedIn: false}
)