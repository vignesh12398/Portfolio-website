import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3'

const About = () => {

  const [letterClass, setLetterclass] = useState('text-animate')


  useEffect(() => {
    const timeout = setTimeout(() => {
      setLetterclass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (

    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['a', 'b', 'o', 'u', 't', , ' ', 'm', 'e']}
            idx={15}
          />

        </h1>
        <p>I'm a passionate and dedicated BTech student specializing in Artificial Intelligence and Machine Learning.</p>
        <p>I have a strong foundation in web development and data structures using Java, and I'm currently building projects to sharpen my frontend development skills. </p>
        <p>My goal is to create intelligent systems that solve real-world problems through innovative technology.</p>
      </div>
      <div className='stage-cube-cont'>
        <div className='cubespinner'>
          <div className='face1'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className='face2'>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
          </div>
          <div className='face3'>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
          </div>
          <div className='face4'>
            <FontAwesomeIcon icon={faGit} color="#EFD81D" />
          </div>

        </div>
      </div>
    </div>

  )
}
export default About