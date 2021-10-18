const favorite = (state = [], action) => {
    console.log('in favorite reducer');
    console.log('this is action.payload: ', action.payload);
    if(action.type === 'SET_FAVORITE') {
        return action.payload;
    }
    return state;
}

export default favorite;