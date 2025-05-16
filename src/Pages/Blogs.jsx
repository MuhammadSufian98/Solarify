import React from 'react'
import Hero from '../components/blog/Hero'
import BlogCrads from '../components/blog/BlogCrads';
import RecognitionAwards from '../components/blog/RecognitionAwards';
import GetTouch from '../components/blog/GetTouch';

const Blogs = () => {
  return (
    <div>
      <Hero/>
      <BlogCrads/>
      <RecognitionAwards/>
      <GetTouch/>
    </div>
  )
}

export default Blogs;
