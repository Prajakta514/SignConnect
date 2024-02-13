import React, { useState, useEffect } from 'react';
import { Carousel, Container, Card, Button } from 'react-bootstrap';
import './Res.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import deaf1 from './Images/deaf1.jpg';
import deaf2 from './Images/deaf2.png';
import deaf5 from './deaf5.png'
import Header from './Header';

const Res = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div>
      <Header/>
        <h1 style={{ color: 'white' }}>DEAF CULTURE</h1>
      </div>
      

      <div className="first">
      <Carousel className="carousel-container" activeIndex={index} onSelect={handleSelect} interval={null}>
  <Carousel.Item>
    <img className="d-block w-100" src={deaf5} alt="First slide" />
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={deaf2} alt="Second slide" />
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={deaf5} alt="Third slide" />
  </Carousel.Item>
</Carousel>

         
      </div>
    
    <center>
      <div className="second">
        <h2 style={{ textAlign: 'center', color: 'rgb(43, 16, 16)' }}>Resources</h2>

        <div className="second_first">
          <Card style={{ width: '18rem' }} className="mx-auto">
            <Card.Img variant="top" src={deaf2} />
            <Card.Body>
              <Card.Title>Learning</Card.Title>
              <Card.Text>Quick start for learning through the courses learn and grow.</Card.Text>
              <Button variant="primary" href="https://www.startasl.com/learn-american-sign-language/">
                Courses
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="mx-auto">
            <Card.Img variant="top" src={deaf2} />
            <Card.Body>
              <Card.Title>Resources</Card.Title>
              <Card.Text>Some resources history about deaf people.</Card.Text>
              <Button variant="primary" href="https://www.startasl.com/blog/">
                Resources
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }} className="mx-auto">
            <Card.Img variant="top" src={deaf2} />
            <Card.Body>
              <Card.Title>Tutoring</Card.Title>
              <Card.Text>Learn and Grow.</Card.Text>
              <Button variant="primary" href="https://www.startasl.com/asl-tutors/">
                Tutor
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
</center>
<center>
      <Container>
        <div className="paragraph-container">
        <p>
            Starting a new school year, while exciting, can also be uncertain. National Deaf Center is here to help deaf
            students, their families, and schools get ready for a new school year, or semester.
            Proactive planning helps create more opportunities for deaf students to succeed. Planning should include
            advocacy, reasonable accommodations, effective communication, and equal opportunity to participate in school
            programs, events, and activities.
            The National Deaf Center developed guides for high schools, colleges, students, and their families with key
            strategies, common pitfalls, and evidence-based practices to help students reach #DeafSuccess. Contact the help
            team with any additional questions or concerns.
          </p>
        </div>
        <div className="video-container">
          <iframe
            width="420"
            height="500"
            src="https://www.youtube.com/embed/0YcGev7B5AA?autoplay=1&mute=1"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
      </center>
    </div>
  );
};

export default Res;




// import React, { useState, useEffect } from 'react';
// import { Carousel, Container, Card, Button } from 'react-bootstrap';
// import './Res.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import deaf1 from './Images/deaf1.jpg';
// import deaf2 from './Images/deaf2.png';

// const Res = () => {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 2000);

//     return () => clearInterval(intervalId);
//   }, []);

//   return (
//     <>
//       <div >
//         <h1 style={{ color: 'white' }}>DEAF CULTURE</h1>
//       </div>

//       {/* First section covering full width */}
//       <div className="first">
//         <Carousel activeIndex={index} onSelect={handleSelect} interval={null}>
//           <Carousel.Item>
//             <img className="d-block w-100" src={deaf1} alt="First slide" style={{ height: '500px', width: '100%' }} />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src={deaf2} alt="Second slide" style={{ height: '500px', width: '100%' }} />
//           </Carousel.Item>
//           <Carousel.Item>
//             <img className="d-block w-100" src={deaf1} alt="Third slide" style={{ height: '500px', width: '100%' }} />
//           </Carousel.Item>
//         </Carousel>
//       </div>

//       {/* Second section with three cards */}
//       <div className="second">
//         <h2 style={{ textAlign: 'center', color: 'rgb(43, 16, 16)' }}>Resources</h2>

//         <div className="second_first">
//           <Card style={{ width: '18rem' }} className="mx-auto">
//             <Card.Img variant="top" src="./Images/d7.jfif" />
//             <Card.Body>
//               <Card.Title>Learning</Card.Title>
//               <Card.Text>Quick start for learning through the courses learn and grow.</Card.Text>
//               <Button variant="primary" href="https://www.startasl.com/learn-american-sign-language/">
//                 Courses
//               </Button>
//             </Card.Body>
//           </Card>
//           <Card style={{ width: '18rem' }} className="mx-auto">
//             <Card.Img variant="top" src="./Images/d8.jfif" />
//             <Card.Body>
//               <Card.Title>Resources</Card.Title>
//               <Card.Text>Some resources history about deaf people.</Card.Text>
//               <Button variant="primary" href="https://www.startasl.com/blog/">
//                 Resources
//               </Button>
//             </Card.Body>
//           </Card>
//           <Card style={{ width: '18rem' }} className="mx-auto">
//             <Card.Img variant="top" src="./Images/deaf6.jfif" />
//             <Card.Body>
//               <Card.Title>Tutoring</Card.Title>
//               <Card.Text>Learn and Grow.</Card.Text>
//               <Button variant="primary" href="https://www.startasl.com/asl-tutors/">
//                 Tutor
//               </Button>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       {/* Third section */}
//       <Container>
//         <div className="paragraph-container" style={{ fontSize: 'medium', fontWeight: 'bold' }}>
          // <p>
          //   Starting a new school year, while exciting, can also be uncertain. National Deaf Center is here to help deaf
          //   students, their families, and schools get ready for a new school year, or semester.
          //   Proactive planning helps create more opportunities for deaf students to succeed. Planning should include
          //   advocacy, reasonable accommodations, effective communication, and equal opportunity to participate in school
          //   programs, events, and activities.
          //   The National Deaf Center developed guides for high schools, colleges, students, and their families with key
          //   strategies, common pitfalls, and evidence-based practices to help students reach #DeafSuccess. Contact the help
          //   team with any additional questions or concerns.
          // </p>
//         </div>
//         <div className="video-container">
//           <iframe
//             width="420"
//             height="500"
//             src="https://www.youtube.com/embed/0YcGev7B5AA?autoplay=1&mute=1"
//             frameborder="0"
//             allowfullscreen
//           ></iframe>
//         </div>
//       </Container>
//     </>
//   );
// };

// export default Res;

