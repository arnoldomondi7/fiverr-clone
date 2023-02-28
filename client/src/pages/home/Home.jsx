import React from 'react'
import Featured from '../../components/featured/Featured'
import Trustedby from '../../components/trustedby/Trustedby'
import Slide from '../../components/slider/Slider'
import Categorycard from '../../components/categoryCard/Categorycard'
import { Cards, Projects } from '../../data'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import VideoFile from '../../videos/1.mkv'
import ProjectCard from '../../components/projectCard/ProjectCard'
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

			<div className='features dark'>
				<div className='container'>
					<div className='item'>
						<h1>Fiverr Business</h1>
						<h1>Business Solutions designed for you.</h1>
						<p>Upgrade to an advanced level designed for business teams</p>

						<div className='title'>
							<AiOutlineCheckCircle className='title-tick' />
							Connect with Top Player Freelancers who have a proven record
						</div>

						<div className='title'>
							<AiOutlineCheckCircle className='title-tick' />
							Get taylor made matches that solves your problems
						</div>

						<div className='title'>
							<AiOutlineCheckCircle className='title-tick' />
							Let Our Team Manage problems and help you increase sales
						</div>

						<button>Explore Fiver Business</button>
					</div>
					<div className='item'>
						<img src='./assets/person/1.jpg' alt='mimi tu' />
					</div>
				</div>
			</div>

			{/* second slider. */}
			<Slide slidesToShow={4} arrowsScroll={4}>
				{Projects.map(card => (
					<ProjectCard key={card.id} item={card} />
				))}
			</Slide>
		</div>
	)
}

export default Home
