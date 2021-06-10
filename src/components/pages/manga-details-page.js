import React, {useEffect} from 'react';
import MangaDetails from '../manga-detail';
import {useDispatch, useSelector} from 'react-redux';
import {getMangaByTitle, updateManga} from '../../actions/manga';

const MangaDetailPage = ({url})=>{
    const loading = useSelector(state=>state.loading);
    const manga = useSelector(state=>state.details);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getMangaByTitle(url));
    },[dispatch]);
   
    const onAddVolume = () =>{
        const newVolume = {
            number:manga.volumes.length
        } 
        dispatch(updateManga(newVolume, manga._id));
    }
   
    return !loading&&manga.volumes? <MangaDetails manga={manga} onAddVolume={onAddVolume}/>:<h1>...Loading</h1>}
    
export default MangaDetailPage;