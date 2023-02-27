import React from 'react'
import Featured from '../../components/featured/Featured'
import Trustedby from '../../components/trustedby/Trustedby'
import Slide from '../../components/slider/Slider'
import Categorycard from '../../components/categoryCard/Categorycard'
import { Cards } from '../../data'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import VideoFile from '../../videos/1.mkv'
import './home.scss'

const Home = () => {
	return (
		<div className='home'>
			<Featured />
			<Trustedby />
			<Slide slidesToShow={5} arrowsScroll={5}>
				{Cards.map(card => (
					<Categorycard key={card.id} item={card} />
				))}
			</Slide>

			<div className='features'>
				<div className='container'>
					<div className='item'>
						<h1>Best of the Best For You.</h1>
						<div className='title'>
							<AiOutlineCheckCircle className='title-tick' />
							very budget friendly
						</div>
						<p>Quality Service for reasonable prices</p>

						<div className='title'>
							<AiOutlineCheckCircle className='title-tick' />
							very budget friendly
						</div>
						<p>Quality Service for reasonable prices</p>

						<div className='title'>
							<AiOutlineCheckCircle className='title-tick' />
							very budget friendly
						</div>
						<p>Quality Service for reasonable prices</p>

						<div className='title'>
							<AiOutlineCheckCircle className='title-tick' />
							very budget friendly
						</div>
						<p>Quality Service for reasonable prices</p>

						<div className='title'>
							<AiOutlineCheckCircle className='title-tick' />
							very budget friendly
						</div>
						<p>Quality Service for reasonable prices</p>
					</div>
					<div className='item'>
						<video src={VideoFile} controls></video>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
