import { Component } from "react";
import '../effects.css';
const style = {
    menu: {
        backgroundColor: '#fff',
        position: 'fixed',
        boxShadow: '1px 5px 5px rgb(0,0,0,0)',
        borderRadius: '5px',
        width: '170px',
        left: 10,
        top: 86.5,
        overflow: 'auto',
        border: '1px solid #fff',
        zIndex: '1'
    },
    ul: {
        margin: 0,
        padding: 0,
        maxHeight: '195px',
        zIndex: '1'
    },
    li: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '23px 20px',
        fontWeight: '500',
        height: 'auto',
        fontSize: '0.85rem',
        borderBottom: '1px solid #eee',
        textAlign: 'center',
        zIndex: '1'
    },
}
const Titles = ['Fruit Land', 'Country Vegetables', 'Spices Bag']
class MenuScroll extends Component{
    render(){
        return(
            <main 
                style={style.menu}
                className='navigator'
            >
                <ul style={style.ul}>
                    <li style={style.li} className='lI'>{Titles[0]}</li>
                    <li style={style.li} className='lI'>{Titles[1]}</li>
                    <li style={style.li} className='lI'>{Titles[2]}</li>
                </ul>
            </main>
        )
    }
}
export default MenuScroll;