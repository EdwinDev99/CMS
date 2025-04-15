import ConcatTable from "./ConcatTable";
import ContacForm from "./ContacForm";

type Props = {};

function CMS({}: Props) {
  return (
    <div className="Container">
      <div className="row">
        <div className="col">
          <ContacForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ConcatTable />
        </div>
      </div>
    </div>
  );
}

export default CMS;
