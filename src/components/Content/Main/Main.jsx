import React from 'react';
import { Switch, Route } from 'react-router-dom';
import s from './Main.module.css';

import Login from './Login/Login';
import Profile from './Profile/Profile';
import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';
import Members from './Members/Members';
import Settings from './Settings/Settings';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

const Main = (props) => {
   return (
      <main className={s.block}>
         <Switch>
            <Route path='/login' render={() => <Login />} />
            <Route path='/profile/:userId?' render={() => <Profile />} />  
            <Route exact path='/messages' render={() => <Dialogs />} />
            <Route path='/messages/:userId' render={() => <Messages />} />
            <Route path='/members' render={() => <Members />} />
            <Route path='/settings' render={() => <Settings />} />
            <Route exact path='/' render={() => <Home />} />
            <Route render={() => <NotFound />} />
         </Switch>
      </main>
   );
}


export default Main;