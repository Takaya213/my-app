import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, A11y } from 'swiper'

import Icon from './Icons'

import 'swiper/css'
import 'swiper/css/navigation'

function Experience() {
    return (
    <div className='white-bg'>
        <div className='wrapper'>
            <div className='inner-wrapper experience-years'>
                <div className='swiper-header'>
                    <h2>Experience.</h2>
                    <div className='swiper-buttons'>
                        <div className='previous-btn'><Icon.Arrow /></div>
                        <div className='next-btn'><Icon.Arrow /></div>
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
                        prevEl: '.previous-btn',
                    }}
                >
                    <SwiperSlide>
                        <div className='experience'>
                            <p className='xsmall'>Mar 2017</p>
                            <div className='content'>
                                <p>Design and implement CSS and HTML on a React website for a media companies suite of websites.</p>
                                <p>Take designs and implement in CSS, HTML and jQuery on a .Net MVC website for a giving organisation.</p>
                            </div>
                            <div className='job-info'>
                                <p className='xsmall'>Consulatant</p>
                                <p>Saratoga</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='experience'>
                            <p className='xsmall'>Dec 2016</p>
                            <div className='content'>
                                <p>Maintain and Implement new features on the Curately by Piccing Inc website, using JavaScript and CSS.</p>
                            </div>
                            <div className='job-info'>
                                <p className='xsmall'>Front-end Developer</p>
                                <p>Piccing Inc.</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='experience'>
                            <p className='xsmall'>Feb 2013</p>
                            <div className='content'>
                                <p>Take wireframes and/or designs and convert them into HTML5, CSS and jQuery, with integration into Craft CMS or ExpressionEngine.</p>
                                <p>Lead and mentor Junior/Mid Front-end developers.</p>
                            </div>
                            <div className='job-info'>
                                <p className='xsmall'>Senior Front-end Developer</p>
                                <p>Itopia Interactive</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='experience'>
                            <p className='xsmall'>Jun 2011</p>
                            <div className='content'>
                                <p>Take a Design with a wireframe and convert it into CSS in Drupal, as well as set up basic websites in Drupal.</p>
                                <p>Secondary Tasks: Convert Email Design to HTML and send via iContact.</p>
                            </div>
                            <div className='job-info'>
                                <p className='xsmall'>Front-end Developer</p>
                                <p>2Stroke Interactive (aka Roger Wilco)</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='experience'>
                            <p className='xsmall'>Aug 2006</p>
                            <div className='content'>
                                <p>Take a Design brief and create designs for clients on a project basis.</p>
                                <p>Take the design and convert it into HTML, CSS and jQUery and possible CMS Theme.</p>
                            </div>
                            <div className='job-info'>
                                <p className='xsmall'>Senior Front-end Web Specialist</p>
                                <p>WebNow</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='experience'>
                            <p className='xsmall'>May 2005</p>
                            <div className='content'>
                                <p>Development of ASP 3.0 websites.</p>
                                <p>As a junior I was also able to delve into the world of front-end development and design.</p>
                            </div>
                            <div className='job-info'>
                                <p className='xsmall'>Junior Web Developer</p>
                                <p>The Formula Group</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='experience'>
                            <p className='xsmall'>Jan 2004</p>
                            <div className='content'>
                                <p>Designer of the website.</p>
                                <p>Development of the front-end of the website.</p>
                            </div>
                            <div className='job-info'>
                                <p className='xsmall'>Web Designer / Developer</p>
                                <p>McPherson Garden Centre</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='experience'>
                            <p className='xsmall'>Jan 2004</p>
                            <div className='content'>
                                <p>My work involved the creation of Website Designs.</p>
                                <p>Developing the front-end of the websites.</p>
                            </div>
                            <div className='job-info'>
                                <p className='xsmall'>Freelance Designer and Front-end Developer</p>
                                <p>ABC Web Team and Myself</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='experience'>
                            <p className='xsmall'>Jan 2002</p>
                            <div className='content'>
                                <p>Design of the front-end of the website for the online store.</p>
                                <p>Development of the website in ASP 3.0 to allow updating of the website.</p>
                            </div>
                            <div className='job-info'>
                                <p className='xsmall'>Designer and Web Developer</p>
                                <p>The Boyz and Menz Hobby Shop</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Experience