const { utils, healthCheck } = require("roland-code-npm");

healthCheck();

const { convertStringValues, convertCamelCaseToWords } = utils;

// mock data
const entity = {
  name: "roland levy",
  status: "married",
  interests: ["meditation", "coding", "art"],
  address: "37 Wyndale Road, Leicester, LE23WS",
  projects: [{ personal: ["diy", "teaching"], work: ["translation"] }],
  family: {
    diane: {
      relationship: "auntie",
      age: 78,
      email: "dianejardel@gmail.com",
      interests: ["veggie food", "travel", "family"],
    },
  },
};

const convertedToUpperCase = convertStringValues({
  entity,
  transformFn: (str) => str.toUpperCase(),
  exclusions: ["interests"],
});

console.log(
  "convertStringValuesRecursively > result:",
  JSON.stringify(convertedToUpperCase, null, 2)
);

const convertedCamelCaseToWords = convertCamelCaseToWords(
  "thisIsACamelCaseWord"
);

console.log("convertedCamelCaseToWords > result:", convertedCamelCaseToWords);
