import {AUTH,LOGOUT} from '../constants/actionTypes';
//it is advisable to use spreadOperator for a state having plain oject

//reducer are used to change state of a given state and action
const authReducer = (state={authData:null},action) => {
    switch (action.type){
                case AUTH :
                    // console.log("hai",action.data); 
                    localStorage.setItem('profile',JSON.stringify({...action?.data}));
                    // console.log(action?.data);
                    return {...state,authData : action?.data};
                case LOGOUT :
                    localStorage.clear();
                    return {...state,authData : null};
                default:return state;
            
    }
} 
export default authReducer;