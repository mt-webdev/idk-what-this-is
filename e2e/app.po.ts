import { browser, by, element } from 'protractor';

export class RoutingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mtwd-root h1')).getText();
  }
}
