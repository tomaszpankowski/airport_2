import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import FlightsS1 from "../components/flights-s1";
import FlightsS2 from "../components/flights-s2";
import FlightsS3 from "../components/flights-s3";
import FlightsS4 from "../components/flights-s4";

class Flights extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <FlightsS1/>
                <FlightsS2/>
                <FlightsS3/>
                <FlightsS4/>
            </Container>    
        );
    }
}

export default Flights;