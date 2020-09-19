const CHANGE_CUR_STEP = 'step/CHANGE_CUR_STEP';
const CHANGE_OFFICE = 'step/CHANGE_OFFICE';
const CHANGE_BUS_STOP = 'step/CHANGE_BUS_STOP';
const CHANGE_BUS = 'step/CHANGE_BUS';

export const changeCurStep = (curStep) => ({ type: CHANGE_CUR_STEP, curStep });
export const changeOffice = (office) => ({ type: CHANGE_OFFICE, office });
export const changeBusStop = (busStop) => ({ type: CHANGE_BUS_STOP, busStop });
export const changeBus = (bus) => ({ type: CHANGE_BUS, bus });

const initialState = {
  curStep: 0,
  office: null,
  busStop: null,
  bus: null,
};

export default function step(state = initialState, action) {
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
