import axios from 'axios';

const API_KEY = '694e8a3729msh1745f9f80808319p1f7cf7jsn67989a5c9376';
const API_HOST = 'steam2.p.rapidapi.com';

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': API_HOST
};

export async function getAllGames() {
  const response = await axios.get(
    'https://steam2.p.rapidapi.com/search/Counter/page/1',
    { headers }
  );
    return response.data;
};