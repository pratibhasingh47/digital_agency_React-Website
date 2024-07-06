import React from 'react'
import '../../styles/about.css'

import aboutimg from '../images/about-us.jpg'

const chooseData = [
	{
		icon: 'ri-wifi-line',
		title: 'First working process',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eius accusantium magni vero iusto.',
	},

	{
		icon: 'ri-team-line',
		title: 'Dedicated Team',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eius accusantium magni vero iusto.',
	},

	{
		icon: 'ri-customer-service-2-fill',
		title: '24/7 Hours Support',
		desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio eius accusantium magni vero iusto.',
	},
];

const About = () => {
	return (
		<section id="about">
			<div className="container">
				<div className="about__wrapper">
					<div className="about__content">
						<h6 className='subtitle'>Why Choose Us</h6>
						<h2>Specialist in aviding clients on</h2>
						<h2 className='highlight'>fiancial challenges</h2>
						<p className='description about__content-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem minima quam doloribus enim aspernatur ea hic natus asperiores dolorem.</p>

						<div className='choose__item-wrapper'>
							{
								chooseData.map((item, index) => (

									<div className="choose__us-item" key={index}>
										<span className="choose__us-icon"><i className={item.icon}></i></span>
										<div>
											<h4 className="choose__us-title">
												{item.title}
											</h4>
											<p className="description">{item.desc}</p>
										</div>
									</div>
								))
							}
						</div>
					</div>

					<div className="about__img">
						<img src={aboutimg} alt="About" />
					</div>
				</div>
			</div>
		</section>
	)
}

export default About