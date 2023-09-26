import React from 'react';
import Homebanner from './Homebanner';
import HomePromise from './Homepromise';
import Homeclient from './Homeclient';
import WordPressPosts from './Homeservices';
import CenterMode from './Homekeytab';
import Homeblog from './Homeblog';
import Header from '../Header';
import Footer from '../Footer';
const Home = () => {
  return (

<><Header/>

<Homebanner/>
<WordPressPosts/>
<HomePromise/>

<CenterMode/>
<Homeclient/>
<Homeblog/>


<Footer/>
</>

  );
}

export default Home;
    