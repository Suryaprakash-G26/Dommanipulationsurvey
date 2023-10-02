document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();

  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var MobileNo = document.getElementById("mobileno").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  
  
  var newRow = document.createElement("tr");
  
  
  newRow.innerHTML = `<td>${firstName}</td>
                      <td>${lastName}</td>
                      <td>${MobileNo}</td>
                      <td>${email}</td>
                      <td>${address}</td>`;
  
 
  document.getElementById("dataTable").getElementsByTagName('tbody')[0].appendChild(newRow);
});
