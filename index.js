// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let list = {
  header: ['Name', 'Age', 'Roll', 'Class', 'Salary'],
  tableData: [
    {
      name: 'Abhishek',
      age: 29,
      roll: 12535,
      class: 'FE',
      salary: 1000,
    },
    {
      name: 'Himanshu',
      age: 22,
      roll: 15535,
      class: 'FE1',
      salary: 100000,
    },
    {
      name: 'Patma',
      age: 21,
      roll: 12536,
      class: 'FE3',
      salary: 1000090,
    },
    {
      name: 'Raghu',
      age: 21,
      roll: 16531,
      class: 'FE2',
      salary: 108773,
    },
  ],
};

let createTableButton = document.getElementById('createTable');
createTableButton.addEventListener('click', createTable);

function createTable() {
  let th = ``;
  let thead = ``;
  let tr = ``;
  //   thead = ` <thead>
  //   <th>${list.header[0]}</th>
  //   <th>${list.header[1]}</th>
  //   <th>${list.header[2]}</th>
  //   <th>${list.header[3]}</th>
  //   <th>${list.header[4]}</th>
  //['Name', 'Age', 'Roll', 'Class', 'Salary']
  // {
  //   name: 'Abhishek',
  //   age: 29,
  //   roll: 12535,
  //   class: 'FE',
  //   salary: 1000,
  // }
  //</thead>`;

  list.header.forEach((ele, index) => {
    th = th + `<th>${ele}</th>`;
  });
  thead = `<thead>${th}</thead>`;

  list.tableData.forEach((ele, index) => {
    let td = ``;
    td = td + `<td>${ele.name}</td>`;
    td = td + `<td>${ele.age}</td>`;
    td = td + `<td>${ele.roll}</td>`;
    td = td + `<td>${ele.class}</td>`;
    td = td + `<td>${ele.salary}</td>`;
    if (index % 2 === 1) {
      tr = tr + `<tr style="background-color: red;color:white">${td}</tr>`;
    } else {
      tr = tr + `<tr>${td}</tr>`;
    }
  });

  let tableData = thead + tr;

  let table = document.getElementById('tableDynamic');
  table.innerHTML = tableData;
}
