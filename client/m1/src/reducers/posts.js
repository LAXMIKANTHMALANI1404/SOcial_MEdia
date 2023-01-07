export default (posts=[],action)=>{
    console.log(posts);
    switch(action.type){
        case 'FETCH_ALL':
            console.log(action.payload);
            return action.payload;
        case 'CREATE':
            console.log(action.payload);
            // console.log(posts);
            return [...posts,action.payload];
            return action.payload;
        case 'UPDATE':
              posts.map((post)=>{
                if(post._id===action.payload._id){
                    return action.payload;
                }
                return post;
             })
        case 'DELETE':
            return posts.filter((posts) => posts._id !== action.payload)
            // posts.map((post)=>{
            //     if(post._id!==action.payload){
                    
            //         return post;
            //     }
            // })
        default:
            // return posts;
            return [];
    }
}