import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://dapi.kakao.com/v2/local/search",
//   headers: {
//     Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
//   },
//   timeout: 1000,
// });

export default {
  searchPlacesFromKakao: async (query) => {
    console.log(query);
    await axios.get("https://dapi.kakao.com/v2/local/search/keyword.json", {
      params: {
        query,
      },
      headers: {
        Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
      },
      timeout: 1000,
    });
  },
};
