let subtotal = 0;

const calculateTax = (subtotal) => {
  const tax = subtotal * 0.13;
  const formattedTax = tax.toFixed(2);
  return formattedTax;
};

const calculateTotal = (subtotal) => {
  const tax = calculateTax(subtotal);
  const total = parseFloat(subtotal) + parseFloat(tax);
  const formattedTotal = total.toFixed(2);
  return formattedTotal;
};

const getImgLink = (title) => {
  let imgLink;
  switch (title) {
    case "FRIDGE":
      imgLink =
        "https://images.pexels.com/photos/5816934/pexels-photo-5816934.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
      break;
    case "OVEN":
      imgLink =
        "https://media.istockphoto.com/photos/modern-kitchen-microwave-oven-picture-id1144960519";
      break;
    case "LAPTOP":
      imgLink =
        "https://www.zdnet.com/a/img/resize/9e53f272c2405eac42b914923e43fa32a3c6cbae/2022/06/08/1b6c7c5a-12d9-408e-9a4e-4bf8ace0b635/dell-xps-13-9310-review-best-windows-laptop.jpg?auto=webp&fit=crop&height=900&width=1200";
      break;
    case "TV":
      imgLink =
        "https://images.pexels.com/photos/5552789/pexels-photo-5552789.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
      break;
    case "MOBILE":
      imgLink =
        "https://images.pexels.com/photos/6858618/pexels-photo-6858618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
      break;
    default:
      imgLink = "https://assets.codepen.io/687837/plate__chicken-salad.png";
  }

  return imgLink;
};

$(".add-button").on("click", function () {
  const title = $(this).data("title");
  const price = $(this).data("price");
  const imgLink = getImgLink(title);

  const element = `
    <li class="cart-item">
      <img src="${imgLink}" alt="${title}">
      <div class="cart-item-dets">
        <p class="cart-item-heading">${title}</p>
        <p class="g-price">₹${price}</p>
      </div>
    </li>
  `;
  $(".cart-items").append(element);

  subtotal = subtotal + price;

  const formattedSubtotal = subtotal.toFixed(2);
  const tax = calculateTax(subtotal);
  const total = calculateTotal(subtotal);

  $(".cart-math").html(`
    <p class="cart-math-item">
      <span class="cart-math-header">Subtotal:</span>
      <span class="g-price subtotal">₹${formattedSubtotal}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Tax:</span>
      <span class="g-price tax">₹${tax}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Total:</span>
      <span class="g-price total">₹${total}</span>
    </p>
   
    
  `);
});





    $(".cart-math").html(`
    <p class="cart-math-item">
      <span class="cart-math-header">Subtotal:</span>
      <span class="g-price subtotal">₹${formattedSubtotal}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Tax:</span>
      <span class="g-price tax">₹${tax}</span>
    </p>
    <p class="cart-math-item">
      <span class="cart-math-header">Total:</span>
      <span class="g-price total">₹${total}</span>
    </p>
    <ul class="payment_redirect">
      <li style="border-radius: 20px; background-color: chartreuse; text-align:center">
          <a href="upi://pay?pa=UPIID@oksbi&amp;pn=FNAME SNAME K&amp;cu=INR" style="text-align: center;">Pay Now !</a>
          <a href="upi://pay?pa=UPIID@oksbi&amp;pn=FNAME SNAME K&amp;cu=INR  style="text-align: center;"">Pay Later !</a>
      </li>
    </ul>
  `)


