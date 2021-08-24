import React from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './Main.module.css';

import LoginContainer from './Login/LoginContainer';
import MembersContainer from './Members/MembersContainer';
import ProfileContainer from './Profile/ProfileContainer';

const Hello = (props) => {
   return (
      <div>1) create an global object [listsType or membersType] for membersPage
         2)replace hooks to component lifecycles in profilePage </div>
   );
}

const Main = (props) => {
   return (
      <main className={s.block}>
         <Switch>
            <Route path='/login' render={() => <LoginContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/members' render={() => <MembersContainer />} />
            <Route path='/' render={() => <Hello />} />
         </Switch>
      </main>
   );
}


export default Main;