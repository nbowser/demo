import React, { Component } from "react";
import { Link } from "react-router-dom";
// import DeleteBtn from "../DeleteBtn";
import { Col, Row, Container } from "../Grid";
// import { List, ListItem } from "../List";
import { Input, TextArea, FormBtn } from "../Form";
import "./Detail.css";



const Nav = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brand" href="#">Event Assistant</span>
    <span className="text-white"></span>
    <Link to="/home">Home</Link>
    <Link to="/canvas">Floor Plan</Link>
    <Link to="/auth/logout">Log out</Link>
    {/* <button onClick = {props.handleLogout}>Log Out</button>  */}
  </nav>
);

// const Detail = () => (
//   <div>
//     <Nav />
//     <h1>Details</h1>
//     <p>Form for event data:  Most likely data fields
//     </p>
//     <div>
//     <Link to="/main">Main</Link>
//     </div>
//     <div>
//     <Link to="/login">Logout</Link>
//     </div>
//   </div>
// );

class Detail extends Component {
   
  state = {
    detailsArray: [],
    venue: "",
    streetOne: "",
    streetTwo: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    guestCount: "",
    schedule: "",
    catering: "",
    entertainment: "",
    Notes: ""
  };

  handleInputChange = event => {
    console.log(event);
    let {name, value} = event.target;

    this.setState ({
      [name]: value
    });

  };


  render() {
    return(
      
      <div>
        <Nav />
      <Container fluid>
      
        <Row>
        <Col size="md-6">
            <h1>Event Details</h1>
            <form>
              <Input
                value={this.state.venue}
                onChange={this.handleInputChange}
                name="venue"
                placeholder="Venue"
              />
              <div className="address">
              <Input
                value={this.state.streetOne}
                onChange={this.handleInputChange}
                name="streetOne"
                placeholder="Street"
              />
              <Input
                value={this.state.streetTwo}
                onChange={this.handleInputChange}
                name="streetTwo"
                placeholder="Street"
              />  
              <Input
                value={this.state.city}
                onChange={this.handleInputChange}
                name="city"
                placeholder="City"
              />
              <Input
                value={this.state.state}
                onChange={this.handleInputChange}
                name="state"
                placeholder="State"
              />
              <Input
                value={this.state.zip}
                onChange={this.handleInputChange}
                name="zip"
                placeholder="Zip"
              />
               <Input
                value={this.state.phone}
                onChange={this.handleInputChange}
                name="phone"
                placeholder="Phone"
              />
              </div>
              <Input
                value={this.state.guestCount}
                onChange={this.handleInputChange}
                name="guestCount"
                placeholder="Guest Count"
              />
              <Input
                value={this.state.schedule}
                onChange={this.handleInputChange}
                name="schedule"
                placeholder="Schedule"
              />
              <Input
                value={this.state.catering}
                onChange={this.handleInputChange}
                name="catering"
                placeholder="Catering"
              />
              <Input
                value={this.state.entertainment}
                onChange={this.handleInputChange}
                name="entertainment"
                placeholder="Entertainment"
              />
              <TextArea
                value={this.state.notes}
                onChange={this.handleInputChange}
                name="notes"
                placeholder="Notes"
              />
              <FormBtn
                disable={!(this.state.eventName && this.state.eventDate)}
                onClick={this.handleFormSubmit}
              >
                Save Event Info
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <h1>Outline</h1>
            <h5>Venue:</h5>
            Really Awesome Hotel
            <h5>Address:</h5>
            10100 Dream Tree Boulevard
            Orlando, FL
            32836
            <h5>Phone:</h5>
            5553137777            
            <h5>Guest Count:</h5>
            50
            <h5>Schedule:</h5>
            starts: 12:00n (8hrs)
            <h5>Catering:</h5>
            Taco Taco Taco
            <h5>Entertainment:</h5>
            Chumbawamba The Cover Band
            <h5>Notes:</h5>
            Have technicians set room for band at 6:00am.
            Have hotel staff set the room at 9:00am.
            Taco Taco Taco staff in at 10:00am.
            Band soundcheck at 10:30am.
            Food arrives at 11:00am and remain heated.  Set food out at 11:45am
            Band goes on at 2:00pm.  Intermission around 4:00pm.  Band back on around 5:30pm.
            Technician plays background music during intermission.
            </Col>
          </Row>
          </Container>
          </div>
          
          );
          }
          }

export default Detail;
