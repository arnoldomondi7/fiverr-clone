import React from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import './orders.scss'

const Orders = () => {
	const currentUser = {
		id: 1,
		username: 'John Doe',
		isSeller: true,
	}
	return (
		<div className='orders'>
			<div className='container'>
				<div className='title'>
					<h1>Orders</h1>
				</div>
				<table>
					<tr>
						<th>Image</th>
						<th>Title</th>
						<th>Price</th>
						<th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
						<th>Contact</th>
					</tr>
					<tr>
						<td>
							<img src='./assets/projects/3.jpg' alt='' />
						</td>
						<td>Gig 1</td>
						<td>88</td>
						<td>123</td>
						<td>
							<AiOutlineMessage className='my-del' />
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
							<AiOutlineMessage className='my-del' />
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
							<AiOutlineMessage className='my-del' />
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
							<AiOutlineMessage className='my-del' />
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
							<AiOutlineMessage className='my-del' />
						</td>
					</tr>
				</table>
			</div>
		</div>
	)
}

export default Orders
