import absview from "./absview.js";

export default class extends absview {
    constructor(params) {
        super(params);
        this.setTitle("FA");
    }

    async getHtml() {
        return `
        <header class="header-container bg-light w-100 border-bottom-light">
        <nav class="navbar container-full d-flex align-items-center mx-auto">
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
            <form class="search-form d-flex align-items-center">
                <button class="search-btn nav-icon" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                </button>
                <input class="search-input" type="search" placeholder="Search " />
            </form>
            <div class="navbar-nav d-flex ml-auto d-flex align-items-center justify-content-center">
                <a class="nav-icon subtotal-price" href="#">R$0</a>

                <a class="nav-icon d-flex align-items-center position-relative" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path
                            d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                    <span
                        class="item-quantity badge position-absolute rounded-circle d-flex align-items-center justify-content-center"></span>
                </a>
            </div>
        </nav>
    </header>
    <!--=== END OF HEADER ===-->

    <!--=== MAIN CONTENT ===-->
    <main class="w-100 mx-auto">
        <!-- Main Section-->
        <section id="main-section" class="main-section container-full mx-auto d-flex">
            <article class="product-showcase h-100 border-right-light">
                <section class="product-path">
                    <header class="product-path__nav">
                        <ul class="nav d-flex align-items-center w-100">
                            <li class="page-item">
                                <a class="page-link" href="/" data-link>HOME</a><span>/</span>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">BRAND</a><span>/</span>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">BRAND-1</a><span>/</span>
                            </li>
                            <li class="page-item">
                                <a class="page-link active" href="#">BRAND-2</a>
                            </li>
                        </ul>
                    </header>
                </section>

                <section class="product-selected w-100 d-flex">
                    <div class="product-preview">
                        <div class="product-presentation d-flex">
                            <div class="product-display d-flex align-items-center position-relative">
                                <div class="product-height d-flex align-items-center">
                                    <p class="h-100">74cm</p>
                                    <div class="line position-relative">
                                        <div class="line-top position-absolute"></div>
                                        <div class="line-center"></div>
                                        <div class="line-bottom position-absolute"></div>
                                    </div>
                                </div>
                                <!-- https://i.ibb.co/C9hkdD7/sofa.png -->
                                <img src="" class="product-photo" />
                                <a href="#"
                                    class="features-btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                                    <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                        viewBox="0 0 24 24" width="16">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                    </svg>
                                    <span class="ripple rounded-circle border-white"></span>
                                    <span class="ripple rounded-circle border-white"></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="product-description">
                        <div class="product-summary-container">
                            <h5 class="product-model">MODEL</h5>
                            <h1 class="product-type">TYPE</h1>
                            <p class="product-text-description">
                                DESCRIPTION <a href="#">View More</a>
                            </p>
                        </div>
                        <div class="product-options d-flex align-items-center">
                            <a href="#" class="option-btn d-flex align-items-center border-light">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                </svg>
                                FEATURE PART
                            </a>
                            <a href="#" class="option-btn d-flex align-items-center border-light">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z" />
                                </svg>
                                FEATURE PART
                            </a>
                            <a href="#" class="option-btn d-flex align-items-center border-light">
                                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M21 6H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 10H3V8h2v4h2V8h2v4h2V8h2v4h2V8h2v4h2V8h2v8z" />
                                </svg>
                                FEATURE PART
                            </a>
                        </div>

                        <div class="product-price d-flex align-items-center">
                            <h1 class="price">PRICE</h1>
                            <button class="add-cart-btn rounded-pill d-flex align-items-center justify-content-between">
                                Add to cart<span
                                    class="features-btn rounded-circle d-flex align-items-center justify-content-center">
                                    <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                        viewBox="0 0 24 24" width="16">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    </div>

                    <div
                        class="product-features-small vertical-container d-flex justify-content-between position-relative w-100">
                        <div class="feature-icons">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
                            </svg>
                        </div>
                        <h5 class="vertical-container-title d-flex align-items-center position-absolute">
                            <div class="line"></div>
                            Features
                        </h5>
                    </div>
                </section>
                <!--PART1-end-->

                <section class="product-family w-100 position-relative">
                    <div
                        class="product-family__full-price position-absolute bg-light d-flex column justify-content-between">
                        <h5>Buy all products</h5>
                        <h1 class="price">PRICE</h1>
                        <button class="add-cart-btn rounded-pill d-flex align-items-center justify-content-between">
                            Add to cart<span
                                class="features-btn rounded-circle d-flex align-items-center justify-content-center">
                                <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                    viewBox="0 0 24 24" width="16">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <a href="#"
                        class="features-btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                        <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24"
                            width="16">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                        <span class="ripple rounded-circle border-white"></span>
                        <span class="ripple rounded-circle border-white"></span>
                    </a>
                    <a href="#"
                        class="features-btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                        <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24"
                            width="16">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                        <span class="ripple rounded-circle border-white"></span>
                        <span class="ripple rounded-circle border-white"></span>
                    </a>
                    <a href="#"
                        class="features-btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                        <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24"
                            width="16">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                        <span class="ripple rounded-circle border-white"></span>
                        <span class="ripple rounded-circle border-white"></span>
                    </a>
                    <div class="small-preview-container d-flex align-items-center position-absolute">
                        <a href="#" class="preview-btn position-relative">
                            <img src="https://i.ibb.co/KhpJmHt/preview1.jpg" />
                        </a>
                        <a href="#" class="preview-btn position-relative">
                            <img src="https://i.ibb.co/fd5wdSw/preview2.jpg" />
                        </a>
                        <a href="#" class="preview-btn position-relative">
                            <img src="https://i.ibb.co/G5XvqBb/preview3.jpg" />
                        </a>
                    </div>
                </section>

                <section class="feature-description">
                    <a href="/gift" class="feature-card bg-light h-100">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z" />
                        </svg>
                        <h2>Gift</h2>
                        <button
                            class="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </button>
                    </a>
                    <a href="/tempoffers" class="feature-card bg-light">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
                        </svg>
                        <h2>Temporary offers</h2>
                        <button
                            class="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </button>
                    </a>
                    <a href="/safety" class="feature-card bg-light">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" />
                        </svg>
                        <h2>Safety</h2>
                        <button
                            class="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </button>
                    </a>
                    <a href="#" class="feature-card bg-light">
                        <svg xmlns="http://www.w3.org/2000/svg" height="50" viewBox="0 0 24 24" width="50">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 20H4v-4h4v4zm0-6H4v-4h4v4zm0-6H4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4zm6 12h-4v-4h4v4zm0-6h-4v-4h4v4zm0-6h-4V4h4v4z" />
                        </svg>
                        <h2>Products</h2>
                        <button
                            class="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </button>
                    </a>
                </section>
            </article>

            <!--<aside class="user-navbar h-100">
                <div class="user-avatar position-relative">
                    <img src="" class="rounded-circle" />
                    <a href="#"
                        class="item-quantity badge position-absolute rounded-circle d-flex align-items-center justify-content-center">2</a>
                </div>
                <h3 class="user-greeting">
                    <span class="username">USER</span>
                </h3>
                <div class="user-proposal">
                    <h5 class="title">My Proposals</h5>
                    <ul class="proposal-list">
                        <li class="nav-item d-flex align-items-center justify-content-between selected">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20"
                                viewBox="0 0 24 24" width="20">
                                <g>
                                    <rect fill="none" height="24" width="24" x="0" />
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M4,18v3h3v-3h10v3h3v-6H4V18z M19,10h3v3h-3V10z M2,10h3v3H2V10z M17,13H7V5c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2V13z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <a href="#" class="nav-link">Sofa Stockholm</a>
                        </li>
                        <li class="nav-item d-flex align-items-center justify-content-between">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20"
                                viewBox="0 0 24 24" width="20">
                                <g>
                                    <rect fill="none" height="24" width="24" />
                                    <path
                                        d="M21,10c-1.1,0-2,0.9-2,2v3H5v-3c0-1.1-0.89-2-2-2s-2,0.9-2,2v5c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2v-5 C23,10.9,22.1,10,21,10z M18,5H6C4.9,5,4,5.9,4,7v2.15c1.16,0.41,2,1.52,2,2.81V14h12v-2.03c0-1.3,0.84-2.4,2-2.81V7 C20,5.9,19.1,5,18,5z" />
                                </g>
                            </svg>
                            <a href="#" class="nav-link">Sofa Reactive</a>
                        </li>
                    </ul>
                </div>
                <div class="user-choice">
                    <h5 class="title">My Choices</h5>
                    <ul class="choice-list">
                        <li class="nav-item d-flex align-items-center justify-content-between border-bottom-light">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20"
                                viewBox="0 0 24 24" width="20">
                                <g>
                                    <rect fill="none" height="24" width="24" x="0" />
                                </g>
                                <g>
                                    <g>
                                        <g>
                                            <path
                                                d="M4,18v3h3v-3h10v3h3v-6H4V18z M19,10h3v3h-3V10z M2,10h3v3H2V10z M17,13H7V5c0-1.1,0.9-2,2-2h6c1.1,0,2,0.9,2,2V13z" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <a href="#" class="nav-link">Armchairs</a>
                            <a href="#" class="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                </svg>
                            </a>
                        </li>
                        <li class="nav-item d-flex align-items-center justify-content-between">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="20"
                                viewBox="0 0 24 24" width="20">
                                <g>
                                    <rect fill="none" height="24" width="24" />
                                    <path
                                        d="M21,10c-1.1,0-2,0.9-2,2v3H5v-3c0-1.1-0.89-2-2-2s-2,0.9-2,2v5c0,1.1,0.9,2,2,2h18c1.1,0,2-0.9,2-2v-5 C23,10.9,22.1,10,21,10z M18,5H6C4.9,5,4,5.9,4,7v2.15c1.16,0.41,2,1.52,2,2.81V14h12v-2.03c0-1.3,0.84-2.4,2-2.81V7 C20,5.9,19.1,5,18,5z" />
                                </g>
                            </svg>
                            <a href="#" class="nav-link">Fairly Big</a>
                            <a href="#" class="nav-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>-->
        </section>

        <!-- Product Suggestions Section-->
        <section id="product-suggestion" class="product-suggestion w-100">
            <div class="container-full d-flex justify-content-between mx-auto w-100">
                <div class="section-title h-100">
                    <h1>You Might Like</h1>
                    <h5>1 of 5</h5>
                    <div class="d-flex align-items-center">
                        <button
                            class="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                            </svg>
                        </button>
                        <button
                            class="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div class="product-suggestion-showcase d-flex align-items-center">
                    <div class="suggestion-card h-100 bg-light d-flex column border-light position-relative">
                        <img src="https://i.ibb.co/Db3smwL/similar1.jpg" />
                        <h2>Serving Bowl</h2>
                        <h5>Stockholm 2020</h5>
                        <h3 class="price">$12</h3>
                        <button class="add-cart-btn rounded-pill d-flex align-items-center justify-content-between">
                            Add to cart<span
                                class="features-btn rounded-circle d-flex align-items-center justify-content-center">
                                <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                    viewBox="0 0 24 24" width="16">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div class="suggestion-card h-100 bg-light d-flex column border-light position-relative">
                        <img src="https://i.ibb.co/wSQVJyb/similar2.jpg" />
                        <h2>Pendant Lamp</h2>
                        <h5>Foto</h5>
                        <h3 class="price">$24</h3>
                        <button class="add-cart-btn rounded-pill d-flex align-items-center justify-content-between">
                            Add to cart<span
                                class="features-btn rounded-circle d-flex align-items-center justify-content-center">
                                <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                    viewBox="0 0 24 24" width="16">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                    <div class="suggestion-card h-100 bg-light d-flex column border-light position-relative">
                        <img src="https://i.ibb.co/YhsP9FJ/similar3.jpg" />
                        <h2>Wall Clock</h2>
                        <h5>Sippra</h5>
                        <h3 class="price">$12</h3>
                        <button class="add-cart-btn rounded-pill d-flex align-items-center justify-content-between">
                            Add to cart<span
                                class="features-btn rounded-circle d-flex align-items-center justify-content-center">
                                <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                    viewBox="0 0 24 24" width="16">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Client Suggestions Section-->
        <section id="client-suggestion"
            class="client-suggestion container-full d-flex justify-content-between mx-auto w-100">
            <div class="section-title h-100">
                <h1>From our clients</h1>
                <div class="hashtag-container d-flex align-items-center">
                    <h5 class="hashtag">#stockholm</h5>
                    <h5 class="hashtag">#ikea</h5>
                </div>
                <a href="https://www.instagram.com/ikeaportugal/" target="_blank">View our instagram</a>
            </div>

            <div class="client-suggestion-gallery w-100">
                <a href="#" class="grid-photo photo-1 position-relative">
                    <div class="square position-absolute"></div>
                    <img src="https://i.ibb.co/1XBpL37/gallery1.jpg" />
                    <div class="overlay"></div>
                    <div class="client-suggestion-avatar d-flex position-absolute align-items-center">
                        <img src="https://i.ibb.co/KXZnw1V/avatar-2.jpg" class="rounded-circle" />
                        <p class="client-name">John Maybe</p>
                    </div>
                </a>
                <a href="#" class="grid-photo photo-2 position-relative">
                    <img src="https://i.ibb.co/hCL18jc/gallery2.jpg" />
                    <div class="overlay"></div>
                    <div class="client-suggestion-avatar d-flex position-absolute align-items-center">
                        <img src="https://i.ibb.co/KXZnw1V/avatar-2.jpg" class="rounded-circle" />
                        <p class="client-name">John Maybe</p>
                    </div>
                </a>
                <a href="#" class="grid-photo photo-3 position-relative">
                    <img src="https://i.ibb.co/hK4CRg7/gallery3.jpg" />
                    <div class="overlay"></div>
                    <button
                        class="features-btn rounded-circle d-flex align-items-center justify-content-center position-absolute">
                        <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 0 24 24"
                            width="16">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                        </svg>
                    </button>
                </a>
            </div>
        </section>
    </main>
    <!--=== END OF MAIN CONTENT ===-->

    <section id="product-suggestion" class="product-suggestion w-100">
        <div class="container-full d-flex justify-content-between mx-auto w-100">
            <div class="section-title h-100">
                <h1>And Don't Forget These!</h1>
                <h5>1 of 5</h5>
                <div class="d-flex align-items-center">
                    <button
                        class="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                        </svg>
                    </button>
                    <button
                        class="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="product-suggestion-showcase d-flex align-items-center">
                <div class="suggestion-card h-100 bg-light d-flex column border-light position-relative">
                    <img src="https://i.ibb.co/Db3smwL/similar1.jpg" />
                    <h2>Serving Bowl</h2>
                    <h5>Stockholm 2020</h5>
                    <h3 class="price">$12</h3>
                    <button class="add-cart-btn rounded-pill d-flex align-items-center justify-content-between">
                        Add to cart<span
                            class="features-btn rounded-circle d-flex align-items-center justify-content-center">
                            <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                viewBox="0 0 24 24" width="16">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="suggestion-card h-100 bg-light d-flex column border-light position-relative">
                    <img src="https://i.ibb.co/wSQVJyb/similar2.jpg" />
                    <h2>Pendant Lamp</h2>
                    <h5>Foto</h5>
                    <h3 class="price">$24</h3>
                    <button class="add-cart-btn rounded-pill d-flex align-items-center justify-content-between">
                        Add to cart<span
                            class="features-btn rounded-circle d-flex align-items-center justify-content-center">
                            <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                viewBox="0 0 24 24" width="16">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            </svg>
                        </span>
                    </button>
                </div>
                <div class="suggestion-card h-100 bg-light d-flex column border-light position-relative">
                    <img src="https://i.ibb.co/YhsP9FJ/similar3.jpg" />
                    <h2>Wall Clock</h2>
                    <h5>Sippra</h5>
                    <h3 class="price">$12</h3>
                    <button class="add-cart-btn rounded-pill d-flex align-items-center justify-content-between">
                        Add to cart<span
                            class="features-btn rounded-circle d-flex align-items-center justify-content-center">
                            <svg class="rounded-circle" xmlns="http://www.w3.org/2000/svg" height="16"
                                viewBox="0 0 24 24" width="16">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>

    <!--=== FOOTER ===-->
    <footer class="footer-container bg-light w-100 border-top-light">
        <div class="footer-content container-full d-flex justify-content-between mx-auto">
            <div class="footer-content-logo">
                <a class="navbar-logo d-flex align-items-center mr-auto" href="#">
                    <?xml version="1.0" encoding="UTF-8"?>
                    <svg width="80px" height="20px" viewBox="0 0 748 131" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 47.1 (45422) - http://www.bohemiancoding.com/sketch -->
                        <title>Ikea_logo</title>
                        <desc>Created with Sketch.</desc>
                        <defs></defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="Ikea_logo" fill-rule="nonzero" fill="#FFC240">
                                <polygon id="polygon53"
                                    points="83.8759216 123.747305 84.6294047 127.715085 86.0122014 130.096881 0.939161462 129.868297 1.94098357 127.446991 2.24576325 123.403017 2.24576325 7.10981337 1.90147509 3.68668601 0.905297052 1.86929605 86.0460658 1.86929605 84.6294047 3.73748262 83.909786 7.45410153">
                                </polygon>
                                <path
                                    d="M239.296628,129.868297 C239.296628,129.868297 241.023713,128.372619 241.255119,127.446991 C241.901365,124.435881 240.820526,121.512254 240.820526,121.512254 L213.898321,79.0716829 L213.898321,78.7979456 L214.016846,123.405839 L214.784439,126.944669 L216.246253,128.863653 L131.128061,128.863653 L132.530612,126.944669 L133.26434,123.151856 L133.230476,6.98564387 L132.488281,3.62177923 L131.097018,1.86929605 L216.249075,1.86929605 L214.821126,3.73748262 L214.087397,7.45410153 L214.0366,49.0847486 L244.878611,8.72966095 C244.878611,8.72966095 245.516391,7.14932185 245.516391,4.87194033 C245.516391,3.43834701 244.11384,1.10170277 244.11384,1.10170277 L328.859524,1.19765193 L291.984004,53.6366896 L336.425397,124.656 L339.752576,127.207119 L343.536923,128.860831 L239.296628,128.860831 L239.296628,129.868297 L239.296628,129.868297 Z"
                                    id="path43"></path>
                                <polygon id="polygon63"
                                    points="489.642095 48.7291723 493.511103 48.0236638 495.881612 46.635223 495.813883 82.5343188 493.324849 81.0781492 489.642095 80.3528864 442.483083 80.4065051 442.483083 92.1743873 504.057045 92.1743873 508.394511 91.3108448 510.527969 89.6655989 510.669071 130.175898 361.504814 129.885229 362.870679 127.463924 363.466128 123.408661 363.466128 7.10981337 362.836814 3.07148258 361.397577 0.61631291 510.067978 0.895694286 510.183681 39.8679852 507.765198 38.8407648 503.718401 38.5557394 442.483083 38.5557394 442.483083 48.9097825">
                                </polygon>
                                <path
                                    d="M631.415444,55.5500287 L621.405689,78.0642168 L641.456241,78.0642168 L631.415444,55.5500287 Z M580.192703,7.29042356 C580.192703,7.29042356 580.824839,5.01586407 580.553923,3.20411818 C580.308406,1.43188076 579.128796,0.754592581 579.128796,0.754592581 L694.50766,0.78845699 C694.50766,0.78845699 693.319584,1.43188076 693.071245,3.24644869 C692.811618,5.01586407 693.440931,7.32146593 693.440931,7.32146593 L743.81424,125.330466 L745.417155,127.842076 L747.635274,129.871119 L656.517437,130.029153 C656.517437,130.029153 657.914344,127.082949 657.77042,125.855364 C657.626497,124.548762 657.174971,122.864008 657.174971,122.864008 L651.257166,106.284558 L611.596298,106.284558 L605.111264,122.861186 C605.111264,122.861186 604.496061,123.00511 604.496061,124.280669 C604.496061,126.764059 605.988917,128.860831 605.988917,128.860831 L532.511615,128.860831 C532.511615,128.860831 535.040157,127.86183 536.437064,124.805568 C537.577166,122.389906 537.357047,122.531008 537.357047,122.531008 L580.192703,7.29042356 Z"
                                    id="path73"></path>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>

            <div class="footer-content-main d-flex column align-items-center">
                <h5>&copy; Inter IKEA Systems B.V. 1999-2020</h5>
                <ul class="navbar-nav d-flex mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Catalogues</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Planning tools</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Jobs</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contact us</a>
                    </li>
                </ul>
                <button
                    class="arrow-btn d-flex align-items-center justify-content-center bg-light border-medium rounded-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
                    </svg>
                </button>
            </div>

            <div class="footer-content-contacts">
                <div
                    class="product-features-small vertical-container d-flex justify-content-between position-relative w-100">
                    <div class="feature-icons">
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z" />
                            </svg>
                        </a>
                        <a href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path
                                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                        </a>
                    </div>
                    <h5 class="vertical-container-title d-flex align-items-center position-absolute">
                        <div class="line"></div>
                        Contacts
                    </h5>
                </div>
            </div>
        </div>
    </footer>

        `
    }
}