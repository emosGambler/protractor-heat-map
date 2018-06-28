import { promise } from 'protractor';
import { $, $$, ElementFinder, ElementArrayFinder } from 'protractor-logs';

export class HomePage {
    public url: string;

    public greeting: ElementFinder;
    public logo: ElementFinder;
    public learnMenu: ElementFinder;
    public learnMenuOption: ElementFinder;
    public mainPageButton: ElementFinder;
    public nameInput: ElementFinder;
    public tryNewAngularButton: ElementFinder;

    constructor() {
        this.url = 'https://angularjs.org/';
        
        this.greeting = $$('div > h1').get(1);
        this.logo = $('.hero > h2');
        this.learnMenu = $$('.dropdown-menu').get(0);
        this.learnMenuOption = $$('.dropdown-toggle').get(0);
        this.mainPageButton = $('img[src="img/angularjs-for-header-only.svg"]');
        this.nameInput = $('input[placeholder="Enter a name here"]');
        this.tryNewAngularButton = $('a[href="http://angular.io"]');
    }
}