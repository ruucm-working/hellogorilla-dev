import expect from "expect";
import dataContainerReducer from "../reducer";

describe("dataContainerReducer", () => {
  it("returns the initial state", () => {
    expect(dataContainerReducer(undefined, {})).toEqual({
      name: "Sample Name"
    });
  });
});
