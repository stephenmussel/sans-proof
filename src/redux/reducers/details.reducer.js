const details = (state = [], action) => {
    console.log('in details reducer');
    if(action.type === 'SET_DETAILS') {
        return action.payload
    }
    return state;
}

export default details;