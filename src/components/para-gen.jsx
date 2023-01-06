import React from 'react'
import '../pages/css/Subweb.css'

function Paragen({ item }) {
    <div className="para">
        <input type="checkbox" id={item.id} className="toggle" />
        <label htmlFor={item.id}></label>
        <p className="para-text">{item.text}</p>
    </div>
}

export default Paragen;