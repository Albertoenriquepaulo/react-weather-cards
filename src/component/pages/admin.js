import React, { useState } from 'react';

import { Alert } from 'reactstrap';

const Admin = () => {
    const [visible, setVisible] = useState(true);

    const onDismiss = () => setVisible(false);

    return (
        <Alert color="danger" isOpen={visible} toggle={onDismiss} size="40px">
            You are in the Admin page... Under construction...!!!
    </Alert>
    );
}

export default Admin;