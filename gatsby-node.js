const path = require("node:path");
const experiments = require("./src/data/experiments.json");

exports.createPages = ({ actions }) => {
  for (const experiment of experiments) {
    actions.createPage({
      path: "/versuche/" + experiment.slug + "/",
      component: path.resolve("./src/templates/experiment.jsx"),
      context: { experiment },
    });
  }
};
