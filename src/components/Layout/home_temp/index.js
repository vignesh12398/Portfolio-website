import { Link } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
    const [letterClass,setLetterclass]=useState('text-animate')
    const nameArray=['v','i','g','n','e','s','h']
    const jobArray=['w','e','b','d','e','v','e','l','o','p','e','r']
    useEffect(() => {
  const timeout = setTimeout(() => {
    setLetterclass('text-animate-hover');
  }, 4000);

  // Cleanup function (this is what React expects)
  return () => clearTimeout(timeout);
}, []);
 
    return (
       
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    
                    <br /> 
                    <span className={`${letterClass} _13`}>I'</span>
                    <span className={`${letterClass} _14`}>m</span>
                    <AnimatedLetters letterClass={letterClass}
                    strArray={nameArray}
                    idx={15}/>
                    <br />
              <AnimatedLetters letterClass={letterClass}
                    strArray={jobArray}
                    idx={22}/>
                </h1>
                <h2>I studying btech Aiml</h2>
               <Link to="/contact" className='flat'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        
       
    );
}

export default Home