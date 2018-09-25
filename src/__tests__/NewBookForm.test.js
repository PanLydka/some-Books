import React from "react";
import { shallow } from "enzyme";

import NewBookForm from "../components/NewBookForm";

it("renders without crashing", () => {
  shallow(<NewBookForm />);
});
