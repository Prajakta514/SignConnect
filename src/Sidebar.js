// import React from 'react';
// import './Sidebar.css';
// import SidebarRow from './SidebarRow';
// import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
// import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
// import PeopleIcon from '@material-ui/icons/People';
// import ChatIcon from '@material-ui/icons/Chat';
// import StorefrontIcon from '@material-ui/icons/Storefront';
// import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
// import { ExpandMoreOutlined } from '@material-ui/icons';
// import { useStateValue } from './StateProvider';
// import { makeStyles } from '@material-ui/core/styles';

// function Sidebar() {
// 	const [ { user }, dispatch ] = useStateValue();

// 	return (
// 		<div className="sidebar"  bg="dark" variant="dark">
// 			<SidebarRow src={user.photoURL} title={user.displayName} />
// 			<br/><br/><hr/>
// 			<SidebarRow Icon={LocalHospitalIcon} title="Home" link="/Home"/>
// 			<SidebarRow Icon={PeopleIcon} title="Explore" />
// 			<SidebarRow Icon={EmojiFlagsIcon} title="Resources" link="/Res"/>
// 			<SidebarRow Icon={ChatIcon} title="Messenger" />
// 			<SidebarRow Icon={PeopleIcon} title="Jobs" />
// 			<SidebarRow Icon={LocalHospitalIcon} title="Nearby HealthCares"  link="/Hosp"  />
// 			<SidebarRow Icon={VideoLibraryIcon} title="Reels" />
// 			<SidebarRow Icon={VideoLibraryIcon} title="Learn Sign Language" link="/LearnSign" />
// 			<SidebarRow Icon={StorefrontIcon} title="Settings" />
			
			
// 			<br />

			
// 		</div>
// 	);
// }

// export default Sidebar;


import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from './StateProvider';

function Sidebar() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="sidebar" bg="dark" variant="dark" style={{ fontSize: '0px' }}>
      <SidebarRow src={user.photoURL} title={user.displayName} style={{ fontSize: '6px' }} />
      <br />
      <br />
      <hr />
      {/* Set isSelected prop to true for Home to make it selected by default */}
      <SidebarRow Icon={LocalHospitalIcon} title="Home" link="/" isSelected={true} />
      <SidebarRow Icon={PeopleIcon} title="Explore"  />
      <SidebarRow Icon={EmojiFlagsIcon} title="Resources" link="/Res" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={PeopleIcon} title="Jobs" link="/Job" />
      <SidebarRow Icon={LocalHospitalIcon} title="Nearby HealthCares" link="/Hosp" />
      <SidebarRow Icon={VideoLibraryIcon} title="Learn Sign Language" link="/LearnSign" />
      <SidebarRow Icon={StorefrontIcon} title="Settings" />
      <br />
    </div>
  );
}

export default Sidebar;
