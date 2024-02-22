import React from 'react';
import Header from './Header';
import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import Login from './Login'
import { useStateValue } from './StateProvider';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';
import Room from './Room';

import LearnSign from './LearnSign';
import RNavbar from './RNavbar';
import Res from './Res';
import Chatbot from './Chatbot';
import Job from './Job';
import ChatApp from './Chatapp';

import GroupChat from './GroupChat';
import UserData from './Displaydata';



function App() {
	const[{ user }, dispatch] =useStateValue();

	return (


		//BEM naming convention
		<div className="app">

			{!user ? (
			 <Login />
			 
			):(
				
				<>
				<Header />
			
				  <div className="app__body">
					{/* <RNavbar/> */}
	
				   <Routes>
				
				  <Route path="/" element={<div><Chatbot/><RNavbar/><Sidebar/><Feed/></div>} />
				  <Route path="/Hosp" element={<UserData/>} />
				  <Route path="/Res" element={<Res/>} />
				  <Route path="/LearnSign" element={<LearnSign/>} />
				  <Route path="/Job" element={<Job/>} />
				  <Route path="/GroupChat" element={<GroupChat/>} />
				  </Routes>
				
				  {/* <Feed />
				  <RNavbar/> */}
				  {/* <Widgets /> */}
				 </div> 
				</>
			)}
			
			

    
		</div>
	);
}

export default App;





// import React from 'react';
// import Header from './Header';
// import './App.css';
// import Sidebar from './Sidebar';
// import Feed from './Feed';
// import Login from './Login';
// import { useStateValue } from './StateProvider';
// import { Routes, Route, BrowserRouter, useNavigate } from 'react-router-dom';
// import Home from './Home';
// import Hosp from './Hosp';
// import LearnSign from './LearnSign';
// import RNavbar from './RNavbar';
// import Res from './Res';

// function App() {
//   const [{ user }, dispatch] = useStateValue();
//   const navigate = useNavigate();

//   const isHomeSelected = window.location.pathname === '/'; // Check if Home route is selected

//   // Redirect to Home when user is logged in
//   React.useEffect(() => {
//     if (user) {
//       navigate('/');
//     }
//   }, [user, navigate]);

//   return (
//     <div className="app">
//       {!user ? (
//         <Login />
//       ) : (
// 		<>
// 		<Header/>
//         <div className="app__body">
			
//           {isHomeSelected && (
//             <>
//               {/* <Header /> */}
//               <Sidebar />

//               <Feed />
//               <RNavbar />
//             </>
//           )}

//           <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//             <Route path="/Hosp" element={<Hosp />} />
//             <Route path="/Res" element={<Res />} />
//             <Route path="/LearnSign" element={<LearnSign />} />
//           </Routes>
//         </div></>
//       )}
	  
//     </div>
	
//   );
// }

// export default App;
