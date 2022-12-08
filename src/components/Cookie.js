import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';



function Cookie() {

    const [show, setShow] = useState(true);

    return(
    <div className="cookie"><>
    <Alert style={{width: '30vw', position: 'absolute', bottom:'10%', left: '60%', zIndex:'1'}} show={show} variant="success">
      <Alert.Heading>Hinweis</Alert.Heading>
      <p>
        Diese Website verwendet Cookies.
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button onClick={() => setShow(false)} variant="outline-success">
          Ok
        </Button>
      </div>
    </Alert>
  </></div>
    );

}

export default Cookie;