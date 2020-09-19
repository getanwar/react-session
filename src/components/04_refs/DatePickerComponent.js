import React from "react";
import useScript from "../../hooks/useScript";

function DatePickerComponent(props, ref) {
  useScript("https://code.jquery.com/jquery-3.5.1.min.js");
  useScript(
    "https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js"
  );

  const handleChange = (e) => {
    console.log(window.$("input").val());
  };

  return (
    <>
      <label>My Datepicker</label> <br />
      <input ref={ref} type="text" onChange={handleChange} />
    </>
  );
}

export default React.forwardRef(DatePickerComponent);
