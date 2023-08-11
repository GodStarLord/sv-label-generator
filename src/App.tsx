import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import LabelForm from "./components/LabelForm";
import LabelTemplate from "./components/LabelTemplate";
import "./App.css";

export interface LabelData {
  text: string;
  code1: string;
  code2: string;
  price: number;
}

function App() {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const componentRef = useRef(null);

  const [previewData, setPreviewData] = useState<LabelData | null>(null);

  const onSubmit = (data: LabelData) => {
    console.log(data);
    setPreviewData(data);
  };

  // const onPreview = () => {
  //   setPreviewData(null); // Clear previous preview data

  //   // Accessing all the html data here
  //   if (!componentRef) return null;
  // };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <LabelForm onSubmit={onSubmit} onPreview={handlePrint} />
        </div>
        <div className="col-md-6">
          <div className="preview">
            {/* <h2>Preview</h2>
            <div className="d-flex justify-content-between">
              <p className="fw-bold">Text: {previewData?.text}</p>
              <p>Code 1: {previewData?.code1}</p>
            </div>
            <p className="fw-bold">Code 2: {previewData?.code2}</p>
            <p>
              Price: <span className="fs-3 fw-bold">{previewData?.price}</span>
            </p> */}
            <LabelTemplate ref={componentRef} labelData={previewData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
