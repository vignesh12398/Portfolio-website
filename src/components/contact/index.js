import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit, faHtml5, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons/faCss3'
const Contact = () => {
    const [letterClass, setLetterclass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterclass('text-animate-hover');
        }, 4000);
        return () => clearTimeout(timeout);
    }, []);
    const sendEmail = (e) => {
        e.preventDefault();
        console.log('Form submitted, sending email...');

        emailjs
            .sendForm(
                'service_uagt7ty',
                'template_hz94a97',
                refForm.current,
                '1fOcV6LydLq4buOWx'
            )
            .then(
                (result) => {
                    alert('Message successfully sent');
                    console.log('SUCCESS!', result.status, result.text); // ✅ LOG SUCCESS
                    window.location.reload(false);
                },
                (error) => {
                    alert('Message failed');
                    console.error('FAILED...', error); // ✅ LOG ERROR
                }
            );
    };

    return (
        <div className="container contact-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15} />
                </h1>
                <div className='stage-cont'>
                        <div className='cubespin'>
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

                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required />
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required />
                            </li>
                            <li>
                                <input placeholder="Subject" type="text" name="subject" required />
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='SEND' />
                            </li>
                        </ul>
                    </form>




                </div>
            </div>
        </div>
    )
}
export default Contact