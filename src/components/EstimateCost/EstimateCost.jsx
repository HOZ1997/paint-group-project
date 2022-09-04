import React, {
  useState,
  useEffect,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
// import {DebounceInput} from 'react-debounce-input';

function EstimateCost() {
  //   const labor = document.getElementById('laborInput').value;
  //   const material = document.getElementById('materialsInput').value;
  //   const total = labor + material;
  //   const el = document.getElementById('dne');
  //   el.innerHTML = total;

  // ----- using this.state until connecting to database ----- //
  const [laborAmount, setLaborAmount] =
    useState(0);
  const [materialAmount, setMaterialAmount] =
    useState(0);
  const [total, setTotal] = useState(0);

  const changeLaborAmount = (e) => {
    setLaborAmount(+e.target.value);
  };

  const changeMaterialAmount = (e) => {
    setMaterialAmount(+e.target.value);
  };

  useEffect(() => {
    setTotal(laborAmount + materialAmount);
  }, [laborAmount, materialAmount, total]);

  // --- placeholders until connecting to database --- //

  //   const dispatch = useDispatch;
  //   const history = useHistory;

  //   const [totalBalance, setTotalBalance] = useState(calculateTotal());

  //   function calculateTotal() {}

  return (
    <form>
      <h2>EXTERIOR ESTIMATE COST</h2>
      <div className="container">
        <div className="mb-3">
          <label>LABOR COST: $</label>
          <input
            type="number"
            id="laborInput"
            value={laborAmount}
            onChange={(e) => changeLaborAmount(e)}
            step="any"
          />
        </div>

        <div className="mb-3">
          <label>MATERIAL COST: $</label>
          <input
            type="number"
            id="materialsInput"
            value={materialAmount}
            onChange={(e) =>
              changeMaterialAmount(e)
            }
            step="any"
          />
        </div>
      </div>
      <br />
      <div className="totalCostClass">
        <h2>
          TOTAL COST: $
          {total.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </h2>
        <Button className="myButton">
          Create
        </Button>
      </div>
      {/* <button onClick={() => history.push('/home')}>Create</button> */}
    </form>
  );
}
export default EstimateCost;
