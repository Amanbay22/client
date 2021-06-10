import { combineReducers } from 'redux';
import details from './details';
import manga from './manga';
import loading from './loading';
import chapter from './chapter';
export default combineReducers({
    manga,
    details,
    loading,
    chapter
});