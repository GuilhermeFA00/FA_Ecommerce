import absview from "./absview.js";

export default class extends absview {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
        <div class="col-md-5 d-flex align-items-stretch">
        <div class="info-wrap bg-primary w-100 p-lg-5 p-4">
        <h3 class="mb-4 mt-md-4">Contact us</h3>
        <div class="dbox w-100 d-flex align-items-start">
        <div class="icon d-flex align-items-center justify-content-center">
        <span class="fa fa-map-marker"></span>
        </div>
        <div class="text pl-3">
        <p><span>Address:</span> Ceará,Brazil</p>
        </div>
        </div>
        <div class="dbox w-100 d-flex align-items-center">
        <div class="icon d-flex align-items-center justify-content-center">
        <span class="fa fa-phone"></span>
        </div>
        <div class="text pl-3">
        <p><span>Instagram:</span> <a href="https://www.instagram.com/guilherme_al00/">guilherme_al00</a></p>
        </div>
        </div>
        <div class="dbox w-100 d-flex align-items-center">
        <div class="icon d-flex align-items-center justify-content-center">
        <span class="fa fa-paper-plane"></span>
        </div>
        <div class="text pl-3">
        <p><span>Email:</span> <a href="sharkdevv@gmail.com">GMAIL</a></p>
        </div>
        </div>
        <div class="dbox w-100 d-flex align-items-center">
        <div class="icon d-flex align-items-center justify-content-center">
        <span class="fa fa-globe"></span>
        </div>
        <div class="text pl-3">
        <p><span>Gihub</span> <a href="https://github.com/GuilhermeFA00">GuilhermeFA00</a></p>
        </div>
        </div>
        </div>
        </div>

        <div class="contact-bottom">
            <h1>FA Services</h1>
        </div>
        `
    }
}