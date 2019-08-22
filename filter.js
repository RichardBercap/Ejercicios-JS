const array = [
    {num_suc:1,cant:50,nombre:'richard'},
    {num_suc:1,cant:50,nombre:'richard'},
    {num_suc:1,cant:20,nombre:'victor'},
    {num_suc:1,cant:60,nombre:'richard'},
    {num_suc:1,cant:10,nombre:'richard'},
    {num_suc:1,cant:50,nombre:'rodrigo'},
    {num_suc:1,cant:50,nombre:'jorge'}
];
function filter(array,dato){
  array_aux = [];
  array.map(a=>{
    let value = a.nombre;
    if(array_aux.some(element=>element.nombre == value)){
      let element_aux = array_aux.find(ar => ar.nombre === value);
      element_aux.total = parseFloat(element_aux.total) + parseFloat(a.cant);

    }else{
      let obj = {nombre:value,total:a.cant};
      array_aux.push(obj);
    }


  });

  console.log(array_aux);
}
filter(array);
