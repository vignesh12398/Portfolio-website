import './index.scss';
import LogoSubtitle from '../../../../assets/images/logo-s.png';
import { useRef, useEffect } from 'react';
import { DrawSVGPlugin } from 'gsap-trial/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {
  const bgRef = useRef();
  const solidLogoRef = useRef();
  const outlineLogoRef = useRef();

  useEffect(() => {
  gsap.registerPlugin(DrawSVGPlugin);

  const tl = gsap.timeline();

  tl.to(bgRef.current, {
    duration: 1,
    opacity: 1,
  }).fromTo(
    outlineLogoRef.current,
    { drawSVG: '0% 0%' },
    { drawSVG: '0% 100%', duration: 2, ease: 'power1.inOut' }
  );
}, []);


  return (
    <div className='logo-container' ref={bgRef}>
      <img
        ref={solidLogoRef}
        className='solid-logo'
        src={LogoSubtitle}
        alt='V'
      />
      <svg
        className='svg-container'
        width='300'
        height='300'
        viewBox='0 0 300 300'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle
        ref={outlineLogoRef}
          cx='150'
          cy='150'
          r='100'
          stroke='#ffd700'
          strokeWidth='15'
          fill='none'
        />
        <text
          x='150'
          y='185'
          fontSize='130'
          fontWeight='bold'
          fontFamily='Arial'
          textAnchor='middle'
          fill='#ffd700'
        >
          V
        </text>
      </svg>
    </div>
  );
};

export default Logo;
