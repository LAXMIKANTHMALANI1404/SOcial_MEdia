import axios from 'axios';//used to make api calls

const url="http://localhost:5000/posts";//url pointing to backend

export const fetchposts=()=>{
    axios.get(url);
}
