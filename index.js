const utils = {
  healthCheck: {
    message: 'hello world'
  },
  string: {
    convertCamelCaseToWords(camelCaseWord = '') {
      if (!camelCaseWord) {
        return '';
      }
      const words = camelCaseWord?.replace(/([A-Z])/g, ' $1');
      return words.charAt(0).toUpperCase() + words.slice(1);
    },
    // example: find / replace {email} in the string 'Additional details for {email}'
    dynamicFindAndReplace({ str, find, replace }) {
      const regexified = find.replace(/[{}]/g, '\\$&');
      return str.replace(new RegExp(regexified, 'i'), replace);
    },
    getRandomDefaultPassword: `1Aa${
      Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2)
    }`,
    getPathWithoutQueryString({ url }) {
      if (!url || !url?.length) return '';
      const matches = url.match(/^[^?]*/);
      return matches ? matches[0] : url;
    },
    // A relative path must not contain a protocol and domain (which would make it an external link).
    isRelativePath(path) {
      return !/^https?:\/\//.test(path);
    },
    convertStringValuesRecursively({
      obj,
      transformFn,
      exclusions = [],
    }) {
      const convertString = (value, key) => {
        if (
          typeof value === 'string' &&
          !exclusions.includes(key) &&
          !value.match(VALID_EMAIL_REGEX)
        ) {
          return value[transformFn]().trim();
        }
        if (Array.isArray(value)) {
          return value.map((val) => convertString(val, key));
        }
        if (typeof value === 'object') {
          return convertStringValuesRecursively({
            obj: value,
            transformFn,
            exclusions,
          });
        }
        return value;
      };
      return Object.fromEntries(
        Object.entries(obj).map(([key, value]) => [key, convertString(value, key)])
      );
    }
  }
}

module.exports = {
  utils
}