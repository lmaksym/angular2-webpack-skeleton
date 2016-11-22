import { CompleteGuidePage } from './app.po';

describe('complete-guide App', function() {
  let page: CompleteGuidePage;

  beforeEach(() => {
    page = new CompleteGuidePage();
  });

  it('should display message saying "Welcome to home component!" ', () => {
    page.navigateTo('/');
    expect(page.getParagraphText()).toEqual('Welcome to home component!');
  });
});
describe('complete-guide feature a', function() {
  let page: CompleteGuidePage;

  beforeEach(() => {
    page = new CompleteGuidePage();
    page.navigateTo('/feature-a');
  });

  it('should display message saying Hello from feature "A" ', () => {
    expect(page.getParagraphText()).toEqual('Hello from feature "A"');
  });
  it('should display message saying Hello from feature "A" and color "rgba(0, 170, 0, 1)"', () => {
    expect(page.getParagraphColor()).toEqual('rgba(0, 170, 0, 1)');
  });
});
