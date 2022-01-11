import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import * as reactRedux from "react-redux";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("Header", () => {
  //mocking useDispatch hook
  beforeEach(() => {
    useDispatchMock.mockImplementation(() => () => {});
  });
  afterEach(() => {
    useDispatchMock.mockClear();
  });
  const useDispatchMock = reactRedux.useDispatch;

  test("submit handler gets invoked", () => {
    const jsdomAlert = window.alert; // remember the jsdom alert

    window.alert = () => {};
    const submitHandler = jest
      .fn()
      .mockImplementation((cb) => () => cb({ test: "test" }));
    const wrapper = shallow(
      <Header form="test" submitHandler={submitHandler} />
    );
    const event = { preventDefault: () => {} };
    jest.spyOn(event, "preventDefault");
    wrapper.find("form").simulate("submit", event);
    expect(submitHandler).toHaveBeenCalledTimes(0);
    expect(event.preventDefault).toBeCalled();
    window.alert = jsdomAlert;
  });
});

// import configureStore from 'redux-mock-store' //ES6 modules
// const { configureStore } = require('redux-mock-store') //CommonJS
// import { Provider } from 'react-redux'

// const middlewares = []
// const mockStore = configureStore(middlewares)()

//  <Provider store={mockStore}>
//     < Header />
//   </Provider>
