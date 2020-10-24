import convert from "xml-js";

const removeJsonTextAttribute = (value, parentElement) => {
  try {
    var keyNo = Object.keys(parentElement._parent).length;
    var keyName = Object.keys(parentElement._parent)[keyNo - 1];
    parentElement._parent[keyName] = value;
  } catch (e) {
    console.error(e);
  }
};

const convertJSON = (xmlDatas) => {
  return JSON.parse(
    convert.xml2json(xmlDatas.data, {
      compact: true,
      spaces: 4,
      textFn: removeJsonTextAttribute,
    })
  );
};

export default convertJSON;
