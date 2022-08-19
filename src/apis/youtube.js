import axios from 'axios';

const KEY = 'AIzaSyD6vzYDXUJ8qXQzlfYM6VfGngTOGzzWjxQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY
  }
});

