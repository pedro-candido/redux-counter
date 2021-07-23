import { configureStore, combineReducers } from '@reduxjs/toolkit';

import contador from './reducers/contador.reducer'
import modal from './reducers/modal.reducer';

const reducers = combineReducers({contador, modal})
const store = configureStore({reducer: reducers})

export default store;