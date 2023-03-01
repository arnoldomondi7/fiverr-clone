import React from 'react'
import './add.scss'

const Add = () => {
	return (
		<div className='add'>
			<div className='container'>
				<h1>Add New Gig</h1>
				<div className='sections'>
					<div className='left'>
						<lable htmlFor=''>Title</lable>
						<input type='text' placeholder='I Do Great Job.' />
						<label htmlFor=''>Category</label>
						<select name='cats' id='cats'>
							<option value='design'>Design</option>
							<option value='web'>Web Development</option>
							<option value='animation'>Animation</option>
							<option value='music'>Music</option>
						</select>
						<label htmlFor=''>Cover Image</label>
						<input type='file' />
						<label htmlFor=''>Upload Image</label>
						<input type='file' multiple />
						<label htmlFor=''>Descriptions</label>
						<textarea
							name=''
							id=''
							cols='30'
							rows='16'
							placeholder='Brief description to introduce what you do'
						></textarea>
						<button>Create</button>
					</div>
					<div className='right'>
						<label htmlFor=''>Service Title</label>
						<input type='text' placeholder='e.g one page design' />
						<label htmlFor=''>Short Description</label>
						<textarea
							name=''
							id=''
							cols='30'
							rows='10'
							placeholder='short description of your service'
						></textarea>
						<label htmlFor=''>Delivery Time</label>
						<input type='text' min={1} />
						<label htmlFor=''>Revision Number</label>
						<input type='text' min={1} />
						<label htmlFor=''>Add Features</label>
						<input type='text' placeholder='e.g page design' />
						<input type='text' placeholder='' />
						<input type='text' placeholder='' />
						<input type='text' placeholder='' />
						<label htmlFor=''>Price</label>
						<input type='text' min={1} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Add
