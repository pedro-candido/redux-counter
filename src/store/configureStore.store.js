import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';

// import logger from './middleware/logger.middleware'
import contador from './reducers/contador.reducer'
import modal from './reducers/modal.reducer';

// const middleware = [...getDefaultMiddleware, logger]
const reducers = combineReducers({contador, modal})
const store = configureStore({reducer: reducers})

export default store;