import React from "react";
import { Provider } from "react-redux";
import enzyme from 'enzyme';
import { shallow, mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import MovieDetail from "./MovieDetail";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

enzyme.configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

jest.mock("../../features/movies/movieSlice", () => () => {
    const MockName = "default-awesome-component-mock";
    return <MockName />;
  });

const mockStore = configureStore([thunk]);
describe("MovieDetail", () => {
  it("render MovieDetail", () => {
    const store = mockStore({});
    const wrapper = mount(
      <Provider store={store}>
        <MovieDetail />
      </Provider>
    );
    expect(wrapper.find());
  });
});
