import { googleTagManager, dataLayer } from "../src/scripts";
import {
  cd2_Country,
} from "../src/constants";
import { expect } from "chai";

describe("scripts", () => {
  it("should have a gtm script", () => {
    const gtm = googleTagManager({ id: 1234 });

    expect(gtm.indexOf(1234)).to.not.equal(-1);
  });

  it("should have a dataLayer script", () => {
    const dl = dataLayer({
      [cd2_Country]: "USA"
    });

    expect(dl.indexOf("{\"cd2_Country\":\"USA\"}")).to.not.equal(-1);
  });
});
