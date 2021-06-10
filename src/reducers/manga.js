const manga = (manga = [], action) => {
    switch(action.type){
        case 'FETCH_ALL_MANGA':
            return  action.payload;
        case 'CREATE_MANGA':
            return [...manga, action.payload];
        case 'UPDATE_MANGA':
            const {payload} = action;
            const index = manga.findIndex(obj=>obj._id===payload._id);
            return [...manga.slice(0,index), payload, ...manga.slice(index+1)];
        default:
            return manga;
    }
}
export default manga;