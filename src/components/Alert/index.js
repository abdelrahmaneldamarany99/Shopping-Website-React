import './style.css'
import Alert from 'react-bootstrap/Alert';

function AdditionalContentExample() {
  return (
    <Alert variant="primary" className='alert-one'>
      <Alert.Heading>Well done!</Alert.Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, ex omnis illum ratione expedita quos, dolor consequuntur doloremque optio reiciendis, dolores corporis atque obcaecati? Aspernatur maxime atque ea fugit. Debitis.
      </p>
      <hr />
      <p className="mb-0">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, tenetur. Optio odit quibusdam qui enim officia rem eum tenetur eaque repudiandae voluptates in quo quisquam fugiat, possimus, molestiae vitae. Soluta!
      </p>
    </Alert>
  );
}

export default AdditionalContentExample;