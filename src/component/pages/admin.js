import React, { useState } from 'react';

import { Alert } from 'reactstrap';

const Admin = () => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);
    setTimeout(() => {
        setVisible(false);
    }, 3000);

    return (
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
            I am an alert and I can be dismissed!
    </Alert>
    );
}

export default Admin;