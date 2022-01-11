import { mount } from "enzyme";
import React from "react";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import enzyme from "enzyme";
import Home from "./Home";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import MovieListing from "../MovieListing/MovieListing";

enzyme.configure({ adapter: new Adapter() });

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useDispatch: jest.fn(),
// }));

jest.mock("../MovieListing/MovieListing", () => () => {
  const MockName = "default-awesome-component-mock";
  return <MockName />;
});

const mockStore = configureStore([thunk]);
describe("Home", () => {
  it("render MovieList", () => {
    const store = mockStore({});
    const wrapper = mount(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    expect(wrapper.find(MovieListing));
  });
});

//   describe('Home test',()=>{
//       let reactWrapper:ReactWrapper;

//       beforeEach(()=>{
//           reactWrapper=mount(<Home/>);
//       })
//       it('MovieListing would be rendered',()=>{
//           expect(reactWrapper.find(MovieListing).length.toBe(1))

//       })
//   })
