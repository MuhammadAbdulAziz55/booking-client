import React, { useState } from "react";
import { PulseLoader } from "react-spinners";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#6f0041",
  alignItems: "center",
  justifyContent: "center",
  // left: "50%",
  // position: "absolute",
  textAlign: "center",
  // top: "50%",
};
const Spinner = () => {
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <PulseLoader
        color="#6f0041"
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Spinner;
