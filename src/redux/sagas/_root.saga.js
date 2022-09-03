import {all} from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import imageSaga from './image.saga';
import databaseImageSaga from './databaseImage.saga';
import projectsSaga from './projects.saga';
import clientSaga from './client.saga';
import clienttypeSaga from './clienttype.saga';
import specialFeatureSaga from './specialFeature.saga';
import newProjectSaga from './newProject.saga';
import getProjectSaga from './getProject.saga';
import estimateCost from './estimateCost.saga';
import projectscopeSaga from './projectscope.saga';
import fullformSaga from './fullform.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    databaseImageSaga(), // databaseImage saga is now registered
    imageSaga(), //  image saga is now registered
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    projectsSaga(),
    clientSaga(),
    clienttypeSaga(),
    specialFeatureSaga(),
    newProjectSaga(),
    getProjectSaga(),
    estimateCost(),
    projectscopeSaga(),
    fullformSaga()

  ]);
}
