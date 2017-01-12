import React from "react";
import { googleTagManager } from "../scripts";

export default function GTM({
  id,
}) {
  return (
    <script dangerouslySetInnerHTML={{ __html: googleTagManager(id) }} />
  );
}

GTM.propTypes = {
  id: React.PropTypes.number.isRequired,
};
