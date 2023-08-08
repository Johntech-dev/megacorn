import React from 'react';
import './App.css';
import Navbar from './Component/nav/Navbar';
import Sectionhead from './Component/Section1/Sectionhead';
import Sectionbody from './Component/Section2/Sectionbody';
import Section3 from './Component/Section3/Section3';
import Section4 from './Component/Section4/Section4';
import Section5 from './Component/Section5/Section5';
import Section6 from './Component/Section6/Section6';
import Section7 from './Component/Section7/Section7';
function App() {

  return (
    <div>
      <Navbar />
      <Sectionhead />
      <Sectionbody />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}

export default App;
