const { stringUtils, healthCheck } = require("roland-code-npm");

// health check
healthCheck();

// convert object's strings to toUpperCase
const { convertStringValuesRecursively, convertCamelCaseToWords } = stringUtils;

// mock data
const obj = {
  name: "roland levy",
  interests: ["meditation", "coding", "art"],
  address: "37 Wyndale Road, Leicester, LE23WS",
  family: {
    diane: {
      relationship: "auntie",
      age: 78,
      email: "dianejardel@gmail.com",
      interests: ["veggie food", "travel", "family"],
    },
  },
};

const convertedToUpperCase = convertStringValuesRecursively({
  obj,
  transformFn: "toUpperCase",
});

console.log("convertStringValuesRecursively > result:", convertedToUpperCase);

const convertedCamelCaseToWords = convertCamelCaseToWords(
  "thisIsACamelCaseWord"
);

console.log("convertedCamelCaseToWords > result:", convertedCamelCaseToWords);
