import React from "react";
import { mount } from "enzyme";
import NewRetuarantForm from "../../src/NewRestuarantForm";
import { wrap } from "module";

describe("NewRestuarantForm", () => {
  describe("clicking the save button", () => {
    it("calls the onSave handler", () => {
      const saveHandler = jest.fn();
      const wrapper = mount(<NewRetuarantForm onSave={saveHandler} />);

      wrapper
        .find("[data-test='newRetuarantName']")
        .simulate("change", { target: { value: "Sushi Place" } });

      wrapper.find("[data-test='saveNewRestuarantButton']").simulate("click");
      expect(saveHandler).toHaveBeenCalledWith("Sushi Place");
    });
  });
});
