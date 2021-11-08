import join from "./views/join.js";
import products from "./views/products.js";
import contact from "./views/contact.js";
import app from "./views/app.js";
import login from "./views/login.js";

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: app },
        { path: "/products", view: products },
        { path: "/contacts", view: contact },
        { path: "/join", view: join },
        { path: "/login", view: login }
    ]

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        }
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            result: [location.pathname]
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector('.app').innerHTML = await view.getHtml();

    if (match.route.path == "/join") {
        view.signUp();
    }
    if (match.route.path == "/login") {
        view.userLogin();
    }

};

window.addEventListener("popstate", router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});