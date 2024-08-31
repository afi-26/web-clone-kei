import React from 'react';
import groupSvg from '../gruop.svg';
import './group.css';

const Group = () => {
    return (
        <div className="group-container">
            <div className="group-content">
                <h1 className="group-title">Automatically Trade<br />More than 200+ Assets</h1>
                <p className="group-description">
                    Select the assets you want to accumulate and <br></br>grow your portfolio regardless of the market <br />conditions 24hrs a day.
                </p>
            </div>
            <img src={groupSvg} alt="Group" className="group-image" />
        </div>
    );
};

export default Group;
