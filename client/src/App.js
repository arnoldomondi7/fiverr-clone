import React from 'react'
import Navbar from './components/navbar/Navbar'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Gigs from './pages/gigs/Gigs'
import Gig from './pages/gig/Gig'
import Orders from './pages/orders/Orders'
import Mygigs from './pages/mygigs/Mygigs'
import Add from './pages/add/Add'
import Messages from './pages/messages/Messages'
import Message from './pages/message/Message'
import './App.scss'

function App() {
	//create a layout function.
	const Layout = () => {
		return (
			<div className='app'>
				<Navbar />
				{/* represemts all the pages */}
				<Outlet />
				<Footer />
			</div>
		)
	}
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Layout />,
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/gigs',
					element: <Gigs />,
				},
				{
					path: '/gig/:id',
					element: <Gig />,
				},
				{
					path: '/orders',
					element: <Orders />,
				},
				{
					path: '/mygigs',
					element: <Mygigs />,
				},
				{
					path: '/add',
					element: <Add />,
				},
				{
					path: '/messages',
					element: <Messages />,
				},
				{
					path: '/message/:id',
					element: <Message />,
				},
			],
		},
	])
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App
