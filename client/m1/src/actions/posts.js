import * as api from '../api';
export const getposts=()=>async(dispatch)=>{
    try{
        const data=api.fetchposts();
        const action = { type: 'FETCH_ALL', payload: data };
        dispatch(action);
    }
    catch(error){
        console.log(error);
    }
}