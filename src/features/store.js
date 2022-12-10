// import { createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./rootReducer";
import projectSaga from './projectSaga';
import createSagaMiddleware from '@redux-saga/core';


const sagaMiddleware = createSagaMiddleware()
const store = configureStore(
    {
        reducer: rootReducer,
        middleware: () => [sagaMiddleware]
    }
);

sagaMiddleware.run(projectSaga);
export default store;