let root = document.getElementById('root');


const cars = [
    {
      title: "Mercedes-Benz S-Class",
      imageUrl: "mercedes.webp",
      description: "Luxury, performance, and cutting-edge technology define the iconic Mercedes-Benz S-Class sedan.",
      price: 86000
    },
    {
      title: "BMW 7 Series",
      imageUrl: "bmw.png",
      description: "The BMW 7 Series delivers dynamic performance, precision engineering, and refined luxury for an exhilarating drive.",
      price: 80000
    },
    {
      title: "Range Rover Vogue",
      imageUrl: "vogue.jpg",
      description: "The Range Rover Vogue combines ultimate luxury with robust off-road capabilities and modern design.",
      price: 90000
    },
    {
      title: "Maserati Quattroporte",
      imageUrl: "maserati.jpg",
      description: "The Maserati Quattroporte blends Italian craftsmanship with top-tier performance for an unmistakable driving experience.",
      price: 120000
    },
    {
      title: "Lykan Hypersport",
      imageUrl: "Lykan_HyperSport.jpg",
      description: "The Lykan Hypersport is an ultra-rare hypercar featuring futuristic design and performance beyond imagination.",
      price: 3400000
    },
    {
      title: "Lamborghini Aventador",
      imageUrl: "lambo.webp",
      description: "The Lamborghini Aventador’s bold, aggressive design and unmatched speed make it a supercar icon.",
      price: 200000
    },
    {
      title: "Audi A8",
      imageUrl: "audi.jpeg",
      description: "The Audi A8 delivers modern design, advanced technology, and a premium driving experience in every model.",
      price: 60000
    },
    {
      title: "Ferrari 488 GTB",
      imageUrl: "ferrari.webp",
      description: "The Ferrari 488 GTB, the pinnacle of luxury sports cars, offers an unmatched blend of performance, style, and heritage.",
      price: 250000
    },
    {
      title: "Bentley Continental GT",
      imageUrl: "bentley.webp",
      description: "The Bentley Continental GT exudes luxury, craftsmanship, and power, offering a refined driving experience like no other.",
      price: 220000
    },
    {
      title: "Aston Martin DB11",
      imageUrl: "aston-martin.webp",
      description: "The Aston Martin DB11 combines timeless elegance with thrilling performance in its range of luxury sports cars.",
      price: 190000
    }
  ];
  


// product component
function Product(id, imageUrl, title, description, price){
    let productDiv = document.createElement('div');
    let productDetailsDiv = document.createElement('div');;
    productDiv.classList.add('product-div');
    productDetailsDiv.classList.add('product-details-div');


    productDiv.innerHTML = `
        <img src=${imageUrl} draggable='false' alt=${title}>
    `;
    
    productDetailsDiv.innerHTML = `
        <h3 class='product-title'>${title}</h3>
        <p>${description}</p>
        <h3>$${price}</h3>
        <div>
            <button class='btn'>Buy Now</button>&nbsp;&nbsp;&nbsp;
            <a href="${title}" class='view-details-link' data-car-id=${id}>View Details</a>
        </div>
    `;

    productDiv.appendChild(productDetailsDiv);

    return productDiv;
}

cars.forEach((car, index)=>{
    root.appendChild(Product(index, car.imageUrl, car.title, car.description, car.price));
});

let viewDetailsLink = document.querySelectorAll('.view-details-link');

viewDetailsLink.forEach((btn)=>{
    btn.addEventListener('click', (event)=>{
        event.preventDefault();
        let carId = btn.getAttribute('data-car-id');    
        alert(
            `${cars[carId].title}:\n${cars[carId].description}`
        );
    });
});
