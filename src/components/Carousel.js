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
                        <ReactPlayer url='https://www.youtube.com/watch?v=nL1v55MUOio' playing muted loop/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="" style={styles.a}>
                        <ReactPlayer url= 'https://www.youtube.com/watch?v=tsAFoUyTsrk' playing muted loop/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="" style={styles.a}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=ELIekcnsxtg' playing muted loop/>
					</a>
					<TextoSlide background='rgb()'>
						<p>15% descuento en productos Apple</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="" style={styles.a}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=i8Ue93Fh6gQ' playing muted loop/>
					</a>
					<TextoSlide>
						<p>15% descuento en productos Apple</p>
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