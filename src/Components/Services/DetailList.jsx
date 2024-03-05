import React from "react";

const DetailList = ({ details }) => {
  const detailItems = details.map((detail, index) => (
    <li key={index} style={{ margin: 0,  fontSize: "0.9rem", transform: "translate(10%, -45%)"}}>{detail.trim()}</li>
  ));

  return <ul style={{ margin: 0, padding: 0}}>{detailItems}</ul>;
};

export default DetailList;
