import axios from "axios";

const searchPlacesFromKakao = async (query) => {
  let {
    data: { documents: dataList, meta: dataSchema },
  } = await axios.get("https://dapi.kakao.com/v2/local/search/keyword.json", {
    params: {
      query,
    },
    headers: {
      Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
    },
    timeout: 1000,
  });
  return dataList.filter((item) => item.category_group_code !== "SW8");
};

const searchSubwaysFromKakao = async (query) => {
  let {
    data: { documents: dataList, meta: dataSchema },
  } = await axios.get("https://dapi.kakao.com/v2/local/search/category.json", {
    params: {
      query,
      category_group_code: "SW8",
    },
    headers: {
      Authorization: `KakaoAK ${process.env.KAKAO_REST_API_KEY}`,
    },
    timeout: 1000,
  });
  return dataList;
};

const searchAllFromKakao = async (query) => {
  await Promise.all([
    searchPlacesFromKakao(query),
    searchSubwaysFromKakao(query),
  ]).then((values) => {
    return values;
  });
};

export default {
  searchPlacesFromKakao,
  searchSubwaysFromKakao,
  searchAllFromKakao,
};
