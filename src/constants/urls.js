const API_URL = 'https://linkr-api-kcil.onrender.com';
const localhost = "http://localhost:4000";

export const postsURL = localhost + "/posts?limit=20";

export const hashtagURL = localhost + "/hashtag/:hashtag?limit=20";

export const searchURL = API_URL + "/search/";

export const userPostsURL = API_URL + "/user/";

export const followURL = API_URL + "/setfollow/";