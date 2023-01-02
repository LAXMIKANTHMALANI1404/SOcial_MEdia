export default (posts=[],action)=>{
    console.log(posts);
    switch(action.type){
        case 'FETCH_ALL':
            console.log(action.payload);
            return action.payload;
        case 'CREATE':
            console.log(action.payload);
            console.log(posts);
            // return [...posts,action.payload];
            return action.payload;
        case 'UPDATE':
             return posts.map((post)=>{
                if(post._id===action.payload._id){
                    return action.payload;
                }
                return post;
             })
        default:
            // return posts;
            return [];
    }
}