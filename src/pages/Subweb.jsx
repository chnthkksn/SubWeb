import React, { useEffect, useState } from "react";
import './css/Subweb.css'
import { BiDownArrowAlt } from 'react-icons/bi';
// import Paragen from '../components/para-gen';
import axios from "axios";

function Home() {
  const [configs, setConfigs] = useState("");
  const [result, setResult] = useState("");
  const [target, setTarget] = useState('clash');
  const [flags, setFlags] = useState(true);
  const [udp, setUdp] = useState(false);
  const [sort, setSort] = useState(false);

  // const parameters = {
  //   parameter : [flags, udp, sort],
  //   setparameter : [setFlags, setUdp, setSort],
  //   id : ['switch1', 'switch2', 'switch3'],
  //   text : ['FLAGS', 'UDP', 'SORT']
  // }

  function moreOptions() {
    const params = document.querySelector('.params')
    const icon = document.querySelector('.Aicon')
    if (params.classList.contains('invis')) {
      params.classList.remove('invis')
      icon.classList.remove('rotate')
    }
    else {
      params.classList.add('invis')
      icon.classList.add('rotate')
    }
  }

  useEffect(() => {
    const API_URL = process.env.REACT_APP_MY;
    const multiple = (configs.replaceAll('\n', '|'))
    setResult(`${API_URL}/sub?target=${target}&udp=${udp}&emoji=${flags}&sort=${sort}&url=${encodeURIComponent(multiple)}`)
  }, [configs, target, flags, udp, sort])

  function getFile() {
    axios.get(result)
      .then(res => {
        if (res.status === 200) {
          const blob = new Blob([res.data], { type: "text/plain" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.download = "config.txt";
          link.href = url;
          link.click();
        }
        else {
          alert('Make sure you enterd the configs correctly')
        }
      }).catch(err => {
        alert('Make sure you enterd the configs correctly')
      });
  }

  return (
    <div className="main-container">
      <h1 className="title">Subscription Converter</h1>
      <p className="sub-title">
        Utility to convert between various proxy subscription formats
      </p>
      <div className="text-container">
        <textarea
          onChange={(e) => setConfigs(e.target.value)}
          name=""
          id=""
          cols="30"
          rows="10"
          className="input-box"
          placeholder="Paste ur configs here, if you want to paste multiple configs use | or line space"
        ></textarea>
        <div className="last-div">
          <select className="dropdown-1" onChange={(e) => {
            setTarget(e.target.value)
          }} >
            <option value="clash">Clash</option>
            <option value="surfboard">Surfboard</option>
          </select>
          <button className="submit-btn" onClick={() => {
          }}>
            Convert
          </button>
          <button onClick={() => { moreOptions() }}>
            <p className='icon-p'>Param <BiDownArrowAlt className="Aicon" /></p>
          </button>
        </div>
        <div className="params">
          <div className="para">
            <input type="checkbox" id="switch1" className="toggle" checked={flags} onChange={() => { flags === true ? setFlags(false) : setFlags(true) }} />
            <label htmlFor="switch1"></label>
            <p className="para-text"> FLAGS</p>
          </div>
          <div className="para">
            <input type="checkbox" id="switch2" className="toggle" checked={udp} onChange={() => { udp === true ? setUdp(false) : setUdp(true) }} />
            <label htmlFor="switch2"></label>
            <p className="para-text"> UDP</p>
          </div>
          <div className="para">
            <input type="checkbox" id="switch3" className="toggle" checked={sort} onChange={() => { sort === true ? setSort(false) : setSort(true) }} />
            <label htmlFor="switch3"></label>
            <p className="para-text"> SORT</p>
          </div>
        </div>
        <div className="result">
          <input type="text" className="output-box" value={result} readOnly />
          <button className="copy-btn" onClick={() => navigator.clipboard.writeText(result)} >Copy </button>
        </div>
        <div className="result">
          <button onClick={() => getFile()}>
            Download config
          </button>
          <a href={result} target="_blank" rel="noreferrer"> <button> Open in browser  </button> </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
