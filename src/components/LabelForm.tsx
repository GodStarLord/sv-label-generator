import { useForm } from "react-hook-form";
import { LabelData } from "../App";

interface Props {
  onSubmit: (data: LabelData) => void;
  onPreview: () => void;
}

const LabelForm = ({ onSubmit, onPreview }: Props) => {
  const { register, handleSubmit } = useForm<LabelData>();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            className="form-control"
            id="text"
            {...register("text")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="code1">Code 1</label>
          <input
            type="text"
            className="form-control"
            id="code1"
            {...register("code1")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="code2">Code 2</label>
          <input
            type="text"
            className="form-control"
            id="code2"
            {...register("code2")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price")}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary mr-2">
            Generate
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={onPreview}
          >
            Download
          </button>
        </div>
      </form>
    </>
  );
};

export default LabelForm;
