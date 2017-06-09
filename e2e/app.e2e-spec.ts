import { Angular2PracticePage } from './app.po';

describe('angular2-practice App', () => {
  let page: Angular2PracticePage;

  beforeEach(() => {
    page = new Angular2PracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
