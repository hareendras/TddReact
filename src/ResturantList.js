import React from "react";

const ResturantList = ({ restuarants }) => {
  return (
    <ul>
      {restuarants.map(restuarantName => (
        <li key={restuarantName}>{restuarantName}</li>
      ))}
    </ul>
  );
};

export default ResturantList;
