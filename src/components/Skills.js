import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Skills() {
const [error, setError] = useState(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:1337/api/skills')
      .then(({ data }) => setSkills(data))
      .catch(error => setError(error))
  }, [])

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div className='wrapper inner-padding'>
      <h2>Skills.</h2>
      {skills.map(({ id, skilltype }) => <li key={id}>{skilltype}</li>)}
      <div className='inner-wrapper skills'>
        <div>
          <p>Design</p>
          <p>
            Figma (Design and Prototype)
            <br />
            User Flows
            <br />
            Information Architecture UX
            <br />
            Sitemaps
            <br />
            Accessibility
          </p>
        </div>
        <div>
          <p>Development</p>
          <p>
            HTML 5<br />
            CSS (Sass, XStyled)
            <br />
            jQuery
            <br />
            ReactJS
            <br />
            Craft CMS
            <br />
            Accessibility
            <br />
            Visual Studio Code
            <br />
            Visual Studio
          </p>
        </div>
      </div>
    </div>
  )
}

export default Skills
