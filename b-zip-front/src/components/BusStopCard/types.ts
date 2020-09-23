export type BusStopProps = {
  typeOfBus: string;
  sortByTime: boolean;
  busStopName: string;
  busStopNumber: string;
  direction: string;
  walkingTime?: number;
  numberOfBuses?: number;
  onClick?: () => void;
};
