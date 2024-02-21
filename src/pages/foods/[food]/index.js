import { useParams } from "next/navigation";
import React from "react";

const index = () => {
  const useParam = useParams();
  console.log(useParam);
  return (
    <div>
      {useParam && useParam.food !== null && <div>{useParam.food}</div>}
    </div>
  );
};

export default index;
