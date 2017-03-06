import { Sampleapp1Page } from './app.po';

describe('sampleapp1 App', () => {
  let page: Sampleapp1Page;

  beforeEach(() => {
    page = new Sampleapp1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
