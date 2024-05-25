const constants = {
  VALID_EMAIL_REGEX:
    /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const healthCheck = () => console.log("healthCheck message: hello world!");

// general utils
const utils = {
  convertCamelCaseToWords(camelCaseWord = "") {
    if (!camelCaseWord) {
      return "";
    }
    const words = camelCaseWord?.replace(/([A-Z])/g, " $1");
    return words.charAt(0).toUpperCase() + words.slice(1);
  },
  convertStringValues({ entity: obj, transformFn, exclusions = [] }) {
    const entity = utils.deepClone(obj);
    if (!transformFn) throw new Error("No transform function provided");
    if (
      typeof entity === "string" &&
      !entity.match(constants.VALID_EMAIL_REGEX)
    ) {
      return transformFn(entity.trim());
    }
    if (Array.isArray(entity)) {
      return entity.map((item) =>
        utils.convertStringValues({ entity: item, transformFn, exclusions })
      );
    }
    if (typeof entity === "object") {
      Object.keys(entity).forEach((key) => {
        if (!exclusions.includes(key)) {
          entity[key] = utils.convertStringValues({
            entity: entity[key],
            transformFn,
            exclusions,
          });
        }
      });
      return entity;
    }
    return entity;
  },
  deepClone(entity) {
    if (entity === null || typeof entity !== "object") {
      return entity;
    }
    if (Array.isArray(entity)) {
      return entity.map((item) => utils.deepClone(item));
    }
    return Object.entries(entity).reduce((acc, [key, value]) => {
      acc[key] = utils.deepClone(value);
      return acc;
    }, {});
  },
  // example: find / replace {email} in the string 'Additional details for {email}'
  dynamicFindAndReplace({ str, find, replace }) {
    const regexified = find.replace(/[{}]/g, "\\$&");
    return str.replace(new RegExp(regexified, "i"), replace);
  },
  getRandomDefaultPassword() {
    return `${
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
    }`;
  },
  getPathWithoutQueryString({ url }) {
    if (!url || !url?.length) return "";
    const matches = url.match(/^[^?]*/);
    return matches ? matches[0] : url;
  },
  isRelativePath(path) {
    return !/^https?:\/\//.test(path);
  },
};

module.exports = {
  constants,
  healthCheck,
  utils,
};
