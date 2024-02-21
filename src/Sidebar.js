// import React from 'react';
// import './Sidebar.css';
// import SidebarRow from './SidebarRow';
// import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
// import PeopleIcon from '@material-ui/icons/People';
// import ChatIcon from '@material-ui/icons/Chat';
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import { useStateValue } from './StateProvider';

// function Sidebar() {
//   const [{ user }, dispatch] = useStateValue();

//   return (
//     <div className="sidebar" bg="dark" variant="dark" style={{ fontSize: '0px' }}>
//       <SidebarRow src={user.photoURL} title={user.displayName} style={{ fontSize: '6px' }} />
//       <br />
//       <br />
//       <hr />
//       {/* Set isSelected prop to true for Home to make it selected by default */}
//       <SidebarRow Icon={LocalHospitalIcon} title="Home" link="/" isSelected={true} />
//       <SidebarRow Icon={PeopleIcon} title="Explore"  />
//       <SidebarRow Icon={EmojiFlagsIcon} title="Resources" link="/Res" />
//       <SidebarRow Icon={ChatIcon} title="Messenger" />
//       <SidebarRow Icon={PeopleIcon} title="Jobs" link="/Job" />
//       <SidebarRow Icon={LocalHospitalIcon} title="Nearby HealthCares" link="/Hosp" />
//       <SidebarRow Icon={VideoLibraryIcon} title="Learn Sign Language" link="/LearnSign" />
//       <SidebarRow Icon={StorefrontIcon} title="Settings" />
//       <br />
//     </div>
//   );
// }

// export default Sidebar;


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
//       <SidebarRow Icon={FaHospital} title="Home" link="/" isSelected={true} />
//       <SidebarRow Icon={FaFlag} title="Resources" link="/Res" />
//       <SidebarRow Icon={FaComment} title="Forums" />
//       <SidebarRow Icon={FaUsers} title="Jobs" link="/Job" />
//       <SidebarRow Icon={FaHospital} title="Nearby HealthCares" link="/Hosp" />
//       <SidebarRow Icon={FaVideo} title="Learn Sign Language" link="/LearnSign" />
//       <SidebarRow Icon={FaCog} title="Settings" />
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
    <div className="sidebar" style={{ fontSize: '0px' }}>
      <SidebarRow src={user.photoURL} title={user.displayName} style={{ fontSize: '6px' }} />
      <br />
      <br />
      <hr />
      {/* Set isSelected prop to true for Home to make it selected by default */}
      <SidebarRow Icon={FaHospital} title="Home" link="/" isSelected={true} style={{ fontSize: '24px', margin: '10px' }} />
      <SidebarRow Icon={FaFlag} title="Resources" link="/Res" style={{ fontSize: '24px', margin: '10px' }} />
      <SidebarRow Icon={FaComment} title="Forums" link="/GroupChat" style={{ fontSize: '24px', margin: '10px' }} />
      <SidebarRow Icon={FaUsers} title="Jobs" link="/Job" style={{ fontSize: '24px', margin: '10px' }} />
      <SidebarRow Icon={FaHospital} title="Nearby HealthCares" link="/Hosp" style={{ fontSize: '24px', margin: '10px' }} />
      <SidebarRow Icon={FaVideo} title="Learn Sign Language" link="/LearnSign" style={{ fontSize: '24px', margin: '10px' }} />
      <SidebarRow Icon={FaCog} title="Settings" style={{ fontSize: '24px', margin: '10px' }} />
      <br />
    </div>
  );
}

export default Sidebar;
