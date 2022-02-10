import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import BookingS1 from "../components/booking-s1";

class Booking extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <BookingS1/>
            </Container>    
        );
    }
}

export default Booking;