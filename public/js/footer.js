const creatFooter = () => {
  let footer = document.querySelector('footer');

  footer.innerHTML = `
  <div class="footer-content">
  <img src="img/light-logo.png" class="logo">
  <div class="footer-ul-container">
    <ul class="category">
      <li class="category-title">Men</li>
      <li><a href="#" class="footer-link">T-shirts</a></li>
      <li><a href="#" class="footer-link">Sweatshirts</a></li>
      <li><a href="#" class="footer-link">Shirts</a></li>
      <li><a href="#" class="footer-link">Jeans</a></li>
      <li><a href="#" class="footer-link">Shoes</a></li>
      <li><a href="#" class="footer-link">Casuals</a></li>
      <li><a href="#" class="footer-link">Formals</a></li>
      <li><a href="#" class="footer-link">Sports</a></li>
      <li><a href="#" class="footer-link">Watch</a></li>
    </ul>
    <ul class="category">
      <li class="category-title">Women</li>
      <li><a href="#" class="footer-link">T-shirts</a></li>
      <li><a href="#" class="footer-link">Sweatshirts</a></li>
      <li><a href="#" class="footer-link">Shirts</a></li>
      <li><a href="#" class="footer-link">Jeans</a></li>
      <li><a href="#" class="footer-link">Shoes</a></li>
      <li><a href="#" class="footer-link">Casuals</a></li>
      <li><a href="#" class="footer-link">Formals</a></li>
      <li><a href="#" class="footer-link">Sports</a></li>
      <li><a href="#" class="footer-link">Watch</a></li>
    </ul>
  </div>
</div>
<p class="footer-title">About Company</p>
<p class="info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem aliquid velit consequatur necessitatibus beatae, adipisci dolor modi, ad temporibus consequuntur totam debitis commodi recusandae dolores. Nostrum accusamus 
  vitae magnam aspernatur velit dolor obcaecati eveniet officiis tempore eaque fugiat pariatur facilis ducimus, cupiditate voluptatibus praesentium tempora assumenda? Quis quia consectetur placeat sint. Beatae nam pariatur dicta? Porro eos dignissimos inventore soluta nulla a
  ssumenda pariatur minus voluptatum voluptates dolorum? Aperiam, impedit eum.</p>
  <p class="info">Support Emails - help@clothing.com, customersupport@clothing.com</p>
  <p class="info">Tel : 180 00 00 001 / 180 00 00 002</p>
  <div class="footer-social-container">
    <div>
      <a href="#" class="social-link">Terms & Services</a>
      <a href="#" class="social-link">Privacy Page</a>
      <a href="seller.html" class="social-link">I'm Seller</a>
    </div>
    <div>
      <a href="#" class="social-link insta">Instagram</a>
      <a href="https://www.facebook.com/" class="social-link face">Facebook</a>
      <a href="#" class="social-link twit">Twitter</a>
    </div>
  </div>
  <p class="footer-credit">Made With <i class="fas fa-heart"></i> By Kiro0oz</p>
  `;
}

creatFooter();