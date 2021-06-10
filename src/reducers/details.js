const details = (details = {volumes:[]}, action) => {
    switch(action.type){
        case 'FETCH_DETAILS_MANGA':
            return  action.payload;
        case 'UPDATE_DETAIL':
            return action.payload;
        default:
            return details;
    }
}
export default details;