const rowsInput = document.getElementById("rows");

const columnsInput = document.getElementById("columns");

const createBtn = document.getElementById("crt-tbl-btn");

const table = document.getElementById("table");

let rows = 0;

let columns = 0;

let elements = [];

const getInputValues = () => {
  rows = +rowsInput.value;
  columns = +columnsInput.value;
};

const getTotalElements = () => rows * columns;

const createElementsArray = () => {
  const totalElements = getTotalElements();

  for (let i = 1; i <= totalElements; i++) {
    elements.push(i);
  }
};

const renderElements = () => {
  let index = 0;

  for (let i = 1; i <= columns; i++) {
    const col = document.createElement("div");
    col.className = "col";
    for (let j = 1; j <= rows; j++) {
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `${elements[index]}`;
      col.appendChild(item);

      index += 1;
    }
    table.appendChild(col);
  }
};

const createBtnHandler = () => {
  getInputValues();
  createElementsArray();
  renderElements();
};

createBtn.addEventListener("click", createBtnHandler);
