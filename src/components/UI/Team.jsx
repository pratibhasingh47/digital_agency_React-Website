import React from 'react';
import '../../styles/team.css';
import team01 from '../images/team-01.png';
import team02 from '../images/team-02.png';
import team03 from '../images/team-03.png';
import team04 from '../images/team-07.png';


const teamMembers = [
	{
		imagUrl: team01,
		name: 'Courtny Hurry',
		position: 'Product Developer',
	},

	{
		imagUrl: team02,
		name: 'Lindas Walton',
		position: 'Front-End Developer',
	},

	{
		imagUrl: team03,
		name: 'Harry Martin',
		position: 'Product Designer',
	},

	{
		imagUrl: team04,
		name: 'Mr. & Mrs. Jhon Cooper',
		position: 'CEO & Sr. Developer',
	},
]


const Team = () => {
	return (
		<section className='our__team'>
			<div className="container">
				<div className="team__content">

					<h6 className="subtitle">Our Team</h6>
					<h2>Meet with <span className="highlight">our team</span></h2>

				</div>

				<div className="team__wrapper">
					{
						teamMembers.map((item, index) => (
							<div className="team__item" key={index}>
								<div className="team__img">
									<img src={item.imagUrl} alt="" />
								</div>
								<div className="team__details">
									<h4>{item.name}</h4>
									<p className="description">
										{item.position}
									</p>
									<div className="team__member-social">
										<span><i className="ri-linkedin-fill"></i></span>
										<span><i className="ri-twitter-line"></i></span>
									</div>
								</div>
							</div>
						))
					}
				</div>


			</div>
		</section>
	)
}

export default Team