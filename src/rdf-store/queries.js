import store from "./store";
import ns from "./namespaces";
import colorMap from "./color-map";

const formatString = (value, prefix) => {
  return value.replace(prefix, "");
};

export const getDimensionNames = (dimType, dimToRemove = null) => {
  let arr = store
    .each(null, ns.RDF("type"), ns.SCHEMA(dimType))
    .map((item) => formatString(item.value, ns.data_prefix));

  if (dimToRemove) {
    arr = filterColDimensionNames(arr, dimToRemove);
  }
  return arr;
};

export const filterColDimensionNames = (dimNameArr, dimToRemove) => {
  return dimNameArr.filter((dimName) => dimName !== dimToRemove);
};

export const getDatasetTitleLabel = (datasetName) => {
  let title = store.any(ns.DATA(datasetName), ns.DC("title"), null).value;
  let label = store.any(ns.DATA(datasetName), ns.RDF("label"), null);
  if (!label) {
    label = "";
  } else {
    label = label.value;
  }

  return { title, label };
};

// export const getDataByDimension = (datasetName, dimensionName) => {
//   let data = getDatasetByName(datasetName);
//   data = filterDatasetByDimension(data, dimensionName);

//   return addColorsToDataset(data);
// };

export const getDataForAllDimensions = (datasetName, dimNames) => {
  let data = getDatasetByName(datasetName);
  let allData = dimNames.map((dimensionName) => {
    let dimData = filterDatasetByDimension(data, dimensionName);
    return { data: dimData };
  }).filter(d => d.data.length > 0)
  

  return allData;
};

const getDatasetByName = (datasetName) => {
  let arr = store.each(null, ns.QB("dataSet"), ns.DATA(datasetName));
  let data = arr.map((d) => {
    let dataItem = formatString(d.value, ns.data_prefix);
    let arr = store.each(ns.DATA(dataItem), ns.QB("dimension"), null);


    let industryName = formatString(arr[1].value, ns.data_prefix);

    let industryTitle = store.any(ns.DATA(industryName), ns.DC("title"), null).value;

    let dimensionName = formatString(arr[0].value, ns.data_prefix);
    let dimensionTitle = store.any(ns.DATA(dimensionName), ns.DC("title"), null).value;

    let value = store.any(ns.DATA(dataItem), ns.RDF("value"), null).value;

    if((parseInt(value)< 2)){
      value = parseInt(parseFloat(value) * 100.0)
    }else{
      value = parseInt(value)
    }
      

    let industry = {
      name: industryName,
      title: industryTitle,
      color: colorMap[industryName],
    };
    let dimension = { name: dimensionName, title: dimensionTitle };

    return { industry, dimension, value};
  });

  return data;
};

const filterDatasetByDimension = (dataset, dimensionName) => {
  const data = dataset.filter(
    (d) =>
      d.dimension.name === dimensionName && d.industry.name !== "AllIndustries"
  );
  return data;
};
