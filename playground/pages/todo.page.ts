import { $, $$, ElementFinder, ElementArrayFinder, browser, protractor } from 'protractor-logs';

export class TodoPage {
    public url: string;

    public items: ElementArrayFinder;
    public input: ElementFinder;
    public removeButtons: ElementArrayFinder;
    public completeButtons: ElementArrayFinder;
    public completedItems: ElementArrayFinder;
    public showActiveItemsButton: ElementFinder;
    public showCompletedItemsButton: ElementFinder;
    public cleanCompletedItemsButton: ElementFinder;

    constructor() {
        this.url = 'http://todomvc.com/examples/angularjs/#/';
        this.items = $$('#todo-list li label');
        this.input = $('#new-todo');
        this.removeButtons = $$('.destroy');
        this.completeButtons = $$('[ng-model="todo.completed"]');
        this.showActiveItemsButton = $('[ng-class *= "active"]');
        this.showCompletedItemsButton = $('[ng-class *= "completed"]');
        this.cleanCompletedItemsButton = $('#clear-completed');
        this.completedItems = $$('#todo-list li.completed label');
    }

    addItem(itemName) {
        this.input.sendKeys(itemName);
        browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };

    getItems() {
        return this.items.getText();
    };

    removeItem(itemName) {
        this.items.each((item, index) => {
            item.getText().then(text => {
                if (text === itemName) {
                    this.hoverOverItem(index);
                    this.removeButtons.get(index).click();
                }
            });
        });
    }

    hoverOverItem(index) {
        browser.actions().
            mouseMove(this.items.get(index)).
            perform();
    };

    markItemAsCompleted(itemName) {
        this.items.each((item, index) => {
            item.getText().then(text => {
                if (text === itemName) {
                    this.completeButtons.get(index).click();
                }
            });
        });
    }

    getCompletedItems() {
        return this.completedItems.getText();
    }

    showActiveItems() {
        this.showActiveItemsButton.click();
    }

    showCompletedItems() {
        this.showCompletedItemsButton.click();
    }

    cleanCompletedItems() {
        this.cleanCompletedItemsButton.click();
    }
}