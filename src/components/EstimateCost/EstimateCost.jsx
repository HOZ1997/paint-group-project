import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

function EstimateCost() {
  //   const labor = document.getElementById('laborInput').value;
  //   const material = document.getElementById('materialsInput').value;
  //   const total = labor + material;
  //   const el = document.getElementById('dne');
  //   el.innerHTML = total;
  const dispatch = useDispatch;
  const history = useHistory;

  const [laborAmount, setLaborAmount] = useState('');
  const [materialAmount, setMaterialAmount] = useState('');

  return (
    <form>
      <div class="mb-3">
        <label for="">Labor Cost</label>
        <input
          type="number"
          class="form-control"
          id="laborInput"
          value={laborAmount}
          onChange={(event) => setLaborAmount(event.target.value)}
        />
      </div>
      <div class="mb-3">
        <label for="">Material Cost</label>
        <input
          type="number"
          class="form-control"
          id="materialsInput"
          value={materialAmount}
          onChange={(event) => setMaterialAmount(event.target.value)}
        />
      </div>
      <br />
      <h4>
        Total Costs: <span id="totalPrice">0</span>
      </h4>
    </form>
  );
}
export default EstimateCost;
