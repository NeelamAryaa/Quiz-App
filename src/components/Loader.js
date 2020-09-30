import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
    return(
        <Spinner className="spin" animation="border" variant="primary" />
    )
}

export default Loader;