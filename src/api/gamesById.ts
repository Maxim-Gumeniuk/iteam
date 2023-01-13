import axios from 'axios';

const API_KEY = 'a654ea625cmsh1001ea322ff7839p141828jsn0c595b5379b3';
const API_HOST = 'steam2.p.rapidapi.com';

const headers = {
  'X-RapidAPI-Key': API_KEY,
  'X-RapidAPI-Host': API_HOST
};

export async function getDetails(id: number) {
  const response = await axios.get(
    `https://steam2.p.rapidapi.com/appDetail/${id}`,
    { headers }
  );
    return response.data;
};