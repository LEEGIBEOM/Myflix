// import axios from "axios";

// const api_key = "6d111d60c29d38c8fc83c795e61e7e94";
// const language = "ko-KR";
// const test = `?api_key=${api_key}&language=${language}`;

// const api = axios.create({
//   baseURL: "https://api.themoviedb.org/3/",
//   params: {
//     api_key: "6d111d60c29d38c8fc83c795e61e7e94",
//     language: "ko-KR",
//   },
// });

// const targetURL = "tv/popular/";
// api.get(`${targetURL}${test}`);

// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "6d111d60c29d38c8fc83c795e61e7e94",
    language: "ko-KR",
  },
});

export const moviesApi = {
  nowPlaying: () => api.get(`movie/now_playing`),
  upcomming: () => api.get("movie/upcomming"),
  topRated: () => api.get(`movie/top_rated`),
  popular: () => api.get(`movie/popular`),
  detail: (id) =>
    api.get(`tv/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get(`/search/movie`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};

export const tvApi = {
  topRated: () => api.get(`tv/top_rated`),
  popular: () => api.get(`tv/popular`),
  airingToday: () => api.get(`tv/airing_today`),
  detail: (id) =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response: "videos",
      },
    }),
  search: (term) =>
    api.get(`/search/tv`, {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
