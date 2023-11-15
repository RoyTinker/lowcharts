module.exports = {
  "*": "npm run lint:prettier",
  "*.ts{,x}": () => "npm run build:tsc",
  "*.{j,t}s{,x}": ["npm run lint:eslint", () => "npm run test"],
};
