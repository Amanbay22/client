import React,{useEffect} from 'react';
import MangaAddForm from '../manga-add-form';
import {useDispatch} from 'react-redux';
import {getManga} from '../../actions/manga';
import MangaList from '../manga-list';
import {MangaDetailPage, ChapterPage} from '../pages';
import {Route, Router, Switch} from 'react-router-dom';
import ChapterAddForm from '../chapter-add-form';
const App = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getManga());
    },[dispatch]);
    
    return(
        <div className="container">
            <Switch>
            <Route path = "/add_manga" exact component={MangaAddForm}/>
            <Route path = "/manga" exact component={MangaList} />
            <Route path = "/manga/:url" exact render ={({match})=>{
                const {url} = match.params;
                return <MangaDetailPage url={url}/>
            }}
            />
            <Route path = "/manga/:title/v/:nTom/c/:nCh" exact render ={({match})=>{
                const {title,nTom, nCh} = match.params;
                return <ChapterPage title={title} nTom={nTom} nCh={nCh}/>
            }}
            />
            <Route path = "/manga/chapter/add_chapter" exact component={ChapterAddForm}/>
            </Switch>
        </div>
    );
}

export default App;