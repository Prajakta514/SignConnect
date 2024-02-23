

// import React from 'react';
// import './Sidebar.css';
// import SidebarRow from './SidebarRow';
// import { FaHospital, FaFlag, FaUsers, FaComment, FaStoreAlt, FaVideo, FaCog } from 'react-icons/fa'; // Import Font Awesome icons
// import { useStateValue } from './StateProvider';

// function Sidebar() {
//   const [{ user }, dispatch] = useStateValue();

//   return (
//     <div className="sidebar" style={{ fontSize: '0px' }}>

//       <SidebarRow src={user.photoURL} title={user.displayName} style={{ fontSize: '6px' }} />
//       <br />
//       <br />
//       <hr />
//       {/* Set isSelected prop to true for Home to make it selected by default */}
//       <SidebarRow Icon={FaHospital} title="Home" link="/" isSelected={true}  />
//       <SidebarRow Icon={FaFlag} title="Resources" link="/Res" style={{ fontSize: '24px', margin: '10px' }} />
//       <SidebarRow Icon={FaComment} title="Forums" link="/GroupChat" style={{ fontSize: '24px', margin: '10px' }} />
//       <SidebarRow Icon={FaUsers} title="Jobs" link="/Job" style={{ fontSize: '24px', margin: '10px' }} />
//       <SidebarRow Icon={FaHospital} title="Nearby HealthCares" link="/Hosp" style={{ fontSize: '24px', margin: '10px' }} />
//       <SidebarRow Icon={FaVideo} title="Learn Sign Language" link="/LearnSign" style={{ fontSize: '24px', margin: '10px' }} />
//       <SidebarRow Icon={FaCog} title="Settings" style={{ fontSize: '24px', margin: '10px' }} />
//       <br />
//     </div>
//   );
// }

// export default Sidebar;



import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { FaHospital, FaFlag, FaUsers, FaComment, FaStoreAlt, FaVideo, FaCog } from 'react-icons/fa'; // Import Font Awesome icons
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <br/><br/><br/>
      <SidebarRow src={user.photoURL} title={user.displayName} style={{ fontSize: '5px' }} /><hr/>
      <SidebarRow IconComponent={FaHospital} title="Home" link="/" isSelected={true}  />
      <SidebarRow IconComponent={FaFlag} title="Resources" link="/Res" />
      <SidebarRow IconComponent={FaComment} title="Forums" link="/GroupChat" />
      <SidebarRow IconComponent={FaUsers} title="Jobs" link="/Job" />
      <SidebarRow IconComponent={FaHospital} title="Nearby HealthCares" link="/Hosp" />
      <SidebarRow IconComponent={FaFlag} title="Learn Sign Language" link="/LearnSign" />
      <SidebarRow IconComponent={FaVideo} title="Video Call" link="/Room2" />
      <SidebarRow IconComponent={FaCog} title="Settings" />
    </div>
  );
}

export default Sidebar;
