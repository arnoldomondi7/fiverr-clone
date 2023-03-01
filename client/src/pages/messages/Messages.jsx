import React from 'react'
import './messages.scss'
import { Link } from 'react-router-dom'

const Messages = () => {
	const message = `		Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Aspernatur porro provident maiores, officia hic ex blanditiis,
							vero facilis est reprehenderit quas. Maxime quae quos accusantium
							aliquid dolorum soluta nobis porro.`
	return (
		<div className='messages'>
			<div className='container'>
				<div className='title'>
					<h1>Messages</h1>
				</div>
				<table>
					<tr>
						<th>Buyer</th>
						<th>Last Message</th>
						<th>Date</th>
						<th>Action</th>
					</tr>
					<tr className='active'>
						<td>John Doe</td>
						<td>
							<Link to='/message/123' className='link'>
								{message.substring(0, 100)}...
							</Link>
						</td>
						<td>2 days ago</td>
						<td>
							<button>Mark As Read</button>
						</td>
					</tr>
					<tr className='active'>
						<td>John Doe</td>
						<td>
							<Link to='/message/123' className='link'>
								{message.substring(0, 100)}...
							</Link>
						</td>
						<td>2 days ago</td>
						<td>
							<button>Mark As Read</button>
						</td>
					</tr>
					<tr>
						<td>John Doe</td>
						<td>
							<Link to='/message/123' className='link'>
								{message.substring(0, 100)}...
							</Link>
						</td>
						<td>2 days ago</td>
					</tr>
					<tr>
						<td>John Doe</td>
						<td>
							<Link to='/message/123' className='link'>
								{message.substring(0, 100)}...
							</Link>
						</td>
						<td>2 days ago</td>
					</tr>
					<tr>
						<td>John Doe</td>
						<td>
							<Link to='/message/123' className='link'>
								{message.substring(0, 100)}...
							</Link>
						</td>
						<td>2 days ago</td>
					</tr>
				</table>
			</div>
		</div>
	)
}

export default Messages
