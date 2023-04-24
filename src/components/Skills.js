import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

function Skills() {
  const [error, setError] = useState(null)
  const [skills, setSkills] = useState([])

  useEffect(() => {
    async function fetchSkills() {
      await axios
        .get('https://njwebdesign.onrender.com/api/skills?sort[0]=SkillType:asc')
        .then(({ data }) => setSkills(data.data))
        .catch(error => setError(error))
    }
    fetchSkills()
  }, [])

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>
  }

  return (
    <div className='wrapper inner-padding'>
      <h2>Skills.</h2>
      <div className='inner-wrapper skills'>
        {skills.map(skill => (
          <div key={skill.id}>
            <p>{skill.attributes.SkillType}</p>
            <ReactMarkdown>{skill.attributes.SkillsList}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
