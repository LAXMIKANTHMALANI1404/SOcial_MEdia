import { AUTH } from "../constants/actionTypes";
import * as api from '../api/index.js';
export const signIn = (formData, navigate) => async (dispatch) => {
    console.log(4);
    try {
        const { data } = await api.signIn(formData);
        const decoded=data.result;
        const tokenId=data.token;
        console.log(data);
        dispatch({
            type: AUTH,data:{decoded,tokenId}
        });
        navigate('/');
    }
    catch (error) { console.log(error.response.data);
    alert(error.response.data.message) }
}
export const signUp = (formData, navigate) => async (dispatch) => {
    console.log(18);
    try {
        console.log("hai");
        const { data } = await api.signUp (formData);
        console.log(data);
        const decoded = data.result;
        const tokenId = data.token;
        dispatch({
            type: AUTH, data:{decoded,tokenId}
        });
        console.log("sign up successful");
        navigate('/');
    }
    catch (error) { 

        console.log(error.response);
        alert(error.response.data.Message); }
}