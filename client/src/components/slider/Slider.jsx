import React from 'react'
import Slider from 'infinite-react-carousel'

import './slider.scss'

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
	return (
		<div className='slider'>
			<div className='container'>
				<Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
					{children}
				</Slider>
			</div>
		</div>
	)
}

export default Slide
