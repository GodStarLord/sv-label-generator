import Barcode from "react-barcode";
import { LabelData } from "../App";
import logo from "../assets/sample-text.png";

interface Props {
  labelData: LabelData | null;
}

const LabelTemplate = ({ labelData }: Props) => {
  let barcodeData = "";

  if (labelData) barcodeData = `Price: ${labelData?.price}`;

  return (
    <>
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
    </>
  );
};

export default LabelTemplate;
