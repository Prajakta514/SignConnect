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
    <div style={{width:'100%'}}>
      
    <center>
      <div className="second">
        <h2 style={{ textAlign: 'center', color: 'rgb(43, 16, 16)' }}>Resources</h2>

        <div className="second_first">
          <Card style={{ width: '25rem', height:'400px'}} className="mx-auto">
            <Card.Img variant="top" src={deaf2} />
            <Card.Body>
              <Card.Title>Latest Updates</Card.Title>
              <Card.Text>Get the latest updates.</Card.Text>
              <Button variant="primary" href="https://nationaldeafcenter.org/news-items/new-data-dashboard-updates/">
                Check Updates
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '25rem', height:'400px' }} className="mx-auto">
            <Card.Img variant="top" src={deaf2} />
            <Card.Body>
              <Card.Title>Scholarships</Card.Title>
              <Card.Text>Available</Card.Text>
              <Button variant="primary" href="https://www.rmtcdhh.org/faq/scholarships#:~:text=What%20scholarships%20are%20available%20for%20students%20who%20are,8%20Rochester%20Institute%20of%20Technology%20...%20More%20items">
                Scholarships
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '25rem', height:'400px' }} className="mx-auto">
            <Card.Img variant="top" src={deaf2} />
            <Card.Body>
              <Card.Title>Articles</Card.Title>
              <Card.Text>Learn and Grow.</Card.Text>
              <Button variant="primary" href="https://www.nytimes.com/2021/10/10/opinion/deaf-population-integration.html">
                Check Articles
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
      <br/><br/><br/>
      </center>
    </div>
  );
};

export default Res;