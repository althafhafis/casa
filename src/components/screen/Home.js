import React from 'react'
import Footer from './includes/Footer'
import Header from './includes/Header'

import tg from './../assets/telegram-outline.svg'
import arrow from './../assets/Arrow.svg'
import insta from './../assets/insta-icon.svg'
import dribble from './../assets/dribble-icon.svg'
import behance from './../assets/behance-icon.svg'
import play from './../assets/play-icon.svg'
import seal from './../assets/view-all-service-seal.svg'
import Sarrow from './../assets/service-arrow.svg'
import visual from './../assets/visual-icon.svg'
import wire_frame from './../assets/wire-frame.svg'
import ux from './../assets/ux-icon.svg'
import prototype from './../assets/prototype.svg'
import art_direction from './../assets/art-direction.svg'
import user_research from './../assets/user-research.svg'
import client from './../assets/clients-page-arrow3.svg'
import message from './../assets/message box-with -bg.svg'
import location from './../assets/location-with -bg.svg'
import hand from './../assets/Hand-color.svg'
import background from './../assets/landing-page-vector.png'
import { Helmet } from 'react-helmet'


export default function Home() {

	return (
		<>
			<Helmet>
				<title>Casa | Landing Page</title>
			</Helmet>
			<Header />
			<section id='spotlight'>
				<section className='wrapper'>
					<div className='left'>
						<h4>Hello!</h4>
						<h1>We have Design Experience</h1>
						<div className='dash'>
							<hr className='line' />
							<div className='para'>
								<p>Hi! I'm a UI/UX Designer--- creating bold & brave interface design for companies all across the world</p>
							</div>
						</div>
						<div className='button'>
							<span className='purple'>
								<a href='##'>Let's Talk</a>
								<img src={tg} alt='arrow' />
							</span>
							<span>
								<a href='##'>Portfolio</a>
								<img src={arrow} alt='arrow' />
							</span>
						</div>
						<div className='bottom'>
							<h5>Check Out My</h5>
							<img src={insta} alt='Instagram' />
							<img src={dribble} alt='Dribble' />
							<img src={behance} alt='Behance' />
						</div>
					</div>
					<div className='right'>
						
						<h4>"people ignore design that ignore people"</h4>
						<div className='background'>
							<img src={background} alt='background' />
							<div className='play'>
								<img src={play} alt='play' />
							</div>
						</div>
					</div>
				</section>
			</section>
			<section id='service'>
				<section className='wrapper'>
					<div className='left'>
						<div className='top'>
							<h4>Service</h4>
							<h1>Services | Offer</h1>
							<div className='dash'>
								<hr className='line' />
								<div className='para'>
									<p>We help ambitious bussiness like your generate more profits by building awerness, driving web traffic, connecting with customers and growing overall sales.</p>
								</div>
							</div>
						</div>
						<div className='bottom'>
							<img src={seal} alt='seal' />
						</div>
					</div>

					<div className='right'>
						<ul>
							<li>
								<h5>01/</h5>
								<div className='middle'>
									<h2>web UI/UX Design</h2>
									<h6>Explore</h6>
								</div>
								<div className='arrow'>
									<img src={Sarrow} alt='Arrow' />
								</div>
							</li>
							<li>
								<h5>02/</h5>
								<div className='middle'>
									<h2>Mobile App UI/UX Design</h2>
									<h6>Explore</h6>
								</div>
								<div className='arrow'>
									<img src={Sarrow} alt='Arrow' />
								</div>
							</li>
							<li>
								<h5>03/</h5>
								<div className='middle'>
									<h2>Dashboard & Saas Design</h2>
									<h6>Explore</h6>
								</div>
								<div className='arrow'>
									<img src={Sarrow} alt='Arrow' />
								</div>
							</li>
						</ul>
					</div>
				</section>
			</section>
			<section id='skills'>
				<section className='wrapper'>
					<div className='left'>
						<div className='top'>
							<h4>Experience</h4>
							<h1>Skills & Experience</h1>
							<div className='dash'>
								<hr className='line' />
								<div className='para'>
									<p>We help ambitious bussiness like your generate more profits by building awerness, driving web traffic, connecting with customers and growing overall sales.</p>
								</div>
							</div>
						</div>
						<div className='bottom'>
							<h3>Skills</h3>
							<ul>
								<li>
									<img src={visual} alt='Visual Icon' />
									<h4>Visual design</h4>
								</li>
								<li>
									<img src={wire_frame} alt='Visual Icon' />
									<h4>Visual design</h4>
								</li>
								<li>
									<img src={ux} alt='Visual Icon' />
									<h4>Visual design</h4>
								</li>
								<li>
									<img src={prototype} alt='Visual Icon' />
									<h4>Visual design</h4>
								</li>
								<li>
									<img src={art_direction} alt='Visual Icon' />
									<h4>Visual design</h4>
								</li>
								<li>
									<img src={user_research} alt='Visual Icon' />
									<h4>Visual design</h4>
								</li>
							</ul>
						</div>
					</div>
					<div className='right'>
						<h2>Experience</h2>
						<ul>
							<li>
								<h4>2019-Present</h4>
								<div className='position'>
									<h3>Product Designer</h3>
									<span>Amazon Inc</span>
								</div>
							</li>
							<li>
								<h4>2014-2006</h4>
								<div className='position'>
									<h3>UI/UX Designer</h3>
									<span>Microsoft</span>
								</div>
							</li>
							<li>
								<h4>2014-2006</h4>
								<div className='position'>
									<h3>web UI/UX Designer</h3>
									<span>Google</span>
								</div>
							</li>
							<li>
								<h4>2014-2006</h4>
								<div className='position'>
									<h3>UI Designer</h3>
									<span>Facebook</span>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</section>
			<section id='projects'>
				<section className='wrapper'>
					<ul>
						<li>
							<div className='top'>
								<h2>Latest Projects</h2>
							</div>
							<div className='bottom'>
								<div className='flex'>
									<div className='left'>
										<h3>Plantshop Landing page Design</h3>
										<h4>web/loading page</h4>
									</div>
									<img src={Sarrow} alt='Arrow' />

								</div>
								<div className='img_container'>
										<img src={require('./../assets/Rectangle 7-2.jpg')} alt='Card' />
								</div>
							</div>
						</li>
						<li>
							<div className='bottom'>
								<div className='flex'>
									<div className='left'>
										<h3>VPS Hosting Web Design</h3>
										<h4>web/loading page</h4>
									</div>
									<img src={Sarrow} alt='Arrow' />
								</div>
								<div className='img_container'>
									<img src={require('./../assets/Rectangle 7-1.jpg')} alt='Card' />
								</div>
							</div>
						</li>
						<li>
							<div className='bottom'>
								<div className='flex'>
									<div className='left'>
										<h3>Book Landing Page Design</h3>
										<h4>web/loading page</h4>
									</div>
									<img src={Sarrow} alt='Arrow' />
								</div>
								<div className='img_container'>
									<img src={require('./../assets/Rectangle 7.jpg')} alt='Card' />
								</div>
								<div className='seal'>
									<img src={seal} alt='seal' />
								</div>
							</div>
						</li>
					</ul>
				</section>
			</section>
			<section id='testimonials' >
				<section className='wrapper'>
					<div className='top'>
						<div className='left'>
							<h4>Testimonial</h4>
							<h1>Client's Kind Word</h1>
						</div>
						<div className='dash'>
							<hr className='line' />
							<div className='para'>
								<p>We help ambitious bussiness like your generate more profits by building awerness, driving web traffic, connecting with customers and growing overall sales.</p>
							</div>
						</div>
						<div className='right'>
							<img src={client} alt='arrow' />
						</div>
					</div>
					<div className='bottom'>
						<div className='img_container'>
							<img src={require('./../assets/client-person1.png')} alt='Person' />
						</div>
						<div className='middle'>
							<p>"<b>I've Been Working</b> with Casey Exclusively Since 2014 profits by building awareness, driving web traffic, connecting with customers and growing overall. We help ambitious <b>Professional Design </b>bussiness profits by building awareness, driving web traffic, connecting with customers and we help ambit As the <b className='grey'>Visual Design</b> " </p>
							<h4>Mustafa Rahman</h4>
							<span>_  CEO Toogle</span>
						</div>
						<div className='img_container'>
							<img src={require('./../assets/client-person2.png')} alt='Person' />
						</div>
					</div>
				</section>
			</section>
			
			<section id='contact' className='home_cont'>
				<section className='wrapper'>
				<div className='left'>
                <h5>Contact</h5>
                <h1>Let's Discuss Your Project</h1>
                <div className='flex'>
                    <div className='img_container'>
                        <img src={message} alt='Message' />
                    </div>
                    <div className='right'>
                        <span>Email</span>
                        <h4>Client.tnim@gmail.com</h4>
                    </div>
                </div>
                <div className='flex'>
                    <div className='img_container'>
                        <img src={location} alt='Location' />
                    </div>
                    <div className='right'>
                        <span>Location</span>
                        <h4>Washington Ave.manchester, Kentucky 39495</h4>
                    </div>
                </div>
            </div>
            <div className='circle'>
                <div className='hi'>
                    <img src={hand} alt="Wave" /><h3> Say Hi!</h3>
                    <img src={Sarrow} className='arrow' alt='arrow' />
                </div>
            </div>
				</section>
			</section>


			<Footer />
		</>
	)
}
