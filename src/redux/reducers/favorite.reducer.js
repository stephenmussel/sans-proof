const business = (state = [], action) => {
    console.log('in favorite reducer');
    console.log('this is action.payload: ', action.payload);
    if(action.type === 'POST_FAVORITE') {
        return action.payload;
    }
    return state;
}

export default business;