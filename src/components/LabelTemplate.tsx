import Barcode from "react-barcode";
import { LabelData } from "../App";
// import logo from "../assets/sv-logo.jpg";
import React from "react";

interface Props {
  labelData: LabelData;
}

const LabelTemplate = React.forwardRef<HTMLDivElement, Props>(
  ({ labelData }: Props, ref) => {
    let barcodeData = "";

    if (labelData) barcodeData = `${labelData.swsp}${labelData?.price}`;

    return (
      <>
        {/* <style type="text/css" media="print">
          {
            "\
            @page { size: 150mm 50mm;  }\
            "
          }
        </style> */}
        <div
          className="ms-2 mt-0"
          // style={{
          //   maxWidth: "fit-content",
          // }}
          ref={ref}
        >
          <div className="text-center mt-0 mb-0">
            {/* <img className="img img-responsive" src={logo} /> */}
            <h3>Shri Vasavi</h3>
          </div>

          <div className="d-flex justify-content-between">
            <p className="fw-bold mb-0">Modal: {labelData?.modal}</p>
            <p className="mb-0"> Code: {labelData?.code}</p>
          </div>

          <div className="text-center mt-0 mb-0">
            <Barcode value={barcodeData} margin={0} height={40} fontSize={15} />
          </div>

          <p className="fw-bold mb-0">SWSP: {labelData?.swsp}</p>
          <p className="text-center">
            <span className="fw-bold mb-0">Price:</span>{" "}
            <span className="fs-3 fw-bold mb-0">₹{labelData?.price}</span>
          </p>
        </div>
      </>
    );
  }
);

export default LabelTemplate;
