"use client"
import React from 'react'
import Image from 'next/image'
// import Timeline from './components/Timeline'
// import BMO1 from './components/BMO1'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import bmo from "./bmologo.png"




const experience = () => {
  return (
    <>
    <h1 className="p-10 font-quicksand text-pink text-5xl"><center>Experience</center></h1>
    <VerticalTimeline>
  <VerticalTimelineElement visible={true}
    className="vertical-timeline-element"
    contentStyle={{background: 'rgb(245, 143, 124)', color: 'white' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(245, 143, 124)' }}
    date="January 2022 - April 2022"
    dateClassName='text-black font-quicksand'
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <center><Image src= {bmo} alt="BMO logo" width={300} /> </center>
    <h3 className="vertical-timeline-element-title">QA Analyst</h3>
    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
    <p>
      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2010 - 2011"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Art Director</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2008 - 2010"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="2006 - 2008"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    
  >
    <h3 className="vertical-timeline-element-title">Web Designer</h3>
    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
    <p>
      User Experience, Visual Design
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
    </>
  )
}

export default experience