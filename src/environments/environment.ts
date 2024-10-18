export const environment = {
    production: false,
    apiUrl: 'https://pencilhub.in/wp-json/wp/v2',
    apiKey: 'your-dev-api-key'
};

const YOUTUBE_APIKEY = 'AIzaSyCtU0VvXCvGzaSyuBUsccJabhvHkDeLQv0'
const CHANNEL_ID = 'UCh1Mx3gFfUWtGNBKm-1yZLg'
export const youtubeEnvironment = {
  production: false,
  youtubeApiUrl: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_APIKEY}`,
};