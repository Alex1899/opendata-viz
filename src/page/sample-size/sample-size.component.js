import React from "react";
import DatasetViz from "../../components/dataset-viz/dataset-viz.component"

const SampleSize = () => {
  const datasetName = "sampleSize1"
  const dimensionType = "WorkforceSize"
  return (
    <div className="sample-size">
      <DatasetViz datasetName={datasetName} dimensionType={dimensionType}/>
    </div>
  )
};

export default React.memo(SampleSize);
