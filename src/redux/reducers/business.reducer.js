const business = (state = [], action) => {
    if(action.type === 'SET_BUSINESS') {
        return action.payload;
    }
    return state;
}

export default business;