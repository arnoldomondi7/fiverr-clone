import React from 'react'
import { Link } from 'react-router-dom'
import './categorycard.scss'

const Categorycard = ({ item }) => {
	return (
		<Link to='/gigs?category=design'>
			<div className='categorycard'>
				<img src={item.img} alt={item.title} />
				<span className='description'>{item.description}</span>
				<span className='title'>{item.title}</span>
			</div>
		</Link>
	)
}

export default Categorycard
