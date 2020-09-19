interface BusStopProps {
  sortByTime: boolean;
  id: number;
  busStopName: string;
  busStopNumber: string;
  direction: string;
  walkingTime?: number;
  numberOfBuses?: number;
  onClick?: () => void;
}
