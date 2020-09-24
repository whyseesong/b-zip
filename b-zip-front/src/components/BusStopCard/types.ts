export type BusStopProps = {
  id: number;
  typeOfBus: string[];
  isSortByTime: boolean;
  busStopName: string;
  busStopNumber: string;
  direction: string;
  walkingTime?: number;
  numberOfBuses?: number;
  onClick?: () => void;
};
