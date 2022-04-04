import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { connect } from 'react-redux'
import FavoriteItem from './favoriteItem';


function mapStateToProps(state) {
    return {
        favoritesList: state.favoritesList.favoritesList,
    };
}

const mapDispatchToProps = (dispatch) => ({
   
})

export default connect(mapStateToProps, mapDispatchToProps)(function Favorites(props) {
    
    const { favoritesList} = props
    
    return (
        <>
            <Container >       
                    <Row>
                    {favoritesList.map((item) => <Col>< FavoriteItem Key={item.Key} WeatherText={item.WeatherText} Temperature={item.Temperature}   label={item.label}></FavoriteItem></Col>)}
                    </Row>
             </Container>
        </>
    )
})

