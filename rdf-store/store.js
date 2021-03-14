const $rdf = require("rdflib");
const { DATA } = require("./data");

const store = $rdf.graph();
let doc = $rdf.sym("http://ak5u16.github.io/BICS/data/");
$rdf.parse(DATA, store, doc.uri, "text/turtle");

module.exports = { store };
