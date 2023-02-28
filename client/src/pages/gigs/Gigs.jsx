import React, { useState } from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Gigss } from '../../data'
import Gigcard from '../../components/gigcard/Gigcard'
import './gigs.scss'

const Gigs = () => {
	const [sort, setSort] = useState('sales')
	const [open, setOpen] = useState(false)

	//handle the sorting.
	const resort = type => {
		setSort(type)
		setOpen(false)
	}
	return (
		<div className='gigs'>
			<div className='container'>
				<span className='breadcrumbs'>Fiverr Graphics &Design</span>
				<h1>AI Artists</h1>
				<p>
					Explore The Bounderies of Art and Technology with Fiverr AI Artists
				</p>
				<div className='menu'>
					<div className='left'>
						<span>Budged</span>
						<input type='text' placeholder='min' />
						<input type='text' placeholder='max' />
						<button>Apply</button>
					</div>
					<div className='right'>
						<span className='sortBy'>Sort By</span>
						<span className='sortType'>
							{sort === 'sales' ? 'Best Selling' : 'Newest'}
						</span>
						<RiArrowDownSLine
							className='down-btn'
							onClick={() => setOpen(!open)}
						/>
						{open && (
							<div className='right-menu'>
								{sort === 'sales' ? (
									<span onClick={() => resort('createdAt')}>Newest</span>
								) : (
									<span onClick={() => resort('sales')}>Best Sellers</span>
								)}
							</div>
						)}
					</div>
				</div>

				<div className='cards'>
					{Gigss.map(gig => (
						<Gigcard key={gig.id} item={gig} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Gigs
