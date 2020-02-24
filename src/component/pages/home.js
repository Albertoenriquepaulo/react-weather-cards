import React from 'react';
import Bbk_img from '../../assets/bbkweather.png';

const Home = () => {
    console.log("Home");
    return (
        // <div className="container">
        //     <img src={Bbk_img} alt="" width="80%" />
        // </div>
        <div className="he-100">
            <div className="container he-100">
                <div className="row justify-content-center he-100">
                    <div className="col-sm-8 align-self-center text-center">
                        <div className="card shadow">
                            <div className="card-body">
                                <img src={Bbk_img} alt="" width="80%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;