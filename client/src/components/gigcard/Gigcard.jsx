import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillStar } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import './gigcard.scss'

const Gigcard = ({ item }) => {
	return (
		<Link to='/gig/123' className='link'>
			<div className='gigcard'>
				<img src={item.img} alt={item.username} />
				<div className='info'>
					<div className='user'>
						<img src={item.pp} alt={item.username} />
						<span>{item.username}</span>
					</div>
					<p>{item.description}</p>
					<div className='star'>
						<AiFillStar className='str' />
						<span>{item.star}</span>
					</div>
				</div>
				<hr />
				<div className='details'>
					<FcLike className='hrt' />
					<div className='price'>
						<span>STARTING AT:</span>
						<h2>${item.price}</h2>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default Gigcard
