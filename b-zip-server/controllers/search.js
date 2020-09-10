import kakaoApi from "../apis/kakao/locationSearch";

const searchPlaces = (req, res, next) => {
  kakaoApi.searchPlaces();
  return res.json({ message: "searchPlace done" });
};
const testPlaces = (req, res, next) => {
  console.log("test for place search");
  return res.json({ message: "done" });
};

export { searchPlaces, testPlaces };
