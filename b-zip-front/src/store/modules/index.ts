import { combineReducers } from 'redux';
import step from '@store/modules/step';

const rootReducer = combineReducers({
  step,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
