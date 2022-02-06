const createNav = () => {
  let nav = document.querySelector('.navbar');

  nav.innerHTML = `
    <div class="nav">
      <img src="img/dark-logo.png" class="brand-logo">
      <div class="nav-items">
          <div class="search">
            <input type="search" name="search" class="search-box" placeholder="Search brand, product">
            <button class="search-btn">Search</button>
          </div>
          <a>
            <img src="img/user.png" id="user-img">
            <div class="login-logout-popup hide">
              <p class="account-info">Log in as, name</p>
              <button class="btn-log" id="user-btn">Log Out</button>
            </div>
          </a>
          <a href="#"><img src="img/cart.png" alt=""></a>
        </div>
</div>
<ul class="links-container">
  <li class="link-item">
    <a href="#" class="link">Home</a>
  </li>
  <li class="link-item">
    <a href="#" class="link">Women</a>
  </li>
  <li class="link-item">
    <a href="#" class="link">Men</a>
  </li>
  <li class="link-item">
    <a href="#" class="link">Kids</a>
  </li>
  <li class="link-item">
    <a href="#" class="link">Accessories</a>
  </li>
</ul>
  `;
}

createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPOp = document.querySelector('.login-logout-popup');
const popupText = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
  userPOp.classList.toggle('hide');
})

window.onload = () => {
  let user = JSON.parse(sessionStorage.user || null);
  if (user != null) {
    popupText.innerHTML = `Log in as, ${user.name}`;
    actionBtn.innerHTML = `Log Out`;
    actionBtn.addEventListener('click', () => {
      sessionStorage.clear();
      location.reload();
    })
  } else {
    popupText.innerHTML = `You Don't Log In!`;
    actionBtn.innerHTML = `Log In`;
    actionBtn.addEventListener('click', () => {
      location.href = '/login';
    })
  }
}