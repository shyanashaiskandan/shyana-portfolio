import React from 'react'
import Timeline from './components/Timeline'

const experience = () => {
  return (
    <>
<div className="p-10 font-quicksand text-pink text-5xl">
  <h1><center>Experience</center></h1>
</div>
<Timeline />
{/* <div className="timeline"> */}
  <div className="container left">
      <i className="fa fa-code-fork" aria-hidden="true"></i>
    <div className="content">
      <h2>Git Basics</h2>
      <p>Visit <a href="https://learngitbranching.js.org/">this site</a> to learn about Git and become comfortable with basic Git practices</p>
    </div>
  </div>
  <div className="container right">
    <div className="content">
      <h2>Puppet Language Basics</h2>
      <p><a href="https://puppet.com/learning-training/kits/puppet-language-basics/">This self-paced course</a> will teach you the basics of understanding and writing Puppet code in less than thirty minutes.</p>
    </div>
  </div>
    <div className="container left">
    <div className="content">
      <h2>Puppet Practice Labs</h2>
      <p>Now you are ready to write some Puppet code in an <a href="https://learn.puppet.com/practicelabcatalog">interactive, browser based environment</a>.</p>
    </div>
  </div>
    <div className="container right">
    <div className="content">
      <h2>PE101: Deploy & Discover</h2>
      <p>At this point you are ready to take the in-person training and implement Puppet in your own environment.<p><i>Coming soon!</i></p></p>
    </div>
  </div>
  <div className="container left">
    <div className="content">
      <h2>PE201: Design & Manage</h2>
      <p>Already have Puppet implemented? Learn best practices for designing and managing your environment.</p><p><i>Coming soon!</i></p>
    </div>
  </div>
    <div className="container right">
    <div className="content">
      <h2>Keep going!</h2>
      <p>The journey never ends. <a href="http://learn.puppet.com">Here are some resources</a> to keep you on your learning path.</p>
    </div>
  </div>
{/* </div> */}
</>
  )
}

export default experience