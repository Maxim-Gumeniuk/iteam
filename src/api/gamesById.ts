import axios from 'axios';

const API_KEY = '5f824b2209msh0c98f3d93528fbbp198f14jsn50995cc681b2';
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