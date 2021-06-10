import React from 'react';
import {Link} from 'react-router-dom';
const MangaDetails = ({ manga, onAddVolume}) =>{
   
    
    return(
    
        <div>
        <img src={manga.image} alt="kek"/>
        {
            manga.volumes.map(vol=>{
                return(
                    <div key={vol._id} className="d-flex">
                        <h1 className="mr-3">Том {vol.number}</h1>
                        {
                            vol.chapters.map(({_id, number})=>{
                                return <Link key = {_id} to={`/manga/${manga.url}/v/${vol.number}/c/${number}`}>Глава {number}</Link>
                                }    )
                        
                        }
                    </div>
                )
            })
        }
        <button className="btn btn-secondary" onClick={()=>onAddVolume()}>
            Add new Volume:
        </button>
        </div>
        );
       
};
export default MangaDetails;