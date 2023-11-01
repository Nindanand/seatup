import React from "react";

export const PriceDisplay = ({value}) => {
  const { format } = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  });
  return <React.Fragment>{format(value)}</React.Fragment>;
};