const menuIcon = document.querySelector('.burger-menu-icon');
const burgerMenu = document.querySelector('.burger-menu');

menuIcon.addEventListener('click', onClickMenu);

function onClickMenu() {
  // console.log("click Burger");
  // if (localStorage.getItem(IS_CUSTOMER_LOGGED_IN)) {
  burgerMenu.innerHTML = `<div class="burger-conteiner">
            <button class="button_user btn-user-burger">
                <div class="avatar">
                    <img class="avatar_img" src="../images/face.jpeg" alt="">
                </div>
                Stephen
            </button>
            <nav class="navigation navigation-burger">
                <ul class="navigation-burger-list">
                    <li class="navigation-item navigation-burger-item"><a class="navigation-link" href="#">Home</a></li>
                    <li class="navigation-item navigation-burger-item"><a class="navigation-link" href="#">Shopping List</a></li>
                </ul>
            </nav>
            <button class="button_logout btn-logout-burger">Log out
                <svg width="20" height="20">
                    <use href="../images/icons.svg#icon-arrow-narrow-right"></use>
                </svg>
          </button>
        </div>`;
  // } else{
  //     burgerMenu.innerHTML = `<div class="burger-conteiner">
  //         <button class="button_signup">Sign up
  //             <svg width="20" height="20">
  //                 <use href="./images/icons.svg#icon-arrow-narrow-right"></use>
  //             </svg>
  //         </button>
  //     </div>`;
  // }
}
// ///////////////////Dark Theme/////////////////
const body = document.querySelector('body');
const toggle = document.querySelector('#theme-switch-toggle');

toggle.addEventListener('change', event => {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.removeItem('darkTheme');
  } else {
    body.classList.add('dark');
    localStorage.setItem('darkTheme', 'true');
  }
});

let theme = localStorage.getItem('darkTheme');
function checkTheme(theme) {
  if (localStorage.getItem('darkTheme')) {
    body.classList.add('dark');
    toggle.checked = true;
  }
  return;
}
checkTheme();
