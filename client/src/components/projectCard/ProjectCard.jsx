import React from 'react'
import { Link } from 'react-router-dom'
import './projectcard.scss'

const ProjectCard = ({ item }) => {
	return (
		<Link to='/' className='link'>
			<div className='projectcard'>
				<img src={item.img} alt={item.title} />
				<div className='info'>
					<img src={item.pp} alt={item.title} />

					<div className='texts'>
						<h2>{item.cat}</h2>
						<span>{item.username}</span>
					</div>
				</div>
			</div>
		</Link>
	)
}

export default ProjectCard
