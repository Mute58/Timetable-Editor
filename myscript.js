var table = document.getElementById("mytable");
var row = table.rows[0];
var cell = row.cells[0];

function addTime() {
  var cname = document.getElementById("cname").value;
  var stime = document.getElementById("stime").value;
  var hrs = parseInt(document.getElementById("hrs").value);
  var sday = parseInt(document.getElementById("sday").value);
  var ctype = document.getElementById("ctype").value;
  var bgcolor = document.getElementById("bgcolor").value;
  var etime = document.getElementById("etime").value;

  var startRow;
  switch (stime) {
    case "08:00":
      startRow = 1;
      break;
    case "09:00":
      startRow = 2;
      break;
    case "10:00":
      startRow = 3;
      break;
    case "11:00":
      startRow = 4;
      break;
    case "12:00":
      startRow = 5;
      break;
    case "13:00":
      startRow = 6;
      break;
    case "14:00":
      startRow = 7;
      break;
    case "15:00":
      startRow = 8;
      break;
    case "16:00":
      startRow = 9;
      break;
    case "17:00":
      startRow = 10;
      break;
    case "18:00":
      startRow = 11;
      break;
  }

  var endTime;
  if (etime == "") {
    endTime = "";
  } else {
    endTime = " - ";
  }

  var firstCell = table.rows[startRow].cells[sday];
  firstCell.innerHTML = cname + " " + ctype + "<br>" + stime + endTime + etime;

  firstCell.style.backgroundColor = bgcolor;
  firstCell.style.color = "white";
  firstCell.style.borderBottomColor = bgcolor;

  var cell;

  for (var i = startRow + 1; i <= startRow + hrs; i++) {
    var row = table.rows[i];
    cell = row.cells[sday];
    cell.style.backgroundColor = bgcolor;
    cell.style.borderBottomColor = bgcolor;
  }

  cell.style.borderBottomColor = "rgb(185, 156, 209)";
}

function resetInnerHTML() {
  for (var i = 1; i <= 13; i++) {
    var row = table.rows[i];

    for (var j = 1; j < row.cells.length; j++) {
      row.cells[j].innerHTML = "";
      row.cells[j].style.backgroundColor = "white";
      row.cells[j].style.borderBottomColor = "rgb(185, 156, 209)";
    }
  }
}
