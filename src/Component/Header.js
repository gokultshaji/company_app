import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>
        <Navbar className='App-header'>
    <Container>
     
   
                < img
                  alt=""
                  src="https://i.postimg.cc/P5mqFtnh/png-transparent-laborer-employment-agency-job-employment-agency-service-logo-employment-removebg-pre.png"
                  width="150"
                  height="120"
                  className="d-inline-block align-top "
                  style={{marginLeft:'50px'}}
                />{' '}
               <div >

                 <Link to={'/'} style={{textDecoration:'none'}}>
                 <p style={{ marginLeft: '50px' }}><span style={{color:'red'}}>W</span>orkforce <span style={{color:'red'}}>M</span>anager</p></Link>
                

                 </div>
              
            
    </Container>
  </Navbar>
  </div>
  )
}

export default Header