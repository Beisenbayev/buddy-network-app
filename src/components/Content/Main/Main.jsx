import React from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './Main.module.css';

import LoginContainer from './Login/LoginContainer';
import ProfileContainer from './Profile/ProfileContainer';
import DialogsContainer from './Dialogs/DialogsContainer';
import MessagesContainer from './Messages/MessagesContainer';
import MembersContainer from './Members/MembersContainer';
import SettingsContainer from './Settings/SettingsContainer';


const Hello = (props) => {
   return (
      <div>Hello, world!</div>
   );
}

const Main = (props) => {
   return (
      <main className={s.block}>
         <Switch> {/*add not found page*/}
            <Route path='/login' render={() => <LoginContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />    {/*change profile navLink*/}
            <Route exact path='/messages' render={() => <DialogsContainer />} />
            <Route path='/messages/:userId' render={() => <MessagesContainer />} />
            <Route path='/members' render={() => <MembersContainer />} />
            <Route path='/settings' render={() => <SettingsContainer />} />
            <Route path='/' render={() => <Hello />} />
         </Switch>
      </main>
   );
}


export default Main;