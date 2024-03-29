import { all, fork } from "redux-saga/effects";
//layout
import LayoutSaga from "./layouts/saga";
//Auth
import AccountSaga from "./auth/register/saga";
import AuthSaga from "./auth/login/saga";
import ForgetSaga from "./auth/forgetpwd/saga";
import ProfileSaga from "./auth/profile/saga";



//ecommerce
import ecommerceSaga from "./ecommerce/saga";

//Project
import projectSaga from "./projects/saga";
// Task
import taskSaga from "./tasks/saga";
// Crypto
import cryptoSaga from "./crypto/saga";
//TicketsList
import ticketsSaga from "./tickets/saga";

//crm
import crmSaga from "./crm/saga";

// Dashboard Analytics
import dashboardAnalyticsSaga from "./dashboardAnalytics/saga";

// Dashboard CRM
import dashboardCrmSaga from "./dashboardCRM/saga";

// Dashboard Ecommerce
import dashboardEcommerceSaga from "./dashboardEcommerce/saga";

// Dashboard Crypto
import dashboardCryptoSaga from "./dashboardCrypto/saga";

// Dashboard Project
import dashboardProjectSaga from "./dashboardProject/saga";

// Dashboard NFT
import dashboardNFTSaga from "./dashboardNFT/saga";

// Pages > Team
import teamSaga from "./team/saga";

// File Manager
import fileManager from "./fileManager/saga";


//Job
import jobSaga from "./job/saga";

//API Key
import APIKeysaga from "./apikey/saga";

export default function* rootSaga() {
  yield all([
    //public
    fork(LayoutSaga),
    fork(AccountSaga),
    fork(AuthSaga),
    fork(ForgetSaga),
    fork(ProfileSaga),
    fork(projectSaga),
    fork(taskSaga),
    fork(cryptoSaga),
    fork(ticketsSaga),
   
    fork(ecommerceSaga),
    fork(crmSaga),
    
    fork(dashboardAnalyticsSaga),
    fork(dashboardCrmSaga),
    fork(dashboardEcommerceSaga),
    fork(dashboardCryptoSaga),
    fork(dashboardProjectSaga),
    fork(dashboardNFTSaga),
    fork(teamSaga),
    fork(fileManager),
    fork(jobSaga),
    fork(APIKeysaga),
  ]);
}
