const chapter = (chapter = {}, action) => {
    switch(action.type){
        case 'FETCH_CHAPTER':
            return  action.payload;
        default:
            return chapter;
    }
}
export default chapter;