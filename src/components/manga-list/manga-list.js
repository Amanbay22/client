import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
const MangaList = () => {
    const dispatch = useDispatch();
    const mangaList = useSelector(state=>state.manga);
    const loading = useSelector(state=>state.loading);
    return(
        !loading?
        <div>
        {
            mangaList.map((manga)=>{
                return(
                <div key={manga._id}>
                <h1>{manga.titleRus}</h1>
                <span onClick={()=>dispatch({type: 'LOADING_ON'})}>
                    <Link to={`/manga/${manga.url}`}>Details</Link></span>
                </div>)
            })
        }
        </div>:<h1>...loading</h1>
    );
};
export default MangaList;