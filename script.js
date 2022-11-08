fetch("https://fakestoreapi.com/products")
.then((value) =>{
    return value.json();

})
.then((convertData) =>{
    console.log(convertData[0].title);
    let tableData = "";
    convertData.map((rowData) =>{
        tableData += `<tr>
        <td>${rowData.title}</td>
        <td>${rowData.description}</td>
        <td>${rowData.price}</td>
        <td><img src="${rowData.image}"/></td>
      </tr>`;
    });
    document.getElementById('tableBody').innerHTML = tableData;
})