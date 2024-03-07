import { combineReducers } from "redux";

// Front
import Layout from "./layouts/reducer";

// Authentication
import Login from "./auth/login/reducer";
import Account from "./auth/register/reducer";
import ForgetPassword from "./auth/forgetpwd/reducer";
import Profile from "./auth/profile/reducer";



//Ecommerce
import Ecommerce from "./ecommerce/reducer";

//Project
import Projects from "./projects/reducer";

// Tasks
import Tasks from "./tasks/reducer";
//Form advanced
import changeNumber from "./formAdvanced/reducer";

//Crypto
import Crypto from "./crypto/reducer";

//TicketsList
import Tickets from "./tickets/reducer";
//Crm
import Crm from "./crm/reducer";


// Dashboard Analytics
import DashboardAnalytics from "./dashboardAnalytics/reducer";

// Dashboard CRM
import DashboardCRM from "./dashboardCRM/reducer";

// Dashboard Ecommerce
import DashboardEcommerce from "./dashboardEcommerce/reducer";

// Dashboard Cryto
import DashboardCrypto from "./dashboardCrypto/reducer";

// Dashboard Cryto
import DashboardProject from "./dashboardProject/reducer";

// Dashboard NFT
import DashboardNFT from "./dashboardNFT/reducer";

// Pages > Team
import Team from "./team/reducer";

// File Manager
import FileManager from "./fileManager/reducer"


//Job 
import Jobs from "./job/reducer";

//API Key
import APIKey from "./apikey/reducer";
const rootReducer = combineReducers({
    // public
    Layout,
    Login,
    Account,
    ForgetPassword,
    Profile,
  
   
    Projects,
    Ecommerce,
    Tasks,
    changeNumber,
    Crypto,
    Tickets,
    Crm,
   
  
    DashboardAnalytics,
    DashboardCRM,
    DashboardEcommerce,
    DashboardCrypto,
    DashboardProject,
    DashboardNFT,
    Team,
    FileManager,
   
    Jobs,
    APIKey
});

export default rootReducer;