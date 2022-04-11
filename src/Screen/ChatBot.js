import React from 'react'
import {logo} from '../Assets/Index'

const ChatBot = () => {
  return (
    <div className='bod'>

        <ol class="chat">
    <li class="other">
        <div class="avatar"><img src={logo} alt="no" draggable="false"/></div>
      <div class="msg">
        <p>hello</p>
        <p>how are you? </p>
      </div>
    </li>
    <li class="self">
      <div class="msg">
        <p>fine thanks </p>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src={logo} alt="no" draggable="false"/></div>
      <div class="msg">
        <p>do you want anything? </p>
      </div>
    </li>
    <li class="self">
      <div class="msg">
        <p>yes</p>
        <p>tell me ...</p>
      </div>
    </li>
    <li class="other">
        <div class="avatar"><img src={logo} alt="no" draggable="false" /></div>
      <div class="msg">
        <p>what! <emoji class="please"/></p>
      </div>
    </li>
    <li class="self">
      <div class="msg">
        <p>byeeee</p>
      </div>
    </li>
    </ol>

<br/>

<p className='choice'>  <span className='spa'>اكلات</span>{" "}<span className='spa'>مشويات</span>{" "}<span className='spa'>مشروبات</span> </p>


    </div>
  )
}

export default ChatBot