import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
	//handle the scrolling effect.
	const [active, setActive] = useState(false)
	//open the options.
	const [open, setOpen] = useState(false)

	//set condition to alter the navbar when not in the homepage.
	const { pathname } = useLocation()

	//create a function to keep tabs of the scroll.
	const isActive = () => {
		window.scrollY > 0 ? setActive(true) : setActive(false)
	}

	//the is active will be activated by the useEffect.
	useEffect(() => {
		//listen to the scrolling event.
		window.addEventListener('scroll', isActive)

		//cleanup function.
		return () => {
			window.removeEventListener('scroll', isActive)
		}
	})

	//handle the current user.
	const currentUser = {
		id: 1,
		username: 'John Doe',
		isSeller: true,
	}
	return (
		<div className={active || pathname !== '/' ? 'navbar active' : 'navbar'}>
			<div className='container'>
				<div className='logo'>
					<Link to='/' className='link'>
						<span className='text'>Fiverr Clone</span>
					</Link>

					<span className='dot'>.</span>
				</div>
				<div className='links'>
					<span>fiverr Business</span>
					<span>Explore</span>
					<span>English</span>
					<span>Sign In</span>
					{!currentUser?.isSeller && <span>Become a Seller</span>}
					{!currentUser && <button>Join</button>}
					{currentUser && (
						<div className='user' onClick={() => setOpen(!open)}>
							<img src='./assets/images/ano.jpg' alt='' />
							<span>{currentUser?.username}</span>
							{open && (
								<div className='options'>
									{currentUser?.isSeller && (
										<>
											<Link className='link' to='/mygigs'>
												Gigs
											</Link>
											<Link className='link' to='/add'>
												Add New Gig
											</Link>
										</>
									)}
									<Link className='link' to='/orders'>
										Orders
									</Link>
									<Link className='link' to='/messages'>
										Messages
									</Link>
									<Link className='link'>Logout</Link>
								</div>
							)}
						</div>
					)}
				</div>
			</div>
			{(active || pathname !== '/') && (
				<>
					<hr />
					<div className='menu'>
						<Link className='link menuLink' to='/'>
							Graphics & Design
						</Link>

						<Link className='link ' to='/'>
							Video & Animation
						</Link>

						<Link className='link ' to='/'>
							Writing & Translation
						</Link>

						<Link className='link ' to='/'>
							AI Services
						</Link>

						<Link className='link ' to='/'>
							Digital Marketing
						</Link>

						<Link className='link ' to='/'>
							Music & Audio
						</Link>

						<Link className='link ' to='/'>
							Programming & Tech
						</Link>

						<Link className='link ' to='/'>
							Business
						</Link>

						<Link className='link ' to='/'>
							Lifestyle
						</Link>
					</div>
				</>
			)}
		</div>
	)
}

export default Navbar
