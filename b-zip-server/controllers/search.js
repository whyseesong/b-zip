import kakaoApi from "../apis/kakao/locationSearch";

const searchPlaces = (req, res, next) => {
  const result = kakaoApi.searchPlacesFromKakao(req.query.text);
  return res.json(result);
};
const searchSubways = (req, res, next) => {
  const result = kakaoApi.searchSubwaysFromKakao(req.query.text);
  return res.json(result);
};

const searchAll = (req, res, next) => {
  const result = kakaoApi.searchAllFromKakao(req.query.text);
  console.log(result);
  return res.json(result);
};

export { searchPlaces, searchSubways, searchAll };
