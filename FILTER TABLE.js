function Buscar() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datos");//NOMBRE INGRESADO DE LA PELICULA
    filter = input.value.toUpperCase();//CONVERTIR EN MAYUSCULA NOMBRE INGRESADO
    table = document.getElementById("tablaDatos");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];//BUSCAR EN LA COLUMNA O 8NOMBRE DE LA PELICULA)
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {//BUSCAR CON indexOf
          tr[i].style.display = "";//mostrar si es verdadero
          } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
      
  