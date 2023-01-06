import React, { useState } from 'react'
import './css/Guide.css'
import { BiDownArrowAlt } from 'react-icons/bi';
import {faq} from '../data/FaqData'

function How() {

  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  }

  return (
    <div className='container-how'>
      <div className='main-box'>
        {
          faq.map((item, index) => (
            <div>
              <div className='q-box' key={index} onClick={() => toggle(index)} >
                <h1 className='question'>{item.question}</h1> {selected === index ?
                <BiDownArrowAlt className='qicon' /> :
                <BiDownArrowAlt className='qicon activei' />}
              </div>
              <div className={selected === index ? 'a-box a-active active' : 'a-box'}>
                <span className='answer'>{item.answer}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default How