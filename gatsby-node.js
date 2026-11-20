const path = require("node:path");
const stations = require("./src/data/stations.json");

// Je Station zwei Seiten: Ebene 2 zum Nachlesen, Ebene 3 für die Betreuung am Tisch.
exports.createPages = ({ actions }) => {
  stations.forEach((station, index) => {
    const following = stations[(index + 1) % stations.length];
    const context = { station, next: { slug: following.slug, name: following.name } };
    actions.createPage({
      path: "/experimente/" + station.slug + "/",
      component: path.resolve("./src/templates/experiment.jsx"),
      context,
    });
    actions.createPage({
      path: "/experimente/" + station.slug + "/tutoren/",
      component: path.resolve("./src/templates/tutor.jsx"),
      context,
    });
  });
};
