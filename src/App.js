import React from "react";
import styles from "./styles.module.css";

const SERVER_ROOT = "https://0f0el.csb.app";

export function f() {
  fetch(`/notifications`)
  .then((data) => data.json())
  .then((json) => {
    console.log('testing');
    console.log(json);
  });
}

export default function App() {
  f();
  return <div>Put your code here</div>;
}
