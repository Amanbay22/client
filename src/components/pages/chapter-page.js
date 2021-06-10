import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getChapter} from '../../actions/manga';

const ChapterPage = ({title, nTom, nCh})=>{
    const loading = useSelector(state=>state.loading);
    const chapter = useSelector(state=>state.chapter);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getChapter(title,nTom,nCh));
    },[dispatch,title, nTom, nCh]);
    return !loading&&chapter.images?(<div>
        {chapter.images.map(({name, base64})=><img key={name} src={base64} alt={name}/>).reverse()}
    </div>):<h1>...Loading</h1>
}
export default ChapterPage;