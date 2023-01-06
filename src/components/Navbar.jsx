import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import NavItem from "./navitem-gen";
import { Link } from "react-router-dom";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { RiMenu3Fill, RiCloseLine} from "react-icons/ri";

function Navbar() {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [icon, setIcon] = useState(""); 
  const [nav, setNav] = useState("nav-ul");
  const [navIcon, setNavIcon] = useState(<RiMenu3Fill/>);
  const title = 'SubWeb'

  const navmenu = {
    items: ['Home', 'Contact', 'Guide'],
    paths: ['/', '/contact', '/how']
  }

  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!e.target.classList.contains('nav-active') && menuRef.current.className === 'nav-ul nav-active'){
        setNav("nav-ul");
        setNavIcon(<RiMenu3Fill/>);
      }
    }
    document.addEventListener("mousedown",handler)
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  const toggleNav = (e) =>  {
    console.log()
    if (nav === "nav-ul") {
      setNav("nav-ul nav-active");
      setNavIcon(<RiCloseLine/>);
    } else {
      setNav("nav-ul");
      setNavIcon(<RiMenu3Fill/>);
    }
  }; 

  function setDark() {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("theme", "dark");
    setIcon(<BsSunFill className="icon" onClick={toggleTheme} />);
  }

  function setLight() {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("theme", "light");
    setIcon(<BsMoonFill className="icon" onClick={toggleTheme} />);
  }

  function toggleTheme() {
    if (theme === "light") {
      setDark();
      setTheme("dark");
    } else {
      setLight();
      setTheme("light");
    }
  }

  return (
    <div className="nav">
      <ul className={nav} ref={menuRef} >
        {navmenu.items.map((item, index) => (
          <NavItem key={index} item={{title: item, path: navmenu.paths[index]}} toggleNav={toggleNav}/>))}
      </ul>
      <h1 className="desktop-header"> <Link to="/"> {title} </Link> </h1>
      <span className="icon"> {icon} </span>
      <h1 className="mobile-header"> <Link to="/"> {title} </Link> </h1>
       <span onClick={toggleNav} className="menu"> {navIcon} </span>
    </div>
  );
} 

export default Navbar;
