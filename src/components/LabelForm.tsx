import { useForm } from "react-hook-form";
import { LabelData } from "../App";

interface Props {
  onSubmit: (data: LabelData) => void;
  onPrint: () => void;
}

const LabelForm = ({ onSubmit, onPrint }: Props) => {
  const { register, handleSubmit } = useForm<LabelData>();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="text">Modal</label>
          <input
            type="text"
            className="form-control"
            id="modal "
            {...register("modal")}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="code">Code</label>
          <input
            type="text"
            className="form-control"
            id="code"
            {...register("code")}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="swsp">SWSP</label>
          <input
            type="text"
            className="form-control"
            id="swsp"
            {...register("swsp")}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            {...register("price")}
          />
        </div>
        <div className="form-group mt-2">
          <button type="submit" className="btn btn-primary me-2">
            Generate
          </button>
          <button type="button" className="btn btn-secondary" onClick={onPrint}>
            Print
          </button>
        </div>
      </form>
    </>
  );
};

export default LabelForm;
