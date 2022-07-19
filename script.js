const rowsInput = document.getElementById("rows");

const columnsInput = document.getElementById("columns");

const createBtn = document.getElementById("crt-tbl-btn");

const table = document.getElementById("table");

let rows = 0;

let columns = 0;

const getInputValues = () => {
  rows = +rowsInput.value;
  columns = +columnsInput.value;
};

const renderElements = () => {
  let number = 1;

  for (let i = 1; i <= columns; i++) {
    const col = document.createElement("div");
    col.className = "col";
    for (let j = 1; j <= rows; j++) {
      const item = document.createElement("div");
      item.className = "item";
      item.innerHTML = `${number}`;
      col.appendChild(item);

      number += 1;
    }
    table.appendChild(col);
  }
};

const createBtnHandler = () => {
  getInputValues();
  renderElements();
};

createBtn.addEventListener("click", createBtnHandler);
