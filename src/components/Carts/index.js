import React from 'react';
import {CardGroup,Card} from 'react-bootstrap'
import img4 from '../../imgs/WebHyber.jpg'
import "./style.css"

const Carts = () => {
    return(
    <div>
<CardGroup className="m-5">
  <Card>
    <Card.Img variant="top" src={img4} />
    <Card.Body>
      <Card.Title>Product A</Card.Title>
      <Card.Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta quam perferendis voluptatum possimus deserunt quae voluptatem. Facilis explicabo accusantium at odit deserunt ipsum ullam quas! Animi veritatis eveniet sunt.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img4} />
    <Card.Body>
      <Card.Title>Product B</Card.Title>
      <Card.Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta quam perferendis voluptatum possimus deserunt quae voluptatem. Facilis explicabo accusantium at odit deserunt ipsum ullam quas! Animi veritatis eveniet sunt.
{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={img4} />
    <Card.Body>
      <Card.Title>Product C</Card.Title>
      <Card.Text>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos dicta quam perferendis voluptatum possimus deserunt quae voluptatem. Facilis explicabo accusantium at odit deserunt ipsum ullam quas! Animi veritatis eveniet sunt.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>

</div>

    )
}

export default Carts;