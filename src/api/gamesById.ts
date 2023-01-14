import axios from 'axios';

const API_KEY = 'f0682db061msh51baff57b7867ffp1bbdbfjsn0b0ce1113c97';
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