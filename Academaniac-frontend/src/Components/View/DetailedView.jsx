import React from "react";

const DetailedView = ({ result }) => {
  return (
    <div>
      <h2>{result.name}</h2>
      <p>Country: {result.country}</p>
      <p>Domains: {result.domains.join(", ")}</p>
      <p>Web Pages: {result.web_pages.join(", ")}</p>
    </div>
  );
};

export default DetailedView;
