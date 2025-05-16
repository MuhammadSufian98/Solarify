import React from 'react'
import Hero from '../components/AboutComp/Hero';
import Renewable from '../components/AboutComp/Renewable';
import Recognition from '../components/AboutComp/Recognition';
import Members from '../components/AboutComp/Members';

const About = () => {
  return (
    <div>
        <Hero/>
        <Renewable/>
        <Recognition/>
        <Members/>
    </div>
  )
}

export default About;