import React from 'react'
import './Footer.css'
import {AiFillHeart} from 'react-icons/ai'

function Footer() {
  return (
    <div className='footer'> 
        <p >Made with <AiFillHeart className='footer-icon'/> by <a href="https://github.com/chnthkksn" rel="noreferrer" target="_blank"> Ch!Ka </a></p>
    </div>
  )
}

export default Footer;