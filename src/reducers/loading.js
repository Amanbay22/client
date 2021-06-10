const loading = (loading = true, action) => {
    switch(action.type){
        case 'LOADING_ON':
            return true;
        case 'LOADING_FALSE':
            return false;
        default:
            return loading;
    }
}
export default loading;