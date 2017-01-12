import React from "react";
import { dataLayer } from "../scripts";

export default function DataLayer(props) {
  return (
    <script dangerouslySetInnerHTML={{ __html: dataLayer(props) }} />
  );
}
