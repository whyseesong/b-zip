import Axios from "axios";

import axios from "axios";

const instance = axios.create({
  baseURL: "https://dapi.kakao.com/v2/local/search",
  headers: {
    Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
  },
  timeout: 1000,
});

const searchPlacesFromKakao = async (query) => {
  const results = await instance.get("/keyword.json", {
    params: {
      query,
    },
  });
  console.log(results);
};

export { searchPlacesFromKakao };
