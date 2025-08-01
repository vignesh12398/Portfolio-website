
import Layout from './components/Layout';
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Layout/home_temp';
import About from './components/About';
import Contact from './components/contact';


function App() {
  return (
    <>
     
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          </Route >
      </Routes>
    </>
  );
}

export default App;
