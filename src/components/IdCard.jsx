import React from "react";

function IdCard({lastName, firstName, gender, height, birth, picture}) {

    console.log(birth)
    return (
        <div className="container">
            <div className="cardimage">
                <img src={picture} alt="profile" />
            </div>
           
            <div className="info">
                <div>
                     <strong>First Name: </strong>
                {firstName}
                </div>
            <div>
                <strong>Last Name: </strong>
                {lastName}
            </div>
            <div>
                <strong>Gender: </strong>
                {gender}
            </div>
            <div>
                <strong>Height: </strong>
                {height}m
            </div>
            <div>
                <strong>Birth: </strong>
                {birth.toDateString()}
            </div>
            </div>
        </div>
      );
    }
     
    export default IdCard;
