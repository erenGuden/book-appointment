export default (state, action) => {
    switch(action.type) {
        case 'ADD_BOOKING':
            return {
                ...state,
                bookingData: [action.payload, ...state.bookingData]
            }
        default: 
        return state;
    }
}