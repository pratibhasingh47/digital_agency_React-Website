import React from 'react'
import '../../styles/testimonials.css'

import Slider from 'react-slick';
import av1 from '../images/ava-1.jpg';
import av2 from '../images/ava-2.jpg';
import av3 from '../images/ava-3.jpg'

const Testimonials = () => {

	const settings = {
		dots: false,
		infinite: true,
		speed: 1000,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipeToSlide: true,
	}

	return (
		<section>

			<div className="container">

				<div className="slider__content-top">

					<h6 className="subtitle">Testimonials</h6>
					<h2>Trusted by more than <span className="highlight">5,000 customers</span></h2>

					<div className="slider__wrapper">
						<Slider {...settings}>
							<div className="slider__item">
								<p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut earum repellat laboriosam dignissimos optio consequatur in corporis corrupti magnam et, dolores voluptas asperiores dicta perferendis sequi hic praesentium pariatur ab?</p>

								<div className="customer__details">
									<div className="customer__img">
										<img src={av1} alt="" />
									</div>

									<div>
										<h5 className="customer__name">Jhon Doe</h5>
										<p className="description">CEO, Workcreation</p>
									</div>
								</div>
							</div>

							<div className="slider__item">
								<p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut earum repellat laboriosam dignissimos optio consequatur in corporis corrupti magnam et, dolores voluptas asperiores dicta perferendis sequi hic praesentium pariatur ab?</p>

								<div className="customer__details">
									<div className="customer__img">
										<img src={av3} alt="" />
									</div>

									<div>
										<h5 className="customer__name">Arthur Morgan</h5>
										<p className="description">Sr. Project Manager</p>
									</div>
								</div>
							</div>


							<div className="slider__item">
								<p className="description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut earum repellat laboriosam dignissimos optio consequatur in corporis corrupti magnam et, dolores voluptas asperiores dicta perferendis sequi hic praesentium pariatur ab?</p>

								<div className="customer__details">
									<div className="customer__img">
										<img src={av2} alt="" />
									</div>

									<div>
										<h5 className="customer__name">Anney Martin</h5>
										<p className="description">Software Developer</p>
									</div>
								</div>
							</div>
						</Slider>
					</div>


				</div>

			</div>

		</section>
	)
}

export default Testimonials