// 각 타입과 필드에 대한 설명도 함께 추가하기

// 직장건물 데이터타입
export interface OfficeDataType {
  // 직장건물이름
  name: string;
  // 위치
  pos: PosDataType;
  // 간단주소
  address?: string;
  // 간단설명
  description?: string;
}

// 버스정류장 데이터타입
export interface BusStopDataType {
  name: string;
  id: string;
  buses: BusDataType[];
}

// 버스 데이터타입
export interface BusDataType {
  // 버스아이디: 110B
  id: string;
  // 버스타입: 간선, 지선, 등
  type: string;
  // 여기에 필요한것 더 추가
}

// 위치 데이터타입
export interface PosDataType {
  // x좌표
  xPos: number;
  // y좌표
  yPos: number;
}
