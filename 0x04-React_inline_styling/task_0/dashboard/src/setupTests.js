// setupTests.js
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { TextEncoder, TextDecoder } from 'text-encoding';

configure({ adapter: new Adapter() });

// Make TextEncoder and TextDecoder globally available for tests
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;