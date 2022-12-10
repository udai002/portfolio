import { data } from 'autoprefixer';
import  {put, takeEvery} from 'redux-saga/effects'
import { PROJECT_LIST,SET_PROJECT_LIST } from './constant';

function* getProjects(){
    console.log("API is called here")
    data = yield fetch("http://localhost:3500/projects");
    data = yield data.json();
    yield put({type:SET_PROJECT_LIST,data})//this is a type of action where we are calling it in saga , we can call it in reducer funtion
    
}

function* projectSaga(){
    yield takeEvery(PROJECT_LIST,getProjects)
}

export default projectSaga;

