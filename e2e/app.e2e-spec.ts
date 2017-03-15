import { VcClientPage } from './app.po';

describe('vc-client App', function() {
  let page: VcClientPage;

  beforeEach(() => {
    page = new VcClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
