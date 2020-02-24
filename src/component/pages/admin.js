import React, { useState } from 'react';

import { Alert } from 'reactstrap';

const Admin = () => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);
    // setTimeout(() => {
    //     setVisible(false);
    // }, 3000);

    return (
        <Alert color="info" isOpen={visible} toggle={onDismiss}>
            You are in the Admin page... In construction...!!!
    </Alert>
    );
}

export default Admin;