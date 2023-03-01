import React from 'react'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import './mygigs.scss'

const Mygigs = () => {
	return (
		<div className='mygigs'>
			<div className='container'>
				<div className='title'>
					<h1>Gigs</h1>
					<Link to='/add'>
						<button>Add New Gig</button>
					</Link>
				</div>
				<table>
					<tr>
						<th>Image</th>
						<th>Title</th>
						<th>Price</th>
						<th>Sales</th>
						<th>Action</th>
					</tr>
					<tr>
						<td>
							<img src='./assets/projects/3.jpg' alt='' />
						</td>
						<td>Gig 1</td>
						<td>88</td>
						<td>123</td>
						<td>
							<RiDeleteBin6Fill className='my-del' />
						</td>
					</tr>
					<tr>
						<td>
							<img src='./assets/projects/3.jpg' alt='' />
						</td>
						<td>Gig 1</td>
						<td>88</td>
						<td>123</td>
						<td>
							<RiDeleteBin6Fill className='my-del' />
						</td>
					</tr>
					<tr>
						<td>
							<img src='./assets/projects/3.jpg' alt='' />
						</td>
						<td>Gig 1</td>
						<td>88</td>
						<td>123</td>
						<td>
							<RiDeleteBin6Fill className='my-del' />
						</td>
					</tr>
					<tr>
						<td>
							<img src='./assets/projects/3.jpg' alt='' />
						</td>
						<td>Gig 1</td>
						<td>88</td>
						<td>123</td>
						<td>
							<RiDeleteBin6Fill className='my-del' />
						</td>
					</tr>
					<tr>
						<td>
							<img src='./assets/projects/3.jpg' alt='' />
						</td>
						<td>Gig 1</td>
						<td>88</td>
						<td>123</td>
						<td>
							<RiDeleteBin6Fill className='my-del' />
						</td>
					</tr>
				</table>
			</div>
		</div>
	)
}

export default Mygigs
