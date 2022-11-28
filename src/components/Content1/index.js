import React from 'react';
import "./style.css"
import {Carousel} from 'react-bootstrap'
import img1 from '../../imgs/doughnuts-1868573_960_720.jpg'

const Content1 = () => {
    return(
        <div>

          <div className="myCarousel m-3">
          <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Product A</h3>
      <p>Product Product Product Product Product Product Product Product Product</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
      className="d-block w-100"
      src={img1}
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Product B</h3>
      <p>Product Product Product Product Product Product Product Product Product</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Product C</h3>
      <p>Product Product Product Product Product Product Product Product Product</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          </div>

        </div>

    )
}

export default Content1;