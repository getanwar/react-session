import React, { useEffect } from "react";
import { Datepicker } from "vanillajs-datepicker";
import DatePickerComponent from "./DatePickerComponent";

import "vanillajs-datepicker/dist/css/datepicker.css";
import useScript from "../../hooks/useScript";

function App(props) {
  const datePickerRef = React.useRef();
  useScript("https://code.jquery.com/jquery-3.5.1.min.js");

  useEffect(() => {
    const elem = datePickerRef.current;
    if (elem) {
      const rangepicker = new Datepicker(elem, {
        clearBtn: true,
      });
    }
  }, []); // mounted

  const handleChange = () => {};

  return <DatePickerComponent ref={datePickerRef} />;
}

export default App;
