import React, { useLayoutEffect, useRef } from "react";
import styles from "./customCursor.module.scss";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useLayoutEffect(() => {
    if (cursorRef.current) {
      document.addEventListener("mousemove", function (e) {
        var x = e.clientX;
        var y = e.clientY;
        cursorRef.current.style.left = x + "px";
        cursorRef.current.style.top = y + "px";
      });

      document.addEventListener("mousedown", function (e) {
        cursorRef.current.classList.add(styles.cursorMouseDown);
      });

      document.addEventListener("mouseup", function (e) {
        cursorRef.current.classList.remove(styles.cursorMouseDown);
      });
    }
  }, []);

  return (
    <div ref={cursorRef} className={`${styles.cursor} ${styles.cursorAfter}`} />
  );
};

export default CustomCursor;
