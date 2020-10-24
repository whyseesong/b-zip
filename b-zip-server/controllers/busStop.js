import Axios from "axios";
import publicApi from "../apis/publicData/nearbyBusStop";

const getNearbyBusStop = async (req, res, next) => {
  const params = req.query;
  let tmX = Number(params.tmX);
  let tmY = Number(params.tmY);
  let radius = Number(params.radius) || 500;
  console.log(tmX, tmY, radius);
  if (!tmX || !tmY) {
    return false;
  }
  let baseData = await publicApi.getNearbyBusStops(tmX, tmY, radius);
  let stationList = baseData.msgBody.itemList.map((item) => item.arsId);

  let subData = await publicApi.getBusStationInfo(stationList);

  // sum baseData + subData
  let resultData = baseData;

  return res.json(resultData);
};

export { getNearbyBusStop };
