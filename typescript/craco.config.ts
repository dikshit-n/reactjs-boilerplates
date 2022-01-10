// install
// npm install @craco/craco --save && npm i -D craco-alias

// references
// https://stackoverflow.com/a/63385127/13686747
// https://github.com/facebook/create-react-app/issues/8909#issuecomment-893850135

const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
};

export {};
