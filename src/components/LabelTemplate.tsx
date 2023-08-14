import Barcode from "react-barcode";
import { LabelData } from "../App";
import logo from "../assets/sv-logo.jpg";
import React from "react";

interface Props {
  labelData: LabelData;
}

const LabelTemplate = React.forwardRef<HTMLDivElement, Props>(
  ({ labelData }: Props, ref) => {
    let barcodeData = "";

    if (labelData) barcodeData = `${labelData.swsp}${labelData?.price}`;

    return (
      <div className="ms-2" style={{ maxWidth: "fit-content" }} ref={ref}>
        <div className="text-center">
          <img className="img img-responsive" src={logo} />
        </div>

        <div className="d-flex justify-content-between">
          <p className="fw-bold mb-0">Modal-{labelData?.modal}</p>
          <p className="mb-0"> Code-{labelData?.code}</p>
        </div>

        <Barcode value={barcodeData} />

        <p className="fw-bold mb-0">SWSP: {labelData?.swsp}</p>
        <p className="text-center">
          <span className="fw-bold mb-0">Price:</span>{" "}
          <span className="fs-3 fw-bold mb-0">{labelData?.price}</span>
        </p>
      </div>
    );
  }
);

export default LabelTemplate;
