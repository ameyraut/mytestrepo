
document.getElementById("update").addEventListener("click", updateData);
 
var newData = {name:"usdjpy3", value1:"5qsaaaadasd00", value2:"50asads2",value3:"503",value4:"504",value5:"505",value6:"506",};

function updateData() {
     var term = newData.name;                    
  var column = 0;                             
  var pattern = new RegExp(term, 'g');      
  var table = document.getElementById('dataTable');
  var tr = table.getElementsByTagName('tr');
  for(var i = 0; i < tr.length; i++){
    var td = tr[i].getElementsByTagName('td');

    for(var j = 0; j < td.length; j++){
      if(j == column && td[j].innerHTML == term){  
        td[j].parentElement.children[1].innerHTML = newData.value1;
        td[j].parentElement.children[2].innerHTML = newData.value2;
        td[j].parentElement.children[3].innerHTML = newData.value3;
        td[j].parentElement.children[4].innerHTML = newData.value4;
        td[j].parentElement.children[5].innerHTML = newData.value5;
        td[j].parentElement.children[6].innerHTML = newData.value6; 
        var updatedRow = td[j].parentElement; 
        var deleteRow = td[j].parentNode; 
        deleteRow.parentNode.removeChild(deleteRow);
        var section = document.querySelector("section");
        table.insertBefore( updatedRow, table.firstChild );
      }
    }    
  }
}