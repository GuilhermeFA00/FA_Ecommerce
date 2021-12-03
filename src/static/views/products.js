import absview from "./absview.js";

export default class extends absview {
    constructor(params) {
        super(params);
        this.setTitle("products");
    }

    async getHtml() {
        return `
        <header class="header-container bg-light w-100 border-bottom-light">
        <nav class="navbar d-flex align-items-center mx-auto">
            <a class="navbar-logo d-flex align-items-center mr-auto" href="#">
                <?xml version="1.0" encoding="UTF-8"?>
                <h2>FA Ecommerce</h2>
            </a>
            <ul class="navbar-nav d-flex mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="/" data-link>HOME</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/products" data-link>PRODUCTS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/contacts" data-link>CONTACT</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/join" data-link>JOIN</a>
                </li>
            </ul>
            <div class="cart">
            <button type="button" id="cart-btn">
                <i class="fas fa-hat-cowboy-side" id="cart-shopping"></i>
                <span id="cart-count-info"></span>
            </button>

            <div class="cart-container">
                <div class="cart-list">
                </div>

                <div class="cart-total">
                    <h3>Total: R$</h3>
                    <span id="cart-total-value"></span>
                </div>
            </div>
        </nav>
    </header>
        <section class="products">
            <div class="products-container">
            <div>
            <div class="ant-drawer ant-drawer-right" "tabindex=-1">
                <div class="ant-drawer-mask"></div>
                <div class="ant-drawer-content-wrapper" style="width: 400px; transform: translateX(100%)">
                    <div class="ant-drawer-content">
                        <div class="ant-drawer-wrapper-body">
                            <div class="ant-drawer-header">
                                    <div class="ant-drawer-title">Notifications</div>
                                        <button aria-label="Close" class="ant-drawer-close">
                                            <span role="img" aria-label="close" class="anticon anticon-close"><svg focusable="false"
                                            class="" data-icon="close" width="1em" height="1em" fill="currentColor"
                                            aria-hidden="true" viewBox="64 64 896 896">
                                            <path
                                                d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z">
                                            </path>
                                            </svg></span>
                                        </button>
                                    </div>
                                    <div class="ant-drawer-body">
                                <!---->
                                <!---->
                                    </div>
                                </div>
                            </div>
                    <!---->
                        </div>
                    </div>
                </div>
                <h2>Our Products</h2>
                <div class="product-list">
                    <section id="product-suggestion" class="product-suggestion w-100">
                        <div class="list-for-buy container-full d-flex justify-content-between mx-auto w-100">
                        <!---->
                        </div>
                    </section>
                </div>
            </div>
        </section>
        `
    }
    async productsEvents() {
        const cartBtn = document.getElementById('cart-btn');
        const cartContainer = document.querySelector('.cart-container');
        const productsList = document.querySelector('.container-full');
        const addCartBtn = document.querySelectorAll('.add-cart-btn');
        const closeBtn = document.querySelector('.ant-drawer-close');
        const message = document.querySelector('.ant-drawer-body');
        let userEnter = JSON.parse(localStorage.getItem('userEnter'));
        renderProducts();
        cartRender();

        window.addEventListener('DOMContentLoaded', () => {
            noLogin();
        });

        function cartRender() {
            cartBtn.addEventListener('click', () => {
                cartContainer.classList.toggle('show-cart-container');
            });
        }

        function renderProducts() {
            let newHTML;

            let products = [
                {
                    name: "Serving Bowl",
                    price: 12,
                    brand: "Stockholm 2020",
                    imgSrc: "https://i.ibb.co/Db3smwL/similar1.jpg"
                },
                {
                    name: "Lampad",
                    price: 24,
                    brand: "Stockholm 2021",
                    imgSrc: "https://i.ibb.co/wSQVJyb/similar2.jpg"
                }
            ]

            const infoProducts = products.map(info => {
                return {
                    info: info
                }
            });

            infoProducts.forEach(product => {
                newHTML += `   
                    <div class="product-suggestion-showcase d-flex align-items-center">
                        <div class="suggestion-card h-100 bg-light d-flex column border-light position-relative">
                            <img class="product-img" src="${product.info.imgSrc}">
                            <h2 class="product-name">${product.info.name}</h2>
                            <h5 class="product-brand>${product.info.brand}</h5>
                            <h3 class="price">$${product.info.price}</h3>
                            <button class="add-cart-btn rounded-pill d-flex align-items-center justify-content-between">
                                Add to cart<span class="features-btn rounded-circle d-flex align-items-center justify-content-center">
                                    <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24" width="16">
                                        <path d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>            
                `

                productsList.innerHTML = newHTML;
            });
        }
        function noLogin() {
            addCartBtn.forEach(btn => {
                btn.addEventListener('click', () => {
                    if (userEnter === null) {
                        document.querySelector('.ant-drawer').classList.add('ant-drawer-open');
                        document.body.style.overflow = "hidden";
                        document.querySelector('.ant-drawer-content-wrapper').style.removeProperty("transform");
                        const msgDiv = document.createElement('div');
                        msgDiv.classList.add('msg-body');
                        msgDiv.innerHTML = `
                            <h3>
                            Please login before purchasing any product
                            Thank!
                            </h3>
                            <a href="/login">LOGIN FIELD</a>
                        `
                        message.appendChild(msgDiv);
                    }
                })
            });

            closeBtn.addEventListener('click', () => {
                document.querySelector('.ant-drawer').classList.remove('ant-drawer-open');
                document.body.style.removeProperty("overflow");
                document.querySelector('.ant-drawer-content-wrapper').style.transform = "translateX(100%)";
                let msgDiv = document.querySelector('.msg-body');
                msgDiv.innerHTML = "";
            });
        }
    }

    buyProducts() {
        const productsList = document.querySelector('.product-list');
        const cartList = document.querySelector('.cart-list');
        productsEvents();

        function productsEvents() {
            window.addEventListener('DOMContentLoaded', () => {
                loadCart();
            });

            //productsList.addEventListener('click', purchaseProduct);
            document.querySelector('.add-cart-btn').addEventListener('click', getProductInfo(productsList));
        }

        function addToCartList(product) {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `
                <div class="suggestion-card h-100 bg-light d-flex column border-light position-relative">
                <h2 class="product-name">${product.name}</h2>
                <h5 class="product-brand>${product.brand}</h5>
                <h3 class="price">$${product.price}</h3>
                <button type="button" class="cart-item-del-btn">
                <i class="fas fa-times"></i>
                </button>
                </div>
                `;
            cartList.appendChild(cartItem);
        }

        function getProductInfo(product) {
            let productInfo = {
                imgSrc: product.querySelector('.product-img img').src,
                name: product.querySelector('.product-name').textContent,
                brand: product.querySelector('.product-brand').textContent,
                price: product.querySelector('.price').textContent
            }
            addToCartList(productInfo);
            saveProductInStrg(productInfo);
        }

        function loadCart() {
            let products = getProductFromStrg();
            products.forEach(product => addToCartList(product));
        }

        function saveProductInStrg(item) {
            let products = getProductFromStrg();
            products.push(item);
            localStorage.setItem('products', JSON.stringify(products));
        }

        function getProductFromStrg() {
            return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];//If the key does not exist, an empty array will be added.
        }
    }
}