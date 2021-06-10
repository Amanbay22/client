import React,{useState} from 'react';
import FileBase from 'react-file-base64';
import {updateVolume} from '../../actions/manga';
import {useDispatch} from 'react-redux';

const ChapterAddForm= () =>{
    const [images, setImages] = useState();
    const dispatch = useDispatch();
    const number = 1;
    const volumeId = "60410ee4112d79158c437b4f";
    const AddChapter = (e) =>{
        e.preventDefault();
        const newChapter = {
            number,
            images
        }
        dispatch(updateVolume(newChapter,volumeId));
    }

    return(
        <form onSubmit={AddChapter}>
            <FileBase type="file" multiple={true} onDone={(item)=>setImages(item)}/>
            <button type="submit">Ok</button>
        </form>
    );
};
export default ChapterAddForm;