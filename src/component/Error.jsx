import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function Error(){
   
        const error = useRouteError()
        return(
            <>
            <h2>error</h2>
            <p>{error.message}</p>
            <Link to="/">Back to home page</Link>
            </>
        )

}
