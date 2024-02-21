import React from 'react';
import { Avatar } from "@material-ui/core";
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import './SidebarRow.css';

function SidebarRow({ src, Icon, title, link }) {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleClick = () => {
    // Navigate to the specified link when clicked
    if (link) {
      navigate(link);
    }
  };

  return (
    <div className="sidebarRow" onClick={handleClick}>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
