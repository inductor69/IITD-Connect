import React , {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom"

export default function ErrorPage(props) {

    return (
        <div>
            <h3>Error code {props.statusCode} : {props.statusText}</h3>
        </div>
    )
}
