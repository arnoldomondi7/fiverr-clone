import React from 'react'
import { BsSearch } from 'react-icons/bs'
import './featured.scss'

const Featured = () => {
	return (
		<div className='featured'>
			<div className='container'>
				<div className='left'>
					<h1>
						Find The Best <i>Freelancers</i> For Your Business
					</h1>
					<div className='search'>
						<div className='search-inputs'>
							<BsSearch className='search-icon' />
							<input type='search' placeholder='Search for freelancers' />
						</div>
						<button>Search</button>
					</div>
					<div className='popular'>
						<span>Popular:</span>
						<button>Web Development</button>
						<button>Wordpress</button>
						<button>Logo Design</button>
						<button>AI Services</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Featured
