import {
  ChangeBusAction,
  ChangeBusStopAction,
  ChangeCurStepAction,
  ChangeOfficeAction,
  StepActionType,
  StepState,
} from '@store/types/step';
import {
  BusDataType,
  BusStopDataType,
  OfficeDataType,
} from '@store/types/common';

export const CHANGE_CUR_STEP = 'step/CHANGE_CUR_STEP' as const;
export const CHANGE_OFFICE = 'step/CHANGE_OFFICE' as const;
export const CHANGE_BUS_STOP = 'step/CHANGE_BUS_STOP' as const;
export const CHANGE_BUS = 'step/CHANGE_BUS' as const;

export const changeCurStep = (curStep: number): ChangeCurStepAction => ({
  type: CHANGE_CUR_STEP,
  curStep,
});
export const changeOffice = (office: OfficeDataType): ChangeOfficeAction => ({
  type: CHANGE_OFFICE,
  office,
});
export const changeBusStop = (
  busStop: BusStopDataType,
): ChangeBusStopAction => ({ type: CHANGE_BUS_STOP, busStop });
export const changeBus = (bus: BusDataType): ChangeBusAction => ({
  type: CHANGE_BUS,
  bus,
});

const initialState: StepState = {
  curStep: 0,
  office: null,
  busStop: null,
  bus: null,
};

export default function step(
  state = initialState,
  action: StepActionType,
): StepState {
  switch (action.type) {
    case CHANGE_CUR_STEP:
      return {
        ...state,
        curStep: action.curStep,
      };
    case CHANGE_OFFICE:
      return {
        ...state,
        office: action.office,
      };
    case CHANGE_BUS_STOP:
      return {
        ...state,
        busStop: action.busStop,
      };
    case CHANGE_BUS:
      return {
        ...state,
        bus: action.bus,
      };
    default:
      return state;
  }
}
