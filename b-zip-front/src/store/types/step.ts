import {
  CHANGE_BUS,
  CHANGE_BUS_STOP,
  CHANGE_CUR_STEP,
  CHANGE_OFFICE,
} from '@store/modules/step';
import {
  BusDataType,
  BusStopDataType,
  OfficeDataType,
} from '@store/types/common';

export interface ChangeCurStepAction {
  type: typeof CHANGE_CUR_STEP;
  curStep: number;
}

export interface ChangeOfficeAction {
  type: typeof CHANGE_OFFICE;
  office: OfficeDataType;
}

export interface ChangeBusStopAction {
  type: typeof CHANGE_BUS_STOP;
  busStop: BusStopDataType;
}

export interface ChangeBusAction {
  type: typeof CHANGE_BUS;
  bus: BusDataType;
}

export type StepActionType =
  | ChangeCurStepAction
  | ChangeOfficeAction
  | ChangeBusStopAction
  | ChangeBusAction;

export interface StepState {
  curStep: number;
  office: OfficeDataType;
  busStop: BusStopDataType;
  bus: BusDataType;
}
