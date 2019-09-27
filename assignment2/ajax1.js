function createTable() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
   if (xhttp.readyState == 4 && xhttp.status == 200) {
   	var data = JSON.parse(xhttp.responseText);
   }
   for( var i=0; i<data.length; i++){
   	var table = document.getElementById("demo");
   	table.innerHTML += 
      "<tr><td>" + data[i].employee_name + "</td><td>" + data[i].employee_salary + 
      "</td><td>" + data[i].employee_age + "</td><td>" + data[i].profile_image + "</td></tr>"
    }

    }
  }
 
9