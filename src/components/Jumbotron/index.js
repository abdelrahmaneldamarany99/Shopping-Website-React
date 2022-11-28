import React from 'react';
import {Button} from 'react-bootstrap'
import './style.css'



const MyJumbotron = () => {
    return(
      
        <div className='MyJumbotronStyle'>
  <h1>Our Products</h1>
  <p>
  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae quisquam architecto quidem molestiae, recusandae magni fuga assumenda est deleniti voluptas esse rerum dignissimos error et. Reprehenderit quos harum excepturi commodi!
  </p>
  <p>
    <Button variant="primary">Product</Button>
  </p>
        </div>

    )
}

export default MyJumbotron;