import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'
import ReactMarkdown from 'react-markdown'

import Icon from './Icons'

import 'swiper/css'
import 'swiper/css/navigation'

function Experience() {
  const [error, setError] = useState(null)
  const [experiences, setSExperiences] = useState([])

  useEffect(() => {
    async function fetchExperience() {
      await axios
        .get('http://localhost:1337/api/experiences?sort[0]=Year:desc')
        .then(({ data }) => setSExperiences(data.data))
        .catch(error => setError(error))
    }
    fetchExperience()
  }, [])

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>
  }
    return (
      <div className='white-bg'>
        <div className='wrapper'>
          <div className='inner-wrapper experience-years'>
            <div className='swiper-header'>
              <h2>Experience.</h2>
              <div className='swiper-buttons'>
                <div className='previous-btn'>
                  <Icon.Arrow />
                </div>
                <div className='next-btn'>
                  <Icon.Arrow />
                </div>
              </div>
            </div>
            <Swiper
              modules={[Navigation, A11y]}
              spaceBetween={32}
              slidesPerView={2}
              breakpoints={{
                543: {
                  slidesPerView: 2,
                  spaceBetween: 32
                },
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20
                }
              }}
              navigation={{
                nextEl: '.next-btn',
                prevEl: '.previous-btn'
              }}
            >
              {experiences.map(experience => (
                <SwiperSlide key={experience.id}>
                  <div className='experience'>
                    <p className='xsmall'>
                      {experience.attributes.Month} {experience.attributes.Year}
                    </p>
                    <ReactMarkdown className='content'>{experience.attributes.ExperienceInfo}</ReactMarkdown>
                    <div className='job-info'>
                      <p className='xsmall'>{experience.attributes.JobTitle}</p>
                      <p>{experience.attributes.CompanyName}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    )
}

export default Experience