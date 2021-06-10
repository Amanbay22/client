import axios from 'axios';

const url = 'http://localhost:5000';

export const fetchManga = () => axios.get(`${url}/manga`);
export const createManga = (newManga) => axios.post(`${url}/manga/add_manga`,newManga);

export const createVolume = (newVolume, mangaId) => axios.post(`${url}/manga/add_volume/${mangaId}`, newVolume);
export const getMangaByTitle = (title)=>axios.get(`${url}/manga/${title}`);

export const createChapter = (newChapter, volumeId) => axios.post(`${url}/manga/add_chapter/${volumeId}`, newChapter);

export const getChapter = (title, tomN, chN) => axios.get(`${url}/manga/${title}/v/${tomN}/c/${chN}`);