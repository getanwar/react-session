import { useEffect } from "react";

export default function useScript(url) {
  useEffect(() => {
    const scripts = document.querySelectorAll("script");
    const srcs = [...scripts].map((script) => script.src);
    // const srcs = Array.prototype.map.call(scripts, (script) => script.src);

    if (!srcs.includes(url)) {
      const script = document.createElement("script");
      script.src = url;
      document.querySelector("head").appendChild(script);
    }
  }, [url]);
}
