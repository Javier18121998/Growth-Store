import { Component } from "react";
const style = {
    menu: {
        backgroundColor: '#fff',
        position: 'fixed',
        marginTop: 11,
        boxShadow: '1px 5px 5px rgb(0,0,0,0.1)',
        borderRadius: '5px',
        width: '170px',
        left: 10,
        top: 95,
    },
    ul: {
        margin: 0,
        padding: 0,
    },
    li: {
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '23px 20px',
        color: '#000',
        fontWeight: '500',
        height: 'auto',
        fontSize: '0.85rem',
        cursor: 'pointer',
        borderBottom: '1px solid #eee'
    },
}
const Titles = ['Fruit Land', 'Country Vegetables', 'Species Bag']
class MenuScroll extends Component{
    render(){
        return(
            <main 
                style={style.menu}
            >
                <ul style={style.ul}>
                    <li style={style.li}>{Titles[0]}</li>
                    <li style={style.li}>{Titles[1]}</li>
                    <li style={style.li}>{Titles[2]}</li>
                </ul>
            </main>
        )
    }
}
export default MenuScroll;