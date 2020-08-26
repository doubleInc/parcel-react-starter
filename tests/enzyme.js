/**
 * Setup and export all the different Enzyme render types
 */
import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;
