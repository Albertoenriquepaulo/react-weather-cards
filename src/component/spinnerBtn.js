import React from "react";

import Loader from "./Loader";

export default function SpinnerBtn({ isLoading, children, ...props }) {
    return (
        <button className="button btn btn-primary w-75" {...props}>
            <div>{isLoading ? <Loader /> : children}</div>
        </button>
    );
}