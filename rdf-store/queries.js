const { store } = require("./store");
const ns = require("./namespaces");

const formatString = (value, prefix) => {
  return value.replace(prefix, "");
};

module.exports.getDimensionNames = (name) => {
  let arr = store
    .each(null, ns.RDF("type"), ns.SCHEMA(name))
    .map((item) => formatString(item.value, ns.data_prefix));
  return arr;
};

module.exports.getSampleSizeByIndustry = () => {
  let arr = store.each(null, ns.QB("dataSet"),  ns.DATA("sampleSize1"));
  let data = arr.map(d => {
    let dataItem = formatString(d.value, ns.data_prefix)
    let arr = store.each(ns.DATA(dataItem), ns.QB("dimension"), null)

    let industry = formatString(arr[1].value, ns.data_prefix)
    let workforce = formatString(arr[0].value, ns.data_prefix)
    let size = store.any(ns.DATA(dataItem), ns.RDF("value"), null).value
    
    return { industry, workforce, size}
  })
  return data;
};
