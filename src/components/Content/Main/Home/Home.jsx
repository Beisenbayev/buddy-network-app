import React from 'react';
import { 
   FaGlobe, FaLink, FaYoutube, 
   FaInstagram, FaTelegram 
} from 'react-icons/fa';
import cn from 'classnames';
import s from './Home.module.css';

const Home = (props) => {
   return (
      <div className={cn(s.block, 'main-page')}>
         <h1>Welcome to the community!</h1>
         <p className={s.mainText}>This social network is just study project, which created by ordinary student. To check it out you can use the login and the password below: </p>
         <p className={s.loginPanel}>
            login: <i>kana.mana01@mail.ru</i><br />
            password: <i>tester123</i>
         </p>
         <p className={s.mainText}>I would like to thank the team <b>IT-KAMASUTRA</b> and senpai <b>Dymich</b> for their best study course.</p>
         <h3>They are in social networks: </h3>
         <ul className={s.networks}>
            <li>
               <a href={'https://it-incubator.by/'}
                  target='_blank'
                  rel="noreferrer" ><FaGlobe /></a>
            </li>
            <li>
               <a href={'https://social-network.samuraijs.com/'}
                  target='_blank'
                  rel="noreferrer" ><FaLink /></a>
            </li>
            <li>
               <a href={'https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g'}
                  target='_blank'
                  rel="noreferrer" ><FaYoutube /></a>
            </li>
            <li>
               <a href={'https://www.instagram.com/it.kamasutra.dimych/'}
                  target='_blank'
                  rel="noreferrer" ><FaInstagram /></a>
            </li>
            <li>
               <a href={'https://www.instagram.com/it.kamasutra.dimych/'}
                  target='_blank'
                  rel="noreferrer" ><FaTelegram /></a>
            </li>
         </ul>
      </div>
   );
}


export default Home;