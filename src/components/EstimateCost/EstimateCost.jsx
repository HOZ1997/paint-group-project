
import { useDispatch, useSelector} from "react-redux";

function EstimateCost() {



  const dispatch = useDispatch();
  const estimateCost = useSelector((store) => store.estimateCost);


  const onChangeLaborAmount = (key) => (event) => {
    const updateLaborAmount = {
      ...estimateCost,
      [key]: event.target.value,
    };
    estimateCostReducer(updateLaborAmount);
  };

  const onChangeMaterialAmount = (key) => (event) => {
    const updateMaterialAmount = {
      ...estimateCost,
      [key]: event.target.value,
    };
    estimateCostReducer(updateMaterialAmount);
  };



  // --- placeholders until connecting to database --- //

  const estimateCostReducer = (updateLaborAmount) => {
    dispatch({type: 'SET_COST', payload: updateLaborAmount});
   
  };

  const totalCosts =
    Number(estimateCost.exteriorestimate_laborcost) +
    Number(estimateCost.exteriorestimate_materialcost);


  return (
    <form>
      <h1>PROJECT ESTIMATE</h1>
      <div className="container">
      <div className="mb-3">
        <label>LABOR COST: $</label>
        <input
          type="number"
          id="laborInput"
          onChange={onChangeLaborAmount(
            "exteriorestimate_laborcost"
          )}
          step="any"
        />
      </div>
      <div className="mb-3">
        <label>MATERIAL COST: $</label>
        <input
          type="number"
          id="materialsInput"
          onChange={onChangeMaterialAmount('exteriorestimate_materialcost')}
          
          step="any"
        />
        </div>
        </div>
      <br />
      <div className="totalCostClass">
        <h2>
          TOTAL COST: $
          {totalCosts.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </h2>
        
      </div>

    </form>
  );
}
export default EstimateCost;
