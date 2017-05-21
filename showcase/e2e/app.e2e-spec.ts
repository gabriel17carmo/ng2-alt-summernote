import { ShowcasePage } from './app.po';

describe('showcase App', () => {
  let page: ShowcasePage;

  beforeEach(() => {
    page = new ShowcasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
