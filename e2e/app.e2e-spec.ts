import { TodoListappPage } from './app.po';

describe('todo-listapp App', function() {
  let page: TodoListappPage;

  beforeEach(() => {
    page = new TodoListappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
