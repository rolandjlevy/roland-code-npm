const { utils } = require("roland-code-npm");

// health check
console.log(utils.healthCheck.message);

// convert object's strings to toUpperCase
const { convertStringValuesRecursively } = utils.string;

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

const rsult = convertStringValuesRecursively({
  obj,
  transformFn: "toUpperCase",
});

console.log("convertStringValuesRecursively > test result:", rsult);
