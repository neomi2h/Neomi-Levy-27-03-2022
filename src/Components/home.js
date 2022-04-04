import React,{ useEffect, useState } from 'react'
import  Card  from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {actions} from '../Redux/Actions/action'
import { connect } from 'react-redux'
import { AiOutlineHeart } from 'react-icons/ai';
import { RiCelsiusLine } from 'react-icons/ri';
import {Link} from 'react-router-dom'
import Autocomplete from 'react-autocomplete'

function mapStateToProps(state) {
    return {
        daysList: state.daysList.daysList,
        city: state.city.city,
        toDay:state.toDay.toDay,
        listCities:state.listCities.listCities,
    };
}

const mapDispatchToProps = (dispatch) => ({
    getDays: (key) => dispatch(actions.getDays(key)),
    getToDay: (key) => dispatch(actions.getToDay(key)),
    getListCity:(nameCity)=>dispatch(actions.getListCity(nameCity)),
    addToFavorite:(favorite)=>dispatch(actions.addToFavorite(favorite)),
    setCity:(city)=>dispatch(actions.setCity(city)),
})

export default connect(mapStateToProps, mapDispatchToProps)(function Home(props) {
    
    const { daysList,city, getDays ,getListCity,toDay,getToDay,addToFavorite,listCities,setCity} = props
    const [label, setLable]=useState('');
    
    
    useEffect(()=>{
        if(label){
          getListCity(label);
        } 
    },[label])

    useEffect(()=>{
        debugger
        if(city){
              getDays(city[0].Key);
              getToDay(city[0].Key);
        } 
        console.log(city)
    },[city])


    function chooseLabel(val){
        setLable(val)
        
    }

    function chooseCity(val) {
        setLable(val);
        let temp=[];
        for(let i=0; i<listCities.length ;i++){
           if(listCities[i].label===val)
              temp=listCities[i];
        }
        setCity(temp)
    }

    function addFavorites(){
       const favorite=
       {Key:city[0].Key,label:city[0].label,WeatherText:toDay[0].WeatherText,Temperature:toDay[0].Temperature}
       addToFavorite(favorite);
       
    }

    return (
        <>
            <Container   >

                  <Row style={{margin:'30px' }}>
                        <Autocomplete 
                            getItemValue={(item) => item.label}
                            items={listCities}
                            renderItem={(item, isHighlighted) =>
                             <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                            {item.label}
                              </div>}
                            
                             value={label}
                             onChange={(e)=>(chooseLabel(e.target.value))}
                             onSelect={(val)=>(chooseCity(val))} />
                  </Row>

                  <Container  > 
                  <Card >
                         <Card.Header> 
                             <Row><Col md={9} xs={1}></Col>
                                  <Col md="auto" xs={4}><Button variant="outline-info" onClick={addFavorites} ><AiOutlineHeart/></Button></Col>
                                  <Col md="auto" xs={7}> <Button variant="outline-info"> <Link  to='/favorites'>My Favorites</Link></Button></Col>
                                 
                            </Row> 
                        </Card.Header>
                         <Card.Body>
                          <Card.Text>
                     <Row >
                          <Col md="auto">
                              <p style={{fontSize:'40px'}}>{city[0].label}</p>
                                  <p style={{fontSize:'30px'}}>{toDay[0].Temperature}<RiCelsiusLine style={{fontSize:'25px'}}/></p>
                                  </Col>
                          <Col></Col>
                    </Row> 
                    <Row>
                        <Col><p style={{fontSize:'70px'}}>{toDay[0].WeatherText} </p></Col></Row>        

                    <Row>
                    {daysList.map((item) => <Col>< Item key={item.id} Date={item.Date} MiniTemp={item.MiniTemp} MaxTemp={item.MaxTemp}  Day={item.Day}></Item></Col>)}
                    </Row>
               
                          </Card.Text>
                         </Card.Body>
                  </Card>
                  
                   </Container>
                </Container>
        </>
    )
})

class Item extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
            <Card  style={{ width: '10rem' }}>
                  <Card.Body>
                  <Card.Title >{this.props.Date}</Card.Title>
                    <Card.Text>

                         <p style={{fontSize:'17px'}}> {this.props.MiniTemp}-{this.props.MaxTemp}  <RiCelsiusLine style={{fontSize:'13px'}}/></p>
                         
                    </Card.Text>
                </Card.Body>
            </Card>
            </>
        )
    }
}
