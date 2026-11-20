const path = require("node:path");
const experiments = require("./src/data/experiments.json");
const stations = require("./src/data/stations.json");

exports.createPages = ({ actions }) => {
  experiments.forEach((experiment, index) => {
    actions.createPage({
      path: "/versuche/" + experiment.slug + "/",
      component: path.resolve("./src/templates/experiment.jsx"),
      context: { experiment },
    });
    const station = stations.find(item => item.slug === experiment.slug);
    if (!station) return;
    const next = experiments[(index + 1) % experiments.length];
    actions.createPage({
      path: "/versuche/" + experiment.slug + "/station/",
      component: path.resolve("./src/templates/station.jsx"),
      context: { experiment, station, next: { slug: next.slug, name: next.name } },
    });
  });
};
