import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    content: String;
    router: Router;

    constructor() {
        this.content = "Hello from app.ts";
    }

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'welcome'], moduleId: '../home/home', nav: true, title: 'Welcome' }
            //{ route: 'flickr', moduleId: './flickr', nav: true, title: 'Flickr' },
            //{ route: 'esri-map', moduleId: './esri-map', nav: true, title: 'ESRI Map' },
            //{ route: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router' }
        ]);

        this.router = router;
    }
}
