import { products } from "../feature/products.js";
import { cart, addToCart, removeCartItem, decreaseItemQuantity, increaseItemQuantity, updateSubtotal } from "../feature/cart.js";

/*************************************************************************************************** */

let productsHTML = "";

products.forEach((product, index) => {
  productsHTML += `
    <div class="top-trending-product col-6 col-md-4">
    <div class="color-swatches d-flex flex-row flex-wrap justify-content-center align-items-center text-center">
        <span class="umino-link col-12" style="order: 2">
        <a href="#" class="umino text-decoration-none text-uppercase" aria-label="umino collection">UMINO</a>
        </span>
        <a href="#" class="top-trending-name card-text text-decoration-none col-12" style="order: 3"> ${product.name} </a>
        <div class="rating col-12" style="order: 4">
        <img src="data/star.png" alt="star checked" />
        <img src="data/star.png" alt="star checked" />
        <img src="data/star.png" alt="star checked" />
        <img src="data/star.png" alt="star checked" />
        <img src="data/star.png" alt="star checked" />
        </div>
        <p class="sale-price col-12" style="order: 5">
        $${(product.priceCents / 100).toFixed(2)} &nbsp;
        <span class="base-price text-decoration-line-through"> $400.00 </span>
        </p>

        <input type="radio" id="trending-${index + 1}-swatch-1" class="d-none trending-${index + 1}-swatch-1" name="swatch-${index + 1}" checked />
        <label class="swatch" for="trending-${index + 1}-swatch-1" style="order: 6">
        <span class="color-${product.swatch.option1}"></span>
        </label>

        <input type="radio" id="trending-${index + 1}-swatch-2" class="d-none trending-${index + 1}-swatch-2" name="swatch-${index + 1}" />
        <label class="swatch" for="trending-${index + 1}-swatch-2" style="order: 7">
        <span class="color-${product.swatch.option2}"></span>
        </label>

        <div class="color-swatch-img position-relative overflow-hidden" style="order: 1">
        <a href="#" class="d-block overflow-hidden position-relative" aria-label="The Chrono S200 - Blue/Leather" style="aspect-ratio: 3/4">
            <img src="data/top-trending-${index + 1}-w533.webp" class="top-trending-${index + 1} card-img-top position-relative" loading="lazy" height="253" sizes="100vw" alt="${product.name}" />
            <img
            src="data/top-trending-${index + 1}-swatch-w533.webp"
            class="top-trending-${index + 1}-swatch card-img-top position-relative"
            loading="lazy"
            height="253"
            sizes="100vw"
            alt="${product.name}"
            />
            <img src="data/top-trending-${index + 1}-hover-w533.webp" class="card-img-top position-absolute img-hover" loading="lazy" height="253" sizes="100vw" alt="${product.name}" />
        </a>
        <span class="sale-block-item sale-off position-absolute">-${product.saleOff}%</span>
        <div class="action-bar d-flex flex-row align-items-center position-absolute gap-2">
            <button class="tooltip-placeholder btn action-item d-flex justify-content-center align-items-center js-add-to-cart" data-product-id='${product.id}' aria-label="add to cart">
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M10.5459 11.3285C10.3927 11.3285 10.2457 11.2669 10.1373 11.1573C10.029 11.0478 9.96811 10.8991 9.96811 10.7441H8.8125C8.8125 11.2091 8.99513 11.655 9.32021 11.9838C9.64529 12.3125 10.0862 12.4972 10.5459 12.4972C11.0057 12.4972 11.4466 12.3125 11.7716 11.9838C12.0967 11.655 12.2793 11.2091 12.2793 10.7441H11.1237C11.1237 10.8991 11.0629 11.0478 10.9545 11.1573C10.8461 11.2669 10.6992 11.3285 10.5459 11.3285Z"
                fill="#111111"
                ></path>
                <path
                d="M6.47907 11.3285C6.32583 11.3285 6.17886 11.2669 6.0705 11.1573C5.96214 11.0478 5.90127 10.8991 5.90127 10.7441H4.74023C4.74023 10.9747 4.78514 11.203 4.87238 11.416C4.95962 11.629 5.08748 11.8225 5.24868 11.9856C5.40988 12.1486 5.60125 12.2779 5.81186 12.3661C6.02248 12.4544 6.24822 12.4998 6.47618 12.4998C6.70415 12.4998 6.92989 12.4544 7.1405 12.3661C7.35112 12.2779 7.54249 12.1486 7.70368 11.9856C7.86488 11.8225 7.99275 11.629 8.07999 11.416C8.16723 11.203 8.21213 10.9747 8.21213 10.7441H7.05652C7.05652 10.8991 6.99569 11.0476 6.88741 11.1572C6.77913 11.2668 6.63225 11.3284 6.47907 11.3285Z"
                fill="#111111"
                ></path>
                <path
                d="M14.0173 1.66048C13.9858 1.65506 13.9539 1.65237 13.9219 1.65244H4.67702C4.52377 1.65244 4.37681 1.71401 4.26845 1.8236C4.16009 1.93319 4.09921 2.08182 4.09921 2.23681C4.09921 2.39179 4.16009 2.54042 4.26845 2.65001C4.37681 2.7596 4.52377 2.82117 4.67702 2.82117H13.2398L13.087 3.74811L12.277 8.66477H4.73949L2.77495 3.74811L1.60308 0.840914C1.54111 0.70415 1.42937 0.596826 1.29113 0.541284C1.15289 0.485742 0.998786 0.486261 0.860911 0.542733C0.723035 0.599206 0.612007 0.70728 0.550938 0.844458C0.489868 0.981637 0.483464 1.13735 0.533058 1.27918L2.40407 5.9223L3.68102 9.34519C3.77528 9.63335 3.96993 9.83349 4.25088 9.83349H12.7663C12.9031 9.83356 13.0355 9.78452 13.14 9.6951C13.2444 9.60568 13.314 9.48168 13.3365 9.34519L14.2589 3.74811L14.4921 2.33286C14.5173 2.18001 14.4814 2.02331 14.3924 1.89722C14.3033 1.77113 14.1684 1.68598 14.0173 1.66048Z"
                fill="#111111"
                ></path>
            </svg>
            <span class="tooltip-text-top">Add to cart</span>
            </button>

            <button class="tooltip-placeholder btn action-item d-flex justify-content-center align-items-center" aria-label="add to wishlist">
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M12.2441 2.76562C11.9889 2.51042 11.6973 2.31901 11.3691 2.19141C11.0501 2.0638 10.722 2 10.3848 2C10.0475 2 9.7194 2.0638 9.40039 2.19141C9.08138 2.31901 8.78971 2.51042 8.52539 2.76562L7.91016 3.38086C7.80078 3.49935 7.66406 3.55859 7.5 3.55859C7.33594 3.55859 7.19922 3.49935 7.08984 3.38086L6.47461 2.76562C6.21029 2.51042 5.91862 2.31901 5.59961 2.19141C5.2806 2.0638 4.95247 2 4.61523 2C4.27799 2 3.94531 2.0638 3.61719 2.19141C3.29818 2.31901 3.01107 2.51042 2.75586 2.76562C2.50065 3.02083 2.30924 3.3125 2.18164 3.64062C2.05404 3.95964 1.99023 4.28776 1.99023 4.625C1.99023 4.96224 2.05404 5.29492 2.18164 5.62305C2.30924 5.94206 2.50065 6.22917 2.75586 6.48438L7.5 11.2285L12.2441 6.48438C12.4993 6.22917 12.6908 5.94206 12.8184 5.62305C12.946 5.29492 13.0098 4.96224 13.0098 4.625C13.0098 4.28776 12.946 3.95964 12.8184 3.64062C12.6908 3.3125 12.4993 3.02083 12.2441 2.76562ZM13.0645 1.94531C13.4382 2.31901 13.7161 2.73828 13.8984 3.20312C14.0898 3.66797 14.1855 4.14193 14.1855 4.625C14.1855 5.10807 14.0898 5.58659 13.8984 6.06055C13.7161 6.52539 13.4382 6.9401 13.0645 7.30469L7.91016 12.459C7.80078 12.5775 7.66406 12.6367 7.5 12.6367C7.33594 12.6367 7.19922 12.5775 7.08984 12.459L1.93555 7.30469C1.56185 6.9401 1.2793 6.52539 1.08789 6.06055C0.905599 5.58659 0.814453 5.10807 0.814453 4.625C0.814453 4.14193 0.905599 3.66797 1.08789 3.20312C1.2793 2.72917 1.56185 2.3099 1.93555 1.94531C2.30013 1.57161 2.71484 1.29362 3.17969 1.11133C3.65365 0.929036 4.13216 0.837891 4.61523 0.837891C5.09831 0.837891 5.57227 0.929036 6.03711 1.11133C6.50195 1.29362 6.92122 1.57161 7.29492 1.94531L7.5 2.15039L7.70508 1.94531C8.07878 1.57161 8.49805 1.29362 8.96289 1.11133C9.42773 0.929036 9.90169 0.837891 10.3848 0.837891C10.8678 0.837891 11.3418 0.929036 11.8066 1.11133C12.2806 1.29362 12.6999 1.57161 13.0645 1.94531Z"
                fill="#111111"
                ></path>
            </svg>
            <span class="tooltip-text-top">Add to Wishlist</span>
            </button>

            <button class="tooltip-placeholder btn action-item d-flex justify-content-center align-items-center" aria-label="compare">
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M6.5 1.48047L1.97461 3.75L6.5 6.01953L11.0254 3.75L6.5 1.48047ZM6.24023 0.318359V0.304688C6.32227 0.268229 6.40885 0.25 6.5 0.25C6.59115 0.25 6.67773 0.268229 6.75977 0.304688L12.5977 3.23047C12.6523 3.25781 12.7025 3.29427 12.748 3.33984C12.7936 3.3763 12.8301 3.42643 12.8574 3.49023C12.9303 3.63607 12.9395 3.78646 12.8848 3.94141C12.8392 4.08724 12.7435 4.19661 12.5977 4.26953L6.75977 7.18164C6.67773 7.22721 6.59115 7.25 6.5 7.25C6.40885 7.25 6.32227 7.22721 6.24023 7.18164L0.402344 4.26953C0.347656 4.24219 0.297526 4.21029 0.251953 4.17383C0.20638 4.12826 0.169922 4.07357 0.142578 4.00977C0.0696615 3.86393 0.0559896 3.7181 0.101562 3.57227C0.15625 3.41732 0.25651 3.30339 0.402344 3.23047L6.24023 0.318359ZM0.402344 10.1074C0.25651 10.0345 0.15625 9.92057 0.101562 9.76562C0.0559896 9.61068 0.0696615 9.46484 0.142578 9.32812C0.215495 9.18229 0.329427 9.08659 0.484375 9.04102C0.639323 8.98633 0.785156 8.99544 0.921875 9.06836L6.5 11.8438L12.0781 9.05469C12.2148 8.99089 12.3607 8.98633 12.5156 9.04102C12.6706 9.08659 12.7845 9.18229 12.8574 9.32812C12.9303 9.46484 12.9395 9.61068 12.8848 9.76562C12.8392 9.92057 12.7435 10.0345 12.5977 10.1074L6.75977 13.0195C6.67773 13.056 6.59115 13.0742 6.5 13.0742C6.40885 13.0833 6.32227 13.0651 6.24023 13.0195L0.402344 10.1074ZM0.402344 7.18164V7.19531C0.25651 7.1224 0.15625 7.00846 0.101562 6.85352C0.0559896 6.69857 0.0696615 6.54818 0.142578 6.40234C0.215495 6.25651 0.329427 6.16081 0.484375 6.11523C0.639323 6.06055 0.785156 6.06966 0.921875 6.14258L6.5 8.93164L12.0781 6.14258C12.2148 6.06966 12.3607 6.06055 12.5156 6.11523C12.6706 6.16081 12.7845 6.25651 12.8574 6.40234C12.9303 6.54818 12.9395 6.69857 12.8848 6.85352C12.8392 7.00846 12.7435 7.11784 12.5977 7.18164L6.75977 10.1074C6.67773 10.1439 6.59115 10.1621 6.5 10.1621C6.40885 10.1621 6.32227 10.1439 6.24023 10.1074L0.402344 7.18164Z"
                fill="#111111"
                ></path>
            </svg>
            <span class="tooltip-text-top">Compare</span>
            </button>

            <button class="tooltip-placeholder btn action-item d-none d-sm-flex justify-content-center align-items-center" aria-label="quick view">
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                d="M0.568359 5.40234C0.568359 5.40234 0.623047 5.30208 0.732422 5.10156C0.841797 4.89193 1.0013 4.63672 1.21094 4.33594C1.34766 4.14453 1.49805 3.93945 1.66211 3.7207C1.83529 3.49284 2.02669 3.26497 2.23633 3.03711C2.50065 2.75456 2.79232 2.47201 3.11133 2.18945C3.43945 1.9069 3.79492 1.64714 4.17773 1.41016C4.64258 1.11849 5.15299 0.88151 5.70898 0.699219C6.26497 0.507812 6.86198 0.412109 7.5 0.412109C8.13802 0.412109 8.73503 0.507812 9.29102 0.699219C9.84701 0.88151 10.3574 1.11849 10.8223 1.41016C11.2051 1.64714 11.556 1.9069 11.875 2.18945C12.2031 2.47201 12.4993 2.75456 12.7637 3.03711C12.9733 3.26497 13.1602 3.49284 13.3242 3.7207C13.4974 3.93945 13.6523 4.14453 13.7891 4.33594C13.9987 4.63672 14.1582 4.89193 14.2676 5.10156C14.377 5.30208 14.4316 5.40234 14.4316 5.40234C14.4772 5.49349 14.5 5.58464 14.5 5.67578C14.5 5.76693 14.4772 5.84896 14.4316 5.92188C14.4316 5.92188 14.377 6.02669 14.2676 6.23633C14.1582 6.43685 13.9987 6.69206 13.7891 7.00195C13.6523 7.19336 13.4974 7.40299 13.3242 7.63086C13.1602 7.84961 12.9733 8.07292 12.7637 8.30078C12.4993 8.58333 12.2031 8.86589 11.875 9.14844C11.556 9.43099 11.2051 9.69076 10.8223 9.92773C10.3574 10.2194 9.84701 10.4564 9.29102 10.6387C8.73503 10.821 8.13802 10.9121 7.5 10.9121C6.86198 10.9121 6.26497 10.821 5.70898 10.6387C5.15299 10.4564 4.64258 10.2194 4.17773 9.92773C3.79492 9.69076 3.43945 9.43099 3.11133 9.14844C2.79232 8.86589 2.50065 8.58333 2.23633 8.30078C2.02669 8.07292 1.83529 7.84961 1.66211 7.63086C1.49805 7.40299 1.34766 7.19336 1.21094 7.00195C1.0013 6.69206 0.841797 6.43685 0.732422 6.23633C0.623047 6.02669 0.568359 5.92188 0.568359 5.92188C0.522786 5.83984 0.5 5.75326 0.5 5.66211C0.5 5.57096 0.522786 5.48438 0.568359 5.40234ZM1.74414 5.66211C1.79883 5.74414 1.85807 5.8444 1.92188 5.96289C1.99479 6.07227 2.08138 6.19987 2.18164 6.3457C2.30013 6.51888 2.43685 6.70573 2.5918 6.90625C2.74674 7.10677 2.91536 7.30729 3.09766 7.50781C3.33464 7.76302 3.5944 8.01367 3.87695 8.25977C4.15951 8.50586 4.46484 8.73372 4.79297 8.94336C5.1849 9.18034 5.60417 9.3763 6.05078 9.53125C6.50651 9.67708 6.98958 9.75 7.5 9.75C8.01042 9.75 8.48893 9.67708 8.93555 9.53125C9.39128 9.3763 9.8151 9.18034 10.207 8.94336C10.5352 8.73372 10.8405 8.50586 11.123 8.25977C11.4056 8.01367 11.6654 7.76302 11.9023 7.50781C12.0846 7.30729 12.2533 7.10677 12.4082 6.90625C12.5632 6.70573 12.6999 6.51888 12.8184 6.3457C12.9186 6.19987 13.0007 6.07227 13.0645 5.96289C13.1374 5.8444 13.2012 5.74414 13.2559 5.66211C13.2012 5.58008 13.1374 5.48438 13.0645 5.375C13.0007 5.25651 12.9186 5.12891 12.8184 4.99219C12.6999 4.81901 12.5632 4.63216 12.4082 4.43164C12.2533 4.23112 12.0846 4.0306 11.9023 3.83008C11.6654 3.56576 11.4056 3.31055 11.123 3.06445C10.8405 2.81836 10.5352 2.59505 10.207 2.39453C9.8151 2.14844 9.39128 1.95247 8.93555 1.80664C8.48893 1.66081 8.01042 1.58789 7.5 1.58789C6.98958 1.58789 6.50651 1.66081 6.05078 1.80664C5.60417 1.95247 5.1849 2.14844 4.79297 2.39453C4.46484 2.59505 4.15951 2.81836 3.87695 3.06445C3.5944 3.31055 3.33464 3.56576 3.09766 3.83008C2.91536 4.0306 2.74674 4.23112 2.5918 4.43164C2.43685 4.63216 2.30013 4.81901 2.18164 4.99219C2.08138 5.12891 1.99479 5.25651 1.92188 5.375C1.85807 5.48438 1.79883 5.58008 1.74414 5.66211ZM9.83789 5.66211C9.83789 5.99023 9.77409 6.29557 9.64648 6.57812C9.52799 6.86068 9.36393 7.10677 9.1543 7.31641C8.94466 7.52604 8.69401 7.69466 8.40234 7.82227C8.11979 7.94076 7.81901 8 7.5 8C7.18099 8 6.87565 7.94076 6.58398 7.82227C6.30143 7.69466 6.05534 7.52604 5.8457 7.31641C5.63607 7.10677 5.46745 6.86068 5.33984 6.57812C5.22135 6.29557 5.16211 5.99023 5.16211 5.66211C5.16211 5.3431 5.22135 5.04232 5.33984 4.75977C5.46745 4.47721 5.63607 4.23112 5.8457 4.02148C6.05534 3.81185 6.30143 3.64779 6.58398 3.5293C6.87565 3.40169 7.18099 3.33789 7.5 3.33789C7.81901 3.33789 8.11979 3.40169 8.40234 3.5293C8.69401 3.64779 8.94466 3.81185 9.1543 4.02148C9.36393 4.23112 9.52799 4.47721 9.64648 4.75977C9.77409 5.04232 9.83789 5.3431 9.83789 5.66211ZM8.66211 5.66211C8.66211 5.50716 8.63021 5.36133 8.56641 5.22461C8.51172 5.07878 8.42969 4.95117 8.32031 4.8418C8.22005 4.73242 8.09701 4.65039 7.95117 4.5957C7.81445 4.5319 7.66406 4.5 7.5 4.5C7.33594 4.5 7.18099 4.5319 7.03516 4.5957C6.89844 4.65039 6.77995 4.73242 6.67969 4.8418C6.57031 4.95117 6.48372 5.07878 6.41992 5.22461C6.36523 5.36133 6.33789 5.50716 6.33789 5.66211C6.33789 5.82617 6.36523 5.98112 6.41992 6.12695C6.48372 6.26367 6.57031 6.38672 6.67969 6.49609C6.77995 6.59635 6.89844 6.67839 7.03516 6.74219C7.18099 6.80599 7.33594 6.83789 7.5 6.83789C7.66406 6.83789 7.81445 6.80599 7.95117 6.74219C8.09701 6.67839 8.22005 6.59635 8.32031 6.49609C8.42969 6.38672 8.51172 6.26367 8.56641 6.12695C8.63021 5.98112 8.66211 5.82617 8.66211 5.66211Z"
                fill="#111111"
                ></path>
            </svg>
            <span class="tooltip-text-top">Quick view</span>
            </button>
        </div>
        </div>
    </div>
    </div>
    `;
});

document.querySelector(".js-products-grid").innerHTML = productsHTML;

updateSubtotal();

/************************************************************************ */
let cartQuantity;

function updateCartQuantity() {
  cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  document.querySelectorAll(".js-cart-quantity").forEach((position) => {
    position.innerHTML = cartQuantity;
  });
}
updateCartQuantity();

/*********************************************************** */

function updateCartUI() {
  let cartSummaryHTML = "";

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product, index) => {
      if (product.id === productId) {
        matchingProduct = product;
        matchingProduct.index = index + 1;
      }
    });

    cartSummaryHTML += `
          <div class="cart-item d-flex flex-row position-relative js-cart-item-${matchingProduct.id}">
          <a href="#" aria-label="item">
            <img
              loading="lazy"
              src="data/top-trending-${matchingProduct.index}-w165.webp"
              srcset="data/top-trending-${matchingProduct.index}-w360.webp 360w"
              class="card-img-top position-relative image-swatch-1"
              alt="${matchingProduct.name}"
              height="257"
              width="193"
              sizes="100vw"
            />
          </a>
          <div class="item-body d-flex flex-column">
            <a href="#" class="item-title" aria-label="${matchingProduct.name}">${matchingProduct.name}</a>
            <p class="item-description">White</p>
            <p class="item-price">$${(matchingProduct.priceCents / 100).toFixed(2)} &nbsp;<span class="text-decoration-line-through">$400.00</span></p>
            <div class="input-number d-flex flex-row align-items-center col-12 col-lg-2">
              <button class="decrease js-decrease-quantity" data-decrease-quantity='${matchingProduct.id}' name="buttonName" aria-label="decrease">
                <svg width="11" height="2" viewBox="0 0 11 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 0.5L11 1.5L-4.37114e-08 1.5L0 0.5L11 0.5Z" fill="#111111"></path>
                </svg>
              </button>
              <span class="number-of-product text-center">${cartItem.quantity}</span>
              <button class="increase js-increase-quantity" data-increase-quantity='${matchingProduct.id}' name="buttonName" aria-label="increase">
                <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5 11.5H6L6 6.5H11V5.5H6L6 0.5H5L5 5.5H0V6.5H5L5 11.5Z" fill="#111111"></path>
                </svg>
              </button>
            </div>
            <div class="item-edit d-flex flex-column justify-content-center align-items-center gap-2 position-absolute js-parent-remove">
              <button class="tooltip-placeholder icon-edit btn d-flex justify-content-center align-items-center js-remove-item" data-matching-id="${matchingProduct.id}" aria-label="remove item">
                <svg width="20px" height="20px" viewBox="-0.7 -0.7 24.80 24.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#999999">
                  <g id="SVGRepo_bgCarrier_1" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier_1" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.144"></g>
                  <g id="SVGRepo_iconCarrier_1">
                    <path
                      d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                      stroke="#999999"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </g>
                </svg>
                <span class="tooltip-text-left">Remove item</span>
              </button>
    
              <button class="tooltip-placeholder icon-edit btn d-flex justify-content-center align-items-center" aria-label="add item notes">
                <svg width="20px" height="20px" viewBox="-1 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003">
                  <g id="SVGRepo_bgCarrier_2" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier_2" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier_2">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.0992 2.39109C15.6207 0.869636 18.0875 0.869636 19.6089 2.39109C21.1304 3.91255 21.1304 6.37932 19.6089 7.90077L12.0149 15.4948C11.5869 15.9228 11.3255 16.1842 11.0342 16.4115C10.691 16.6792 10.3196 16.9087 9.92667 17.096C9.59315 17.2549 9.24244 17.3718 8.66818 17.5632L5.99553 18.4541L5.35386 18.668C4.77951 18.8594 4.14629 18.7099 3.7182 18.2818C3.2901 17.8537 3.14062 17.2205 3.33207 16.6462L4.43683 13.3318C4.62822 12.7576 4.7451 12.4069 4.90405 12.0734C5.09132 11.6804 5.32084 11.309 5.58856 10.9658C5.81578 10.6745 6.07719 10.4131 6.50525 9.98509L14.0992 2.39109ZM5.96092 16.8845L5.11556 16.0391L5.84398 13.8538C6.05606 13.2176 6.14366 12.9589 6.25814 12.7187C6.39854 12.4241 6.57061 12.1457 6.77132 11.8883C6.93497 11.6785 7.12718 11.4845 7.60141 11.0102L13.4924 5.11927C13.7355 5.72927 14.147 6.46549 14.8408 7.15927C15.5345 7.85306 16.2708 8.26447 16.8807 8.50764L10.9898 14.3986C10.5155 14.8728 10.3215 15.065 10.1117 15.2287C9.85436 15.4294 9.57594 15.6015 9.28134 15.7419C9.04113 15.8564 8.78244 15.944 8.14619 16.156L5.96092 16.8845ZM18.076 7.31241C17.9521 7.28522 17.7973 7.24432 17.6213 7.18325C17.1373 7.01532 16.5006 6.69778 15.9014 6.09861C15.3022 5.49944 14.9847 4.86276 14.8168 4.37873C14.7557 4.2027 14.7148 4.04787 14.6876 3.92404L15.1599 3.45175C16.0956 2.51608 17.6126 2.51608 18.5483 3.45175C19.4839 4.38742 19.4839 5.90444 18.5483 6.84011L18.076 7.31241ZM3.25002 22C3.25002 21.5858 3.58581 21.25 4.00002 21.25H20V22.75H4.00002C3.58581 22.75 3.25002 22.4142 3.25002 22Z"
                      fill="#999999"
                    ></path>
                  </g>
                </svg>
                <span class="tooltip-text-left">Add notes</span>
              </button>
            </div>
          </div>
        </div>
      `;

    add();
  });

  document.querySelector(".js-cart-item-list").innerHTML = cartSummaryHTML;
  updateCartQuantity();
}

/******************************************************** */

function add() {
  document.getElementById("products-container").onclick = function (event) {
    let targetElement = event.target.closest(".js-add-to-cart");

    if (targetElement) {
      const productId = targetElement.dataset.productId;

      let priceCents;

      products.forEach((item) => {
        if (productId === item.id) {
          priceCents = item.priceCents;
          return;
        }
      });
      addToCart(productId, priceCents);
      updateSubtotal();
      updateCartUI();
      openCartPopup();
      isCartContaining();
    }
  };
}
add();

function setupEventListeners() {
  const cartContainer = document.getElementById("cart-items-container");

  if (cartContainer) {
    cartContainer.addEventListener("click", function (event) {
      const targetElement = event.target.closest(".js-remove-item, .js-increase-quantity, .js-decrease-quantity");

      if (targetElement && targetElement.matches(".js-remove-item")) {
        const productId = targetElement.dataset.matchingId;
        removeCartItem(productId);
        updateSubtotal();
        updateCartUI();
      } else if (targetElement && targetElement.matches(".js-increase-quantity")) {
        const productId = targetElement.dataset.increaseQuantity;
        increaseItemQuantity(productId);
        updateSubtotal();
        updateCartUI();
      } else if (targetElement && targetElement.matches(".js-decrease-quantity")) {
        const productId = targetElement.dataset.decreaseQuantity;
        decreaseItemQuantity(productId);
        updateSubtotal();
        updateCartUI();
      }

      isCartContaining();
    });
  }
}
setupEventListeners();

/*********************************************************** */

function isCartContaining() {
  if (cartQuantity > 0) {
    document.getElementById("cart-items-wrapper").style.display = "flex";
    document.getElementById("cart-empty").style.display = "none";
  } else {
    document.getElementById("cart-items-wrapper").style.display = "none";
    document.getElementById("cart-empty").style.display = "flex";
  }
  updateCartUI();
}
isCartContaining();

function openCartPopup() {
  document.getElementById("mini-cart-popup").style.opacity = "1";
  document.getElementById("mini-cart-popup").style.visibility = "visible";
  document.getElementById("mini-cart-popup").style.transform = "translateX(0)";
  document.getElementById("overLay-cart").style.opacity = "1";
  document.getElementById("overLay-cart").style.visibility = "visible";
}

document.querySelector(".js-mini-cart").addEventListener("click", function () {
  openCartPopup();
});

function closeCartPopup() {
  document.getElementById("mini-cart-popup").style.opacity = "0";
  document.getElementById("mini-cart-popup").style.visibility = "hidden";
  document.getElementById("mini-cart-popup").style.transform = "translateX(150%)";
  document.getElementById("overLay-cart").style.opacity = "0";
  document.getElementById("overLay-cart").style.visibility = "hidden";
}

document.querySelector(".js-close-cart").addEventListener("click", function () {
  closeCartPopup();
});

document.querySelector(".js-return-to-shop").addEventListener("click", function () {
  closeCartPopup();
});
