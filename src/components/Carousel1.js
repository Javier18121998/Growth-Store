import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import img1 from './../imagesLR/frutas1.jpg'
import img2 from './../imagesLR/frutas2.jfif'
import img3 from './../imagesLR/carne1.jfif'
import img4 from './../imagesLR/chesses.jfif'
import img5 from './../imagesLR/liquors.jfif'
const styles = {
	main: {
		width: '875px',
		overflow: 'hidden',
		zIndex: '0',
	},
	a:{
		display: 'flex',
		justifyContent: 'center'
	},
	sliderShow: {
		width: '825px',
		zIndex: '0'
	},
	title: { display: 'flex', justifyContent: 'center', zIndex: '0', fontFamily: 'cursive', padding: '0.75rem 0rem'},
	img: {height: '360px', width: 'auto'}
}

const Carousel1 = () => {
	return (
		<main style={styles.main}>
			<Titulo style={styles.title}>Welcome to our Ztore</Titulo>
			<Slideshow controles={true} style={styles.sliderShow}>
				<Slide>
					<a style={styles.a}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=_XM4FAk0GQ0' controls playing muted loop/>
					</a>
					<TextoSlide>
						<p>Our market store</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <img src={img3} style={styles.img}/>
					</a>
					<TextoSlide>
						<p>Cook this with our Steaks</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <img src={img1} style={styles.img}/>
					</a>
					<TextoSlide>
						<p>Our Fruits</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <img src={img4} style={styles.img}/>
					</a>
					<TextoSlide>
						<p>Delicatesen and Dairy Growths</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <img src={img2} style={styles.img}/>
					</a>
					<TextoSlide>
						<p>more Products</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a style={styles.a}>
                        <img src={img5} style={styles.img}/>
					</a>
					<TextoSlide background='rgb()'>
						<p>Liquors And Wines</p>
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
 
export default Carousel1;