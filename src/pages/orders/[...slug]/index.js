import { useParams } from "next/navigation";
import React from "react";
import OrderData from "../_components/orderData";
const index = (slug) => {
  const params = useParams();
  return (
    <div>
      <OrderData />
    </div>
  );
};

export default index;
