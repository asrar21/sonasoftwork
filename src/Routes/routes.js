import React, { Component } from 'react'
//imported homescreen from screens folder
import HomeScreen from '../Screens/HomeScreen/homeScreen'
import LogIn from '../Screens/Login/login';
//importing Configuration from screens and configuration folder
import Configuration from '../Screens/Configuration/configuration';
//importing notification from screens and configuration folder
import Notification from '../Screens/Configuration/Notification/notification';
import * as settings from "../Screens/Settings";
import ArchivalEmail from '../Screens/Report/ArchivalEmail/ArchivalEmail'
import EmailStatistic from '../Screens/Report/EmailStatistics/EmailStatistics';
import ArchiveStoreStatistics from '../Screens/Report/ArchiveStoreStatistics/ArchiveStoreStatistics'
import Attachment from '../Screens/Report/Attachment/Attachment'
import Compliance from '../Screens/Report/Compliance/Compliance'
import AccessControl from '../Screens/Report/AccessControl/AccessControl';
import ConfigurationManagemnt from '../Screens/Report/ConfigurationManagement/ConfigurationManagement';
import DataInformationLeakagePrevention from '../Screens/Report/DataInformation&Leakage/DataInformation&Leakage';
import Purge_Policy from '../Screens/Report/PurgePolicy/PurgePolicy';
import Retention_Policy from '../Screens/Report/RetentionPolicy/RetentionPolicy'
import ActivateProduct from '../Screens/Maintenance/activateProduct';
import NonQualifiedEmails  from '../Screens/Report/Non-QualifiedEmails/Non-QualifiedEmails'
import PurgePolicy from '../Screens/Maintenance/purgePolicy';
import GeneralEmailStatistics from '../Screens/Report/GeneralEmailStatistics/GeneralEmailStatistics';
import AttachmentTypeStatsReport from '../Screens/Report/AttachmentTypeStatistics/AttachmentTypeStatistics'
import { BrowserRouter as Router, Route } from "react-router-dom";
import AttachmentTypeStatistics from '../Screens/Report/AttachmentTypeStatistics/AttachmentTypeStatistics';


export default class Routers extends Component {

  render() {
    
    return (
      <Router>
    <div>
      

      <Route exact path="/" component={LogIn} />
      <Route path="/homescreen" component={HomeScreen} />
      <Route path="/configuration" component={Configuration} />
      <Route path="/notification" component={Notification} />
      <Route path="/settings/emailServer" component={settings.EmailServer} />
      <Route path="/settings/archivalPolicy" component={settings.ArchivalPolicy} />
      <Route path="/settings/contentIdentificationPolicy" component={settings.ContentIdentificationPolicy} />
      <Route path="/activateProduct" component={ActivateProduct} />
      <Route path="/purgePolicy" component={PurgePolicy} />
      <Route path="/settings/labelingPolicy" component={settings.LabelingPolicy} />
      <Route path="/ArchivalEmail" component={ArchivalEmail} />
      <Route path="/EmailStatistic" component={EmailStatistic} />
      <Route path="/ArchiveStore" component={ArchiveStoreStatistics} />
      <Route path="/Attachments" component={Attachment} />
      <Route path="/Compliances" component={Compliance} />
      <Route path="/AccessControls" component={AccessControl} />
      <Route path="/ConfigurationManagemnt" component={ConfigurationManagemnt}/>
      <Route path="/DataInformationLeakagePrevention" component={DataInformationLeakagePrevention}/>
      <Route path="/Purge_Policy" component={Purge_Policy}/>
      <Route path="/Retention_Policy" component={Retention_Policy}/>
      <Route path="/NonQualifiedEmails" component={NonQualifiedEmails}/>
      <Route path="/GeneralEmail" component={GeneralEmailStatistics}/>
      <Route path="/AttachmentStatistics" component={AttachmentTypeStatistics}/>


      <Route path="/settings/retentionPolicy" component={settings.RetentionPolicy} />
    </div>
  </Router>
    )
  }
}



