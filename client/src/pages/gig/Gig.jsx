import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { AiFillLike } from 'react-icons/ai'
import { AiFillDislike } from 'react-icons/ai'
import Slider from 'infinite-react-carousel'
import './gig.scss'

const Gig = () => {
	return (
		<div className='gig'>
			<div className='container'>
				<div className='left'>
					<span className='breadcrumbs'>Fiverr Graaphics & Design</span>
					<h1>I Will Create AI Generated Images For You</h1>
					<div className='user'>
						<img src='../assets/images/mimi.jpg' alt='' className='pp' />
						<span>John Doe</span>
						<div className='stars'>
							<AiFillStar className='gig-str' />
							<AiFillStar className='gig-str' />
							<AiFillStar className='gig-str' />
							<AiFillStar className='gig-str' />
							<AiFillStar className='gig-str' />
							<span>5</span>
						</div>
					</div>
					<Slider slidesToShow={1} arrowsScroll={1} className='s-image'>
						<img src='../assets/aiimages/1.jpg' alt='' />
						<img src='../assets/aiimages/2.jpg' alt='' />
						<img src='../assets/aiimages/3.jpg' alt='' />
					</Slider>
					<h2>About The Gig.</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
						vitae velit cum cupiditate. Cumque asperiores, incidunt quidem
						delectus excepturi culpa saepe dolore dignissimos doloremque. At
						quisquam reprehenderit in tempore similique! Beatae, eaque officiis
						ea debitis ex iure cumque nemo nobis? Velit libero reprehenderit,
						quisquam tempore minus a officia blanditiis natus accusantium ipsam
						eius numquam eligendi, enim pariatur voluptatum aliquid minima.
						Beatae eaque reprehenderit mollitia cumque harum. Explicabo repellat
						doloremque praesentium est laudantium sit placeat, quaerat minima
						tempore ipsum nihil veniam. Magni deserunt cupiditate odio quis
						doloremque incidunt natus obcaecati consequuntur. Quaerat accusamus
						porro doloribus nostrum ullam dolorem fugit aliquid magni animi
						asperiores molestias dolorum assumenda, hic autem voluptate beatae,
						soluta itaque magnam ipsum debitis enim deserunt placeat modi? Amet,
						aspernatur. Amet molestias cupiditate ad nihil odit quasi provident
						nesciunt dolorem corrupti, perferendis doloribus recusandae in,
						mollitia unde iure fugit fugiat vero nemo? Quia eum ullam autem in
						ipsum.
					</p>

					<div className='seller'>
						<h2>About The Seller</h2>
						<div className='user'>
							<img src='../assets/person/5.jpg' alt='' />
							<div className='info'>
								<span>John Doe</span>
								<div className='stars'>
									<AiFillStar className='gig-str' />
									<AiFillStar className='gig-str' />
									<AiFillStar className='gig-str' />
									<AiFillStar className='gig-str' />
									<AiFillStar className='gig-str' />
									<span>5</span>
								</div>
								<button>Contact Me</button>
							</div>
						</div>
						<div className='box'>
							<div className='items'>
								<div className='item'>
									<span className='title'>From</span>
									<span className='description'>USA</span>
								</div>
								<div className='item'>
									<span className='title'>Member Since</span>
									<span className='description'>Nov 2022</span>
								</div>
								<div className='item'>
									<span className='title'>Avg. Response Time </span>
									<span className='description'>4 hours</span>
								</div>
								<div className='item'>
									<span className='title'>Last Delivery</span>
									<span className='description'>1 day</span>
								</div>
								<div className='item'>
									<span className='title'>Languages</span>
									<span className='description'>English</span>
								</div>
							</div>
							<hr />
							<p>
								Hello Am John I Enjoy Generating Ai Images, I have a Masters in
								Fine Arts from UCLA, So am very profficient in what i do. Am
								very result oriented individual with a keen eye for details.
							</p>
						</div>
					</div>

					<div className='reviews'>
						<h2>Reviews</h2>
						<div className='item'>
							<div className='user'>
								<img src='' alt='' />
								<div className='info'>
									<span>John Doe</span>
									<div className='country'>
										<img src='' alt='' />
										<span>United States</span>
									</div>
								</div>
							</div>
							<div className='stars'>
								<AiFillStar className='gig-str' />
								<AiFillStar className='gig-str' />
								<AiFillStar className='gig-str' />
								<AiFillStar className='gig-str' />
								<AiFillStar className='gig-str' />
								<span>5</span>
							</div>
							<p>Highly recomended !! very helpfull</p>

							<div className='helpful'>
								<span>Helpful ?</span>
								<AiFillLike />
								<span>Yes</span>
								<AiFillDislike />
								<span>No</span>
							</div>
						</div>
						<hr />

						<div className='item'>
							<div className='user'>
								<img src='' alt='' />
								<div className='info'>
									<span>John Doe</span>
									<div className='country'>
										<img src='' alt='' />
										<span>United States</span>
									</div>
								</div>
							</div>
							<div className='stars'>
								<AiFillStar className='gig-str' />
								<AiFillStar className='gig-str' />
								<AiFillStar className='gig-str' />
								<AiFillStar className='gig-str' />
								<AiFillStar className='gig-str' />
								<span>5</span>
							</div>
							<p>Highly recomended !! very helpfull</p>

							<div className='helpful'>
								<span>Helpful ?</span>
								<AiFillLike />
								<span>Yes</span>
								<AiFillDislike />
								<span>No</span>
							</div>
						</div>

						<hr />
					</div>
				</div>
				<div className='right'></div>
			</div>
		</div>
	)
}

export default Gig
