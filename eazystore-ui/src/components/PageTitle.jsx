import React from "react";

export default function PageTitle({ title }) {
  console.log("PageTitle component rendered with title:", title);
  return <h1 className="page-title">{title}</h1>;
}
