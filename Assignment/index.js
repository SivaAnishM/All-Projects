let ProductData = [{ name: "Vintage Chair", url: "https://m.media-amazon.com/images/I/418QpEn9JKL._AC_UF894,1000_QL80_DpWeblab_.jpg", price: 35 }, { name: "Vintage Lamp", url: "https://img.freepik.com/free-vector/vintage-lamp_1308-19088.jpg", price: 25 }, { name: "Vintage Classic Chair", url: "https://plus.unsplash.com/premium_photo-1676893375612-d9ecbbc64071?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", price: 50 }, { name: "Lamp", url: "https://plus.unsplash.com/premium_photo-1678395446995-575bfdcb0f87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGFtcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60", price: 70 }, { name: "Wooden Bed", url: "https://media.istockphoto.com/id/520553902/photo/double-bed.jpg?s=612x612&w=0&k=20&c=8ADIvEhLN6iKR3K8gnT-CdGYg1jsDEq45JZuiWZsm3E=", price: 500 }, { name: "Stackable Chair", url: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", price: 30 }]


function product(data) {

  let root = document.getElementById("page4root")
  root.innerHTML += `<div class="productdata" >
  <h2>${data.name}</h2>
  <p>$${data.price}</p>
  <img src=${data.url} alt=${data.name}  width="300" height="400">
  </div>`
}

for (let i = 0; i < ProductData.length; i++) {
  product(ProductData[i])
}