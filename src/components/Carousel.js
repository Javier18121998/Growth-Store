import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import img1 from './../imagesLR/frutas1.jpg'
import img2 from './../imagesLR/frutas2.jfif'
const styles = {
	main: {
		width: '875px',
		overflow: 'hidden',
		zIndex: '0'
	},
	a:{
		display: 'flex',
		justifyContent: 'center'
	},
	sliderShow: {
		width: '825px',
		zIndex: '0'
	},
	title: { display: 'flex', justifyContent: 'center', zIndex: '0'},
	img: {height: '360px', width: 'auto'}
}

const Carousel = () => {
	return (
		<main style={styles.main}>
			<Titulo style={styles.title}>Top Recipes</Titulo>
			<Slideshow controles={true} style={styles.sliderShow}>
				<Slide>
					<a style={styles.a}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=nL1v55MUOio' controls playing muted loop/>
					</a>
					<TextoSlide>
						<p>Apples</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <img src={img1} style={styles.img}/>
					</a>
					<TextoSlide>
						<p>Products</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <ReactPlayer url= 'https://www.youtube.com/watch?v=Lb2jZacYlHU'controls volume={0.45} loop/>
					</a>
					<TextoSlide>
						<p>Puebla grape farmers</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <ReactPlayer url= 'https://www.youtube.com/watch?v=tsAFoUyTsrk'controls volume={0.35} loop/>
					</a>
					<TextoSlide>
						<p>Blackberries and Strawberries</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <img src={img2} style={styles.img}/>
					</a>
					<TextoSlide>
						<p>Products</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ELIekcnsxtg' controls volume={0.35} loop/>
					</a>
					<TextoSlide background='rgb()'>
						<p>Pineapple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=i8Ue93Fh6gQ' controls volume={0.35} loop/>
					</a>
					<TextoSlide>
						<p>Kiwi & Peach</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</main>
	);
}

const Titulo = styled.p`
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
`;
 
export default Carousel;