import * as api from '../api';

export const getManga = () => async(dispatch)=> {

    try{
        dispatch({type: 'LOADING_ON'});

        const {data} = await api.fetchManga();
        dispatch( {type: 'FETCH_ALL_MANGA', payload: data });
        dispatch({type: 'LOADING_FALSE'});

    } catch(error){
        console.log(error.message);
    }

}
export const createManga = (manga)=>async(dispatch)=>{
    try{
        const {data} = await api.createManga(manga);

        dispatch( {type: 'CREATE_MANGA', payload: data} );
    }catch(error){
        console.log(error.message);
    }
}
export const updateManga = (newVolume, mangaId)=>async(dispatch)=>{
    try{
        const {data} = await api.createVolume(newVolume, mangaId);
        dispatch({type: 'UPDATE_DETAIL', payload: data});

    }catch(error){
        console.log(error.message);
    }
}

export const getMangaByTitle = (url)=>async(dispatch)=>{
    try{
        dispatch({type: 'LOADING_ON'});
        const {data} = await api.getMangaByTitle(url);
        dispatch({type: 'FETCH_DETAILS_MANGA', payload:data});
        dispatch({type: 'LOADING_FALSE'});

    }catch(error){
        console.log(error.message);
    }
    
}
export const updateVolume = (newChapter, volumeId)=>async(dispatch)=>{
    try{
        const {data} = await api.createChapter(newChapter, volumeId);
        console.log(data);
    }catch(error){
        console.log(error.message);
    }
}

export const getChapter = (title, tomN, chN) => async(dispatch)=>{
    try{
        dispatch({type: 'LOADING_ON'});
        const {data} = await api.getChapter(title, tomN, chN);
        dispatch( {type: 'FETCH_CHAPTER', payload: data });
        dispatch({type: 'LOADING_FALSE'});
    }
    catch(error){
        console.log(error.message);
    }
}