//Import necessary React components and CSS file
import React, { useState } from 'react';
import './Job.css';
import Header from './Header';
import deaf2 from './Images/deaf2.png'
import job1 from './Images/job1.png'
import job2 from './Images/job2.jpg'
import job3 from './Images/job3.jpeg'
import job4 from './Images/job4.jpeg'
import job5 from './Images/job5.jpeg'
import job6 from './Images/job6.jpeg'
import d from './Images/deaf_icon.jpg'
import bg from './bg.jpeg'

// Sample job data
const jobsData = [
  { id: 1, title: 'Sign Language Translator', location: 'Remote', category: 'IT', type: 'Full Time', image: job4, website: 'https://in.linkedin.com/jobs/deaf-jobs?currentJobId=3828248290&position=1&pageNum=0' },
  { id: 2, title: 'Graphic Designer', location: 'New York', category: 'Design', type: 'Part Time', image: job6, website: 'https://www.indeed.com/career-advice/finding-a-job/jobs-deaf-hard-of-hearing' },
  { id: 3, title: 'Full Stack Developer', location: 'San Francisco', category: 'IT', type: 'Contract', image: job2, website: 'https://www.zippia.com/advice/jobs-deaf-people/' },
  { id: 4, title: 'UX/UI Designer', location: 'Los Angeles', category: 'Design', type: 'Full Time', image: job3, website: 'https://www.trade-schools.net/articles/jobs-for-deaf-people' },
  { id: 5, title: 'Data Scientist', location: 'Chicago', category: 'Data Science', type: 'Part Time', image: job1, website: 'https://mydisabilityjobs.com/career-tips/jobs-for-deaf-people/' },
  { id: 6, title: 'Marketing Specialist', location: 'Boston', category: 'Marketing', type: 'Full Time', image: job5, website: 'https://apm.net.au/job-seekers/resources/top-10-jobs-for-people-with-a-hearing-impairment' },
  // Add more job data as needed
];

// JobCard component for displaying each job in a card
const JobCard = ({ job }) => {
  const cardStyle = {
    width: '1200px',
    display: 'flex',
    alignItems: 'center', // Center vertically
    justifyContent: 'space-between', // Add this line
    margin: '10px', // Add margin to the card
  };

  const detailsStyle = {
    marginRight: '10px',
    marginLeft: '15px',
    flex: '1', // Make the job details take remaining space
  };

  const imageStyle = {
    width: '600px',
    height: '270px',
    margin: '10px',
  };

  const buttonStyle = {
    backgroundColor: '#3498db', // Blue color for the button
    color: '#fff', // White text color
    padding: '10px 20px', // Padding for the button
    borderRadius: '5px', // Add rounded corners
    cursor: 'pointer',
  };

  return (
    <div className="job-card" style={cardStyle}>
      <div className="job-details" style={detailsStyle}>
        <h3><b>{job.title}</b></h3>
        <p>
          <strong>Location:</strong> {job.location}
        </p>
        <p>
          <strong>Category:</strong> {job.category}
        </p>
        <p>
          <strong>Type:</strong> {job.type}
        </p>
        <a href={job.website} target="_blank" rel="noopener noreferrer">
          <button className="apply-button" style={buttonStyle}>
            Apply
          </button>
        </a>
      </div>
      <div className="job-image" style={{ ...imageStyle, marginLeft: '10px', marginBottom: '10px' }}>
        <img src={job.image} alt={job.title} style={imageStyle} />
      </div>
    </div>
  );
};



// JobList component to display the list of jobs using cards
const JobList = ({ jobs }) => {
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

const JobFilter = ({ categories, regions, jobTypes, onFilterChange }) => {
  const filterContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px', // Add margin as needed
  };

  const labelStyle = {
    fontSize: '22px',
    marginRight: '10px',
    color: 'white',
    marginLeft: '380px'
  };

  const selectStyle = {
    marginRight: '10px',
    padding: '5px', // Add padding as needed
  };

  return (
    <div className="job-filter" style={filterContainerStyle}>
      <label style={labelStyle}>Filter by</label>
      <select style={selectStyle} onChange={(e) => onFilterChange('category', e.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select style={selectStyle} onChange={(e) => onFilterChange('region', e.target.value)}>
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
      <select style={selectStyle} onChange={(e) => onFilterChange('type', e.target.value)}>
        <option value="">All Types</option>
        {jobTypes.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

// Main Job component
const Job = () => {
  const [filters, setFilters] = useState({
    category: '',
    region: '',
    type: '',
  });

  const categories = [...new Set(jobsData.map((job) => job.category))];
  const regions = [...new Set(jobsData.map((job) => job.location))];
  const jobTypes = [...new Set(jobsData.map((job) => job.type))];

  const applyFilters = (filterType, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [filterType]: value }));
  };

  const filteredJobs = jobsData.filter((job) => {
    return (
      (filters.category === '' || job.category === filters.category) &&
      (filters.region === '' || job.location === filters.region) &&
      (filters.type === '' || job.type === filters.type)
    );
  });

  return (
    <>
   
    <div className="background-container" >
      <div><br/>
        <center><h1 style={{ color: 'white' }}><b>Deaf-Friendly Job Portal</b></h1>
        <h3 style={{color: 'yellow'}}><b>Find Your Job better and faster</b></h3></center></div>
<br/><hr/>
<div >
  <center>
        <JobFilter categories={categories} regions={regions} jobTypes={jobTypes} onFilterChange={applyFilters} />
        <JobList jobs={filteredJobs} />
        </center>
      </div></div>
    </>
  );
};

export default Job;