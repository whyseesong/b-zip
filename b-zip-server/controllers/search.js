import kakaoApi from "../apis/kakao/locationSearch";

const searchPlaces = (req, res, next) => {
  const result = kakaoApi.searchPlacesFromKakao(req.query.text);
  return res.json(result);
};
const testPlaces = (req, res, next) => {
  console.log("test for place search");
  return res.json({ message: "done" });
};

export { searchPlaces, testPlaces };
