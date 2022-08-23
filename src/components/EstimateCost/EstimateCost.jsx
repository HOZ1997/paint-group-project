function EstimateCost() {
  let labor = document.getElementById('laborInput').value;
  let material = document.getElementById('materialsInput').value;
  let total = +labor + +material;
  document.getElementById('totalPrice').innerHTML = total;
  return (
    <form>
      <div>
        <label for="">Labor Cost</label>
        <input type="number" class="form-control" id="laborInput" />
      </div>
      <div>
        <label for="">Material Cost</label>
        <input type="number" class="form-control" id="materialsInput" />
      </div>
      <br />
      <h4>
        Total Costs: <span id="totalPrice">0</span>
      </h4>
    </form>
  );
}
export default EstimateCost;
