const { Namespace } = require("rdflib")

let data_prefix = "http://ak5u16.github.io/BICS/data/"
let schema_prefix = "http://ak5u16.github.io/BICS/schema/survey/"
let rdf_prefix = "http://www.w3.org/1999/02/22-rdf-syntax-ns#"
let qb_prefix = "http://purl.org/linked-data/cube#"

module.exports = {
    DATA: Namespace(data_prefix),
    SCHEMA: Namespace(schema_prefix),
    RDF: Namespace(rdf_prefix),
    QB: Namespace(qb_prefix),
    data_prefix,
    schema_prefix,
    rdf_prefix
}