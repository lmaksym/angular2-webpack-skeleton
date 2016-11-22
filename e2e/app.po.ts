import { browser, element, by } from 'protractor';

export class CompleteGuidePage {
  navigateTo(navigation) {
    return browser.get(navigation);
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
  getParagraphColor() {
    return element(by.css('h1')).getCssValue('color');
  }
}
