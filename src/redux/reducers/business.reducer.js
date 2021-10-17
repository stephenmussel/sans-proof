const business = (state = [], action) => {
    // console.log('in business reducer');
    // console.log('this is action.payload: ', action.payload);
    if(action.type === 'SET_BUSINESS') {
        return action.payload;
    }
    return state;
}

export default business;