export const environment = {
    production: false,
    apiUrl: 'https://pencilhub.in/wp-json/wp/v2',
    apiKey: 'your-dev-api-key'
};

const YOUTUBE_APIKEY = 'AIzaSyAo5H_M2tQRkGd8LKkq-pfL6kXou82oFso'
// const YOUTUBE_APIKEY = 'AIzaSyCtU0VvXCvGzaSyuBUsccJabhvHkDeLQv0'
const CHANNEL_ID = 'UCh1Mx3gFfUWtGNBKm-1yZLg'
export const youtubeEnvironment = {
  production: false,
  youtubeApiUrl: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_APIKEY}`,
  videoApiUrl: `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_APIKEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=7` 
};