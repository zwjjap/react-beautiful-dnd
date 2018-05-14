// @flow
import { createStore, composeEnhances, applyMiddleware } from 'redux';
import reducer from '../../../../src/state/reducer';
import type { Store } from '../../../../src/types';

export default (...middleware: mixed[]): Store => createStore(
  reducer,
  composeEnhances(
    applyMiddleware(...middleware)
  )
);
