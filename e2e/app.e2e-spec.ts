import { GuillemcomaPage } from './app.po';

describe('guillemcoma App', function() {
  let page: GuillemcomaPage;

  beforeEach(() => {
    page = new GuillemcomaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
