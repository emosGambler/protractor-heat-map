import { TodoPage } from './../pages/todo.page';
import { openUrl, setPage } from 'protractor-logs';

const todoPage: TodoPage = new TodoPage();

describe('Todo', () => {
    beforeAll(() => {
        openUrl(todoPage.url);
        setPage('todo.page');
    });
    
    it('should add a todo item', () => {
        todoPage.addItem('eat breakfast');
        expect(todoPage.getItems()).toEqual(['eat breakfast']);
    });
    
    it('should add a second todo item', () => {
        todoPage.addItem('meditate');
        expect(todoPage.getItems()).toEqual(['eat breakfast', 'meditate']);
    });
    
    it('should remove todo item from list', () => {
        todoPage.removeItem('meditate');
        expect(todoPage.getItems()).toEqual(['eat breakfast']);
    });
    
    it('should mark a todo item as complete', () => {
        todoPage.markItemAsCompleted('eat breakfast');
        expect(todoPage.getCompletedItems()).toEqual(['eat breakfast']);
    });
    
    it('should show only Active items', () => {
        todoPage.showActiveItems();
        expect(todoPage.getItems()).toEqual([]);
    });
    
    it('should show only Completed items', () => {
        todoPage.showCompletedItems();
        expect(todoPage.getItems()).toEqual(['eat breakfast']);
    });
    
    it('should clean completed items', () => {
        todoPage.cleanCompletedItems();
        expect(todoPage.getItems()).toEqual([]);
    });
});