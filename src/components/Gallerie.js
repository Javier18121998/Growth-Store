import { Component } from "react";
import img1 from './../imagesLR/uno.jfif';
import img2 from './../imagesLR/dos.jfif';
import img3 from './../imagesLR/tres.jfif';
import img4 from './../imagesLR/cuatro.jfif';
import img5 from './../imagesLR/cinco.jfif'
import img6 from './../imagesLR/seis.jfif'
import img7 from './../imagesLR/siete.jfif'
import img8 from './../imagesLR/ocho.jfif'
import img9 from './../imagesLR/nueve.jfif'
import img10 from './../imagesLR/diez.jfif'
import img11 from './../imagesLR/once.jfif'
import img12 from './../imagesLR/doce.jfif'
import img13 from './../imagesLR/trece.jfif'
import img14 from './../imagesLR/catorce.jfif'
import img15 from './../imagesLR/quince.jfif'
import img16 from './../imagesLR/dieciseis.jfif'
const styles ={
    main:{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridRowGap: '10px',
        gridColumnGap: '7.5px',
        padding: '1.8rem 2rem',
        position: 'relative'
    },
    img: {
        width: '100%',
        height: '100%'
    },
    title: {
        position: 'absolute',
        color: '#FFF',
        top: '130px',
        left: '125px',
        fontSize: '7rem'
    }
}
class Gallerie extends Component{
    render(){
        return(
            <main style={styles.main}>
               <img src={img1} style={styles.img}></img> 
               <img src={img2} style={styles.img}></img> 
               <img src={img3} style={styles.img}></img> 
               <img src={img4} style={styles.img}></img> 
               <img src={img5} style={styles.img}></img>
               <img src={img6} style={styles.img}></img> 
               <img src={img7} style={styles.img}></img> 
               <img src={img8} style={styles.img}></img> 
               <img src={img9} style={styles.img}></img> 
               <img src={img10} style={styles.img}></img> 
               <img src={img11} style={styles.img}></img> 
               <img src={img12} style={styles.img}></img> 
               <img src={img13} style={styles.img}></img> 
               <img src={img14} style={styles.img}></img> 
               <img src={img15} style={styles.img}></img>
               <img src={img16} style={styles.img}></img>
               <h1 style={styles.title}>AstonZtore!</h1>
            </main>
        )
    }
}
export default Gallerie;