export default (posts = [], action) => {
    // console.log(posts);
    switch (action.type) {
        case 'FETCH_ALL':
            console.log(action.payload);
            return action.payload;
        case 'CREATE':
            console.log(action.payload);
            // console.log(posts);
            return [...posts, action.payload];
        // return action.payload;
        case 'UPDATE':
            // console.log("Hai UPDATE", action.payload);
            let newPosts = [];
            posts.map((post) => {
                if (post._id === action.payload._id) {
                    newPosts.push(action.payload);
                    post = action.payload;
                }
                else{
                    newPosts.push(post);
                }
                // return post;
            })
            return newPosts;

        case 'DELETE':
            return posts.filter((posts) => posts._id !== action.payload)
        // posts.map((post)=>{
        //     if(post._id!==action.payload){

        //         return post;
        //     }
        // })
        case 'LIKE':

            return posts.map((post) => {
                if (post._id === action.payload._id) {
                    console.log(action.payload);
                    return { ...post, likes: action.payload.likes };
                }
                return post;
            })
        default:
            // return posts;
            return [];
    }
}