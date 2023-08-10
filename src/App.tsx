import { useState } from "react";
import LabelForm from "./components/LabelForm";
import "./App.css";

export interface LabelData {
  text: string;
  code1: string;
  code2: string;
  price: number;
}

function App() {
  const [previewData, setPreviewData] = useState<LabelData | null>(null);

  const onSubmit = (data: LabelData) => {
    console.log(data);
    setPreviewData(data);
  };

  const onPreview = () => {
    setPreviewData(null); // Clear previous preview data
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <LabelForm onSubmit={onSubmit} onPreview={onPreview} />
        </div>
        <div className="col-md-6">
          <div className="preview">
            <h2>Preview</h2>
            <div className="d-flex justify-content-between">
              <p className="fw-bold">Text: {previewData?.text}</p>
              <p>Code 1: {previewData?.code1}</p>
            </div>
            <p className="fw-bold">Code 2: {previewData?.code2}</p>
            <p>
              Price: <span className="fs-3 fw-bold">{previewData?.price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
