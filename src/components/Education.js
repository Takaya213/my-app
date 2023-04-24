import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Education() {
  const [error, setError] = useState(null)
  const [educations, setEducations] = useState([])

  useEffect(() => {
    async function fetchEducations() {
      await axios
        .get('https://njwebdesign.onrender.com/api/educations')
        .then(({ data }) => setEducations(data.data))
        .catch(error => setError(error))
    }
    fetchEducations()
  }, [])

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>
  }

  return (
    <div className='white-bg'>
      <div className='wrapper'>
        <h2>Education.</h2>
        <div className='inner-wrapper education-list'>
          {educations.map(education => (
            <div className='education' key={education.id}>
              <p>{education.attributes.CourseName}</p>
              {education.attributes.CertificateUrl ? (
                <p>
                  <a href={education.attributes.CertificateUrl} target='_blank' rel='noreferrer' className='xsmall'>
                    {education.attributes.InstitutionName}
                  </a>
                </p>
              ) : (
                <p className='xsmall'>{education.attributes.InstitutionName}</p>
              )}
              <p className='xsmall'>{education.attributes.YearCompleted}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Education
