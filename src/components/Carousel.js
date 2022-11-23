import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow'
import styled from 'styled-components';
import ReactPlayer from 'react-player';
const styles = {
	main: {
		width: '860px',
		overflow: 'hidden'
	},
	a:{
		display: 'flex',
		justifyContent: 'center'
	},
	sliderShow: {
		width: '825px'
	},
	title: { display: 'flex', justifyContent: 'center'}
}

const Carousel = () => {
	return (
		<main style={styles.main}>
			<Titulo style={styles.title}>Top Recipes</Titulo>
			<Slideshow controles={true} style={styles.sliderShow}>
				<Slide>
					<a href="" style={styles.a}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=nL1v55MUOio' controls playing muted loop/>
					</a>
					<TextoSlide>
						<p>#1 Apples and More</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="" style={styles.a}>
                        <ReactPlayer url= 'https://www.youtube.com/watch?v=tsAFoUyTsrk'controls playing muted loop/>
					</a>
					<TextoSlide>
						<p>#2 Kiwi caramel and More</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="" style={styles.a}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ELIekcnsxtg' controls playing muted loop/>
					</a>
					<TextoSlide background='rgb()'>
						<p>#3 Coco Disbissis</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="" style={styles.a}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=i8Ue93Fh6gQ' controls playing muted loop/>
					</a>
					<TextoSlide>
						<p>#4 Caramel yeth More</p>
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