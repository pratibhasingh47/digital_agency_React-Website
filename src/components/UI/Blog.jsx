import React from 'react'
import '../../styles/blog.css';

import videoimg from '../images/video.png';
import articleimg from '../images/article.png';
import casestudy from '../images/case-study.png';

const blogData = [
	{
		imgUrl: videoimg,
		title: 'Video',
		desc: 'To know about work. Watch some video f....',
		linkUrl: '#',
	},

	{
		imgUrl: articleimg,
		title: 'Articles',
		desc: 'Do you want to improve the way your brand interacts with coustomer? Let\'s talk',
		linkUrl: '#',
	},

	{
		imgUrl: casestudy,
		title: 'CaseStudy',
		desc: 'Boost your conversation rate with us....',
		linkUrl: '#',
	},
]

const Blog = () => {
	return (
		<section id='blog' className='blog'>
			<div className="container">
				<div className='blog__top-content'>
					<h6 className="subtitle">Our Blog</h6>
					<h2>
						Let's have a look from our <span className="highlight">
							recent blog</span>
					</h2>
				</div>

				<div className="blog__wrapper">
					{
						blogData.map((item, index) => (
							<div className="blog__item" key={index}>
								<h3>{item.title}</h3>
								<div className="blog__img">
									<img src={item.imgUrl} alt="" />
								</div>

								<p className="description blog__desc">
									{item.desc}
								</p>

								<div><a href={item.linkUrl} className="learn__more"><i className="ri-arrow-right-line"></i></a></div>
							</div>
						))
					}
				</div>
			</div>
		</section>
	)
}

export default Blog