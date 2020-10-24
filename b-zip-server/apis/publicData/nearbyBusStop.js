import axios from "axios";
import convertJSON from "../common/xmlToJson";

const getNearbyBusStops = async (tmX, tmY, radius) => {
  let xmlDatas = await axios.get(
    "http://ws.bus.go.kr/api/rest/stationinfo/getStationByPos",
    {
      params: {
        ServiceKey: `${process.env.DATA_BUS_STOP_API_KEY}`,
        tmX,
        tmY,
        radius,
      },
      timeout: 1000,
    }
  );

  let resultData = convertJSON(xmlDatas);

  return resultData.ServiceResult;
};

const getBusStationInfo = async (stationList) => {
  let promiseArray = stationList.map((arsId) =>
    axios.get("http://ws.bus.go.kr/api/rest/stationinfo/getStationByUid", {
      params: {
        ServiceKey: `${process.env.DATA_BUS_STOP_API_KEY}`,
        arsId,
      },
    })
  );

  let allData = await axios.all(promiseArray).then((res) => {
    let test = res.map((infoData) => convertJSON(infoData));
    console.log(test);
    let test2 = test.map(
      (cData) => cData.ServiceResult.msgBody.itemList[0]
      // return {
      //   arsId: cData.ServiceResult.msgBody.itemList[0].arsId,
      //   itemList: cData.ServiceResult.msgBody.itemList,
      // };
    );
    console.log(test2);
  });
};

export default { getNearbyBusStops, getBusStationInfo };
