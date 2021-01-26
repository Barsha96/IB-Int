import body_image from '../../img/undraw_medicine_b1ol.png';
import styled from 'styled-components';
import './home.css';
import React from 'react';


const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.filled ? "#50aeb0" : "white"};
  color: ${props => props.filled ? "white" : "#50aeb0"};
  border: 2px solid #50aeb0;
  @media (min-width: 768px){
        padding: 10px 20px !important;
    }

    &:hover {
        color: ${props => props.filled ? "white" : "#50aeb0"};
    }
    
    &:focus {
    outline: none;
  }
`;

const Body = ({switchMode}) =>
{  
    return (
        <div>
            <div className="container banner-section mt-5 pt-md-5">
                <div className="darkmode">
                    <input type="checkbox" id="toggle" onClick={switchMode}/>
                    <label htmlFor="toggle" className="mode">Dark Mode</label>
                </div>
                <div className="row">
                    <div className="col-md-6 order-md-12">
                        <div className="body-img">
                            <img className="img-fluid" src={body_image} alt="body"/>
                        </div>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <div className="banner-content">
                            <h2 className="main-title">OPTONOME</h2>
                            <p className="desc-text mode">Communication made easy everywhere.</p>
                            <h4 className="sub-text mode">Start for Free</h4>
                                <div className="buttons mt-4">
                                    <Button className="btn" filled>Get Started</Button>
                                    <Button className="btn">Sign In</Button>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;