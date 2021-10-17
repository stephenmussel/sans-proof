const details = (state = [], action) => {
    console.log('in details reducer');
    console.log('this is action.payload: ', action.payload);
    
    if(action.type === 'SET_DETAILS') {
        return action.payload
    }
    return state;
}

export default details;