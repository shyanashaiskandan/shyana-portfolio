"use client"
import React from 'react'
import Image from 'next/image'
// import Timeline from './components/Timeline'
// import BMO1 from './components/BMO1'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import bmo from "./bmologo.png"
import manulife from "./manulife logo.png"
import gov from "./governmentlogo.png"




const experience = () => {
  return (
    <>
      <h1 className="p-10 font-quicksand text-pink text-5xl font-bold"><center>Experience</center></h1>
      <VerticalTimeline>
        <VerticalTimelineElement visible={true}
            className="vertical-timeline-element"
            contentStyle={{background: 'rgb(245, 143, 124)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(245, 143, 124)' }}
            date="January 2022 - April 2022"
            dateClassName='text-black font-quicksand italic'
            iconStyle={{ background: 'rgb(245, 143, 124)', color: '#4f4f51' }}  
          >
          <div className = "py-3"><center><Image src= {bmo} alt="BMO logo" width={160}/> </center></div>
          <center><h3 className="font-quicksand text-white text-lg font-bold">QA Analyst</h3></center>
          <center><h4 className="font-quicksand text-white text-base italic">Bank of Montreal</h4></center>
        </VerticalTimelineElement>

        <VerticalTimelineElement visible={true}
            className="vertical-timeline-element"
            contentStyle={{background: 'rgb(245, 143, 124)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(245, 143, 124)' }}
            date="September 2022 - December 2022"
            dateClassName='text-black font-quicksand italic'
            iconStyle={{ background: 'rgb(245, 143, 124)', color: '#4f4f51' }}  
          >
          <div className = "py-3"><center><Image src= {bmo} alt="BMO logo" width={160}/> </center></div>
          <center><h3 className="font-quicksand text-white text-lg font-bold">Systems and Applications Analyst</h3></center>
          <center><h4 className="font-quicksand text-white text-base italic">Bank of Montreal</h4></center>
        </VerticalTimelineElement>

        <VerticalTimelineElement visible={true}
            className="vertical-timeline-element"
            contentStyle={{background: 'rgb(245, 143, 124)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(245, 143, 124)' }}
            date="May 2023 - August 2023"
            dateClassName='text-black font-quicksand italic'
            iconStyle={{ background: 'rgb(245, 143, 124)', color: '#4f4f51' }}  
          >
          <div className = "py-5"><center><Image src= {manulife} alt="manulife logo" width={200}/> </center></div>
          <center><h3 className="font-quicksand text-white text-lg font-bold">Salesforce Engineer</h3></center>
          <center><h4 className="font-quicksand text-white text-base italic">Manulife</h4></center>
        </VerticalTimelineElement>

        <VerticalTimelineElement visible={true}
            className="vertical-timeline-element"
            contentStyle={{background: 'rgb(245, 143, 124)', color: 'white' }}
            contentArrowStyle={{ borderRight: '7px solid  rgb(245, 143, 124)' }}
            date="January 2024 - April 2024"
            dateClassName='text-black font-quicksand italic'
            iconStyle={{ background: 'rgb(245, 143, 124)', color: '#4f4f51' }}  
          >
          <center><Image src= {gov} alt="GOV logo" width={210} /> </center>
          <center><h3 className="font-quicksand text-white text-lg font-bold">Junior Programmer</h3></center>
          <center><h4 className="font-quicksand text-white text-base italic">Ministry of Finance</h4></center>
        </VerticalTimelineElement>

</VerticalTimeline>
    </>
  )
}

export default experience