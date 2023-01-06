import React from 'react';
import Contactlist from '../components/Contactlist';
import { FaGithub , FaFacebook , FaFacebookMessenger , FaTwitter } from 'react-icons/fa';

function Contact() {

    const contact = {
        icon : [<FaGithub />, <FaFacebook />, <FaFacebookMessenger />, <FaTwitter />],
        name : [' Github', ' Telegram', ' Messenger', '  Twitter'],
        link : ['https://github.com/chnthkksn', 'https://t.me/Its_chinth', 'https://twitter.com/chnthkksn', 'https://m.me/its.chinth']
    }

    return ( 
        <div className='contact-div'>
            {contact.icon.map((item, index) => (
                <Contactlist key={index} item={{icon: item, name: contact.name[index], link: contact.link[index]}}/>) )}
        </div>
     );
}

export default Contact;