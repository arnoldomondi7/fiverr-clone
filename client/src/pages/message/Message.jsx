import React from 'react'
import { Link } from 'react-router-dom'
import { TbSend } from 'react-icons/tb'
import './message.scss'

const Message = () => {
	return (
		<div className='message'>
			<div className='container'>
				<span className='breadcrumbs'>
					<Link to='/messages' className='link'>
						Messages
					</Link>
					John Doe
				</span>

				<div className='messages'>
					<div className='item'>
						<img src='../assets/dp/3.jpg' alt='' className='img-msg' />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quam
							sunt voluptatibus laboriosam veritatis voluptate dolor iusto
							tenetur culpa ea iure cumque repellendus sed a illum tempore,
							facilis porro facere?
						</p>
					</div>
					<div className='item owner'>
						<img src='../assets/dp/3.jpg' alt='' className='img-msg' />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quam
							sunt voluptatibus laboriosam veritatis voluptate dolor iusto
							tenetur culpa ea iure cumque repellendus sed a illum tempore,
							facilis porro facere?
						</p>
					</div>
					<div className='item'>
						<img src='../assets/dp/3.jpg' alt='' className='img-msg' />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quam
							sunt voluptatibus laboriosam veritatis voluptate dolor iusto
							tenetur culpa ea iure cumque repellendus sed a illum tempore,
							facilis porro facere?
						</p>
					</div>
					<div className='item owner'>
						<img src='../assets/dp/3.jpg' alt='' className='img-msg' />
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quam
							sunt voluptatibus laboriosam veritatis voluptate dolor iusto
							tenetur culpa ea iure cumque repellendus sed a illum tempore,
							facilis porro facere?
						</p>
					</div>
				</div>
				<hr />
				<div className='write'>
					<textarea
						name=''
						placeholder='Write a message'
						id=''
						cols='30'
						rows='10'
					></textarea>
					<button>
						Send <TbSend />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Message
