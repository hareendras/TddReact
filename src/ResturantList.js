import React from "react";
import { Collection, CollectionItem } from "react-materialize";

const ResturantList = ({ restuarants }) => {
  return (
    <Collection hearder="Restuarants">
      {restuarants.length === 0 ? (
        <CollectionItem>Non added yet</CollectionItem>
      ) : (
        restuarants.map(restuarantName => (
          <CollectionItem key={restuarantName}>{restuarantName}</CollectionItem>
        ))
      )}
    </Collection>
  );
};

export default ResturantList;
