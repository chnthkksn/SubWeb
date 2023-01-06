import React from 'react'
import { AiFillAndroid, AiFillWindows } from 'react-icons/ai';
import '../pages/css/Guide.css'

export const faq = [
  {
    question: 'What is subweb ?',
    answer: <p> Utility to convert between various subscription format. Ex- You can convert vmess to clash configs </p>
  }, {
    question: 'Whats is Clash ?',
    answer: 'Clash is a rule-based tunnel in Go. It is compatible with most of the popular proxy software such as Surge, Shadowsocks, Snell, Trojan, and VMess. It can be used to build a proxy server to bypass network restrictions, or help you access your favorite websites such as YouTube, Facebook, and Twitter.'
  }, {
    question: 'How to use this tool ?',
    answer: <ol>
              <li> Copy the subscription links (vmess, vless, trojan & others)</li>
              <li> Paste in the input box.</li>
              <li> Select the output format.</li>
              <li> Click on the convert button.</li>
              <li> Copy the output and paste it in your clash config file. </li>
            </ol>
  }, {
    question: 'Where can i download Clash ?',
    answer: <table className="table">
            <thead>
              <tr>
                <th className='th'>Clash</th>
                <th className='th'>Surdboard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='table-data'> <a href="https://play.google.com/store/apps/details?id=com.github.kr328.clash" target="_blank" rel="noreferrer"> <AiFillAndroid /> </a> </td>
                <td className='table-data'> <a href='https://play.google.com/store/apps/details?id=com.getsurfboard' target="_blank" rel="noreferrer">  <AiFillAndroid /> </a> </td>
                <td></td>
              </tr>
              <tr>
                <td className='table-data'> <a href='https://github.com/Fndroid/clash_for_windows_pkg' target="_blank" rel="noreferrer"> <AiFillWindows /> </a> </td>
                <td className='table-data'> <AiFillWindows /> </td>
                <td></td>
              </tr>
            </tbody>
            </table>
  }
]