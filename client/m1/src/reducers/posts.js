export default (posts=[],action)=>{
    console.log(posts);
    switch(action.type){
        case 'FETCH_ALL':

            console.log(action.payload);
            return action.payload;
        case 'CREATE':
            console.log(action.payload);
            console.log(posts);
            // const x =posts.data.tags.push(action.payload);
            
            return action.payload;
            // var post=posts.
            // return post;
            // return [...posts,action.payload];
        default:
            // return posts;
            return [];
    }
}