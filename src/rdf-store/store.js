import * as $rdf from "rdflib";
import { DATA } from "./data";

const store = $rdf.graph();
let doc = $rdf.sym("http://ak5u16.github.io/BICS/data/");
$rdf.parse(DATA, store, doc.uri, "text/turtle");

export default store;
