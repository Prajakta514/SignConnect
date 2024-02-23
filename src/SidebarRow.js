import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SidebarRow.css';

function SidebarRow({ IconComponent, title, link }) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="sidebarRow" onClick={handleClick}>
      {IconComponent && <IconComponent />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
