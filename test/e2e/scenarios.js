'use strict';

/* https://github.com/angular/protractor/blob/master/docs/getting-started.md */

describe('demoApp', function() {

  browser.get('demo/demo.html');

  it('should automatically redirect to / when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('about', function() {

    beforeEach(function() {
      browser.get('demo.html#/about');
    });

    it('should render about when user navigates to /about', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });

  describe('test', function() {

    beforeEach(function() {
      browser.get('demo.html#/test');
    });

    it('should render test when user navigates to /test', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
