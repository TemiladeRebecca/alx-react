import { fromJS } from 'immutable';

// Define a function to access values in an Immutable object
export default function accessImmutableObject(object, array) {
  // Convert the input JavaScript object into an Immutable object
  const mappedObj = fromJS(object);

  // Use the getIn method to access the value at the specified path
  // If the path is not found, return undefined
  return mappedObj.getIn(array, undefined);
}
