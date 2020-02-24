import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterBootStrap = () => {
  return (
    <MDBFooter color="blue" className="font-small">
      <div className="footer-copyright text-center">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <p> Albertopaulo </p>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterBootStrap;
