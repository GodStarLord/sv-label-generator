import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import LabelForm from "./components/LabelForm";
import LabelTemplate from "./components/LabelTemplate";
import "./App.css";

export interface LabelData {
  modal: string;
  code: string;
  swsp: string;
  price: number;
}

function App() {
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const componentRef = useRef(null);

  const [previewData, setPreviewData] = useState<LabelData>({} as LabelData);

  const onSubmit = (data: LabelData) => {
    console.log(data);
    setPreviewData(data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <LabelForm onSubmit={onSubmit} onPrint={handlePrint} />
        </div>
        <div className="col-md-6">
          <div className="preview">
            <LabelTemplate ref={componentRef} labelData={previewData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
