import React from "react";
import mainLogo from '../../icons/logo.png';

export default function apartmentCard(props) {

    return (
        <div id = 'flex-item'>
            <h3>{props.apartment.name}</h3>
            <h4>{props.apartment.address}</h4>
            <h5>{props.apartment.rating}</h5>
        </div>
    );
}