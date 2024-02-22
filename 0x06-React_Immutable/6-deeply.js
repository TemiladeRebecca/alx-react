import { Map } from 'immutable';

const mergeDeeplyElements = (page1, page2) => {
  const mergedPage = Map(page1).mergeWith((oldVal, newVal) => {
    if (Map.isMap(oldVal) && Map.isMap(newVal)) {
      return oldVal.merge(newVal);
    }
    return newVal !== undefined ? newVal : oldVal;
  }, Map(page2));

  return mergedPage;
};
