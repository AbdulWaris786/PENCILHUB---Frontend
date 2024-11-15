export const environment = {
  production: true,
  apiUrl: 'https://pencilhub.in/wp-json/wp/v2',
  apiKey: 'your-prod-api-key'
};

const API_KEY = 'AIzaSyAo5H_M2tQRkGd8LKkq-pfL6kXou82oFsos'
const CHANNEL_ID = 'UCh1Mx3gFfUWtGNBKm-1yZLg'

export const youtubeEnvironment = {
  production: true,
  youtubeApiUrl: `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`,
  recentVideos : `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&key=${API_KEY}`,
  videoApiUrl: `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=50&order=date&type=video&key=${API_KEY}`,
  filteredVideoUrl: `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&key=${API_KEY}`
};




