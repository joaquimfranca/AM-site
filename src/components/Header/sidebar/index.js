import './sidebar.css'
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sidebaricon from './sidebar.icon.png';
export default function Sidebar() {
  const [Open, setOpen] = useState(false);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="sidebar" ref={ref}>
      <button className="buttonsidebar" onClick={() => setOpen(!Open)}>
        <img src={sidebaricon} />
      </button>
      {Open && (
        <div className="sidebar-content">
          <Link className="item_sidebar" to="/theband">
            The Band
          </Link>
          <Link className="item_sidebar" to="/videos">
            videos
          </Link>
          <Link className="item_sidebar" to="/live">
            Live
          </Link>
        </div>
      )}
    </div>
  );
}
