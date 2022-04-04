import React from 'react'
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import {actions} from '../Redux/Actions/action'
import { connect } from 'react-redux'
import { RiCelsiusLine } from 'react-icons/ri';
import {Link} from 'react-router-dom'


function mapStateToProps(state) {
    return {
        favoritesList: state.favoritesList.favoritesList,
    };
}

const mapDispatchToProps = (dispatch) => ({
    deletFavorite: (key) => dispatch(actions.deletFavorite(key)),
     setCity:(city)=>dispatch(actions.setCity(city)),
})

export default connect(mapStateToProps, mapDispatchToProps)(function FavoriteItem(props) {
    
    const { deletFavorite ,setCity} = props
    const {Key,label,Temperature,WeatherText}= props;

    function showCity()
    {
        debugger
        const cityKey={Key:Key,label:label}
        console.log(cityKey)
        setCity(cityKey)
    }

    function deletei(){
        deletFavorite(Key)
    }
    return (
        <>
            <Card  style={{ width: '18rem', marginBottom:'30px' }}>
                  <Card.Body >
                  <Card.Title><Link  to={{ pathname:"/"}} style={{fontSize:'30px'}} ><span onClick={showCity}>{label}</span></Link></Card.Title>
                    <Card.Text style={{fontSize:'20px'}}>
                    <p> {Temperature}
                         <RiCelsiusLine /></p>
                       <p> {WeatherText}</p>
                    </Card.Text>
                    <Button variant="outline-info" onClick={deletei}> Delete</Button>
                </Card.Body>
            </Card>
        </>
    )
})


