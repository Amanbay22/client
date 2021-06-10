import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createManga} from '../../actions/manga';
import FileBase from 'react-file-base64';
const MangaAddForm = () =>{
    const dispatch = useDispatch();
    
    const [mangaData, setMangaData] = useState({
        titleRus:'', titleEng:'',description:'', url:'',
        type:'',releaseDate:'2020', author:'', image:''
    });
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createManga(mangaData));
    }
    return(
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <input className="form-control" type="text" placeholder="Title Rus" 
            value={mangaData.titleRus}
            onChange={(e)=>setMangaData({ ...mangaData, titleRus: e.target.value})} />
        </div>
        <div className="form-group">
            <input className="form-control" type="text" placeholder="Title Eng" 
            value={mangaData.titleEng}
            onChange={(e)=>setMangaData({ ...mangaData, titleEng: e.target.value, url: e.target.value.toLowerCase().trim().replace(/ /g, '-')})}/>
        </div>
        <div className="form-group">
            <label >Description</label>
            <textarea className="form-control"  rows="3"
             value={mangaData.description}
             onChange={(e)=>setMangaData({ ...mangaData, description: e.target.value})}
            ></textarea>
        </div>
        <div className="form-group">
            <input className="form-control" type="text" placeholder="Type"
            value={mangaData.type}
            onChange={(e)=>setMangaData({ ...mangaData, type: e.target.value})} />
        </div>
        <div className="form-group">
            <input className="form-control" type="text" placeholder="Author" 
            value={mangaData.author}
            onChange={(e)=>setMangaData({ ...mangaData, author: e.target.value})}/>
        </div>
        <FileBase type="file" multiple={false} onDone={({base64})=>setMangaData({ ...mangaData, image:base64})}/>
        <button className="btn btn-secondary" type="submit">Create Manga</button>
        </form>
    );
};
export default MangaAddForm;