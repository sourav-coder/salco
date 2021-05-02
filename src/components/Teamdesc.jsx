import React from "react";

export default function Teamdesc(props) {
  return (
    <div className="teamdesc">
      <div className="row">
        <div className="col-md-6">
          <img src={props.img} alt="" />
        </div>
        <div className="col-md-6">
          <p>
              <small>Hello I am David</small><br/>
              
            We are pleased to introduce ourselves as one of the leading
            formulation and bulk drug company in developing & marketing of API
            in Domestic & Export . At Noble Life Sciences we believe in
            innovation. We have the team to provide R&D related assistance for
            developing API & Intermediate, Product scale up for the improvement
            in yield and quality along with marketing support .
            <br/>
            <strong>David <br/>Marketing Head </strong>
            <br/>
          </p>
        </div>
      </div>
    </div>
  );
}
