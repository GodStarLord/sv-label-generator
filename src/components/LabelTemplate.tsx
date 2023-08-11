import Barcode from "react-barcode";
import { LabelData } from "../App";
import logo from "../assets/sample-text.png";
import React from "react";

interface Props {
  labelData: LabelData | null;
}

const LabelTemplate = React.forwardRef<HTMLDivElement, Props>(
  ({ labelData }: Props, ref) => {
    let barcodeData = "";

    if (labelData) barcodeData = `Price: ${labelData?.price}`;

    return (
      <div ref={ref}>
        <div className="container-sm" style={{ maxWidth: "min-content" }}>
          <div className="text-center">
            <img className="img img-responsive" src={logo} />
          </div>

          <div className="d-flex justify-content-between">
            <p className="fw-bold">Text: {labelData?.text}</p>
            <p>Code 1: {labelData?.code1}</p>
          </div>

          <Barcode value={barcodeData} />

          <p className="fw-bold">Code 2: {labelData?.code2}</p>
          <p>
            Price: <span className="fs-3 fw-bold">{labelData?.price}</span>
          </p>
        </div>
      </div>
    );
  }
);

export default LabelTemplate;
