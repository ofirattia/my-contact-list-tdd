/* global describe, it, browser, beforeEach */

const expect = require('chai').expect;

describe('ContactList App', () => {
  const ContactText = 'Get better at testing';

  beforeEach(() => {
    browser.url('http://localhost:3000/');
  });

  it('Should load with the right title', () => {
    const actualTitle = browser.getTitle();

    expect(actualTitle).to.eql('Contact List');
  });

  it('Should allow me to create a Contact', () => {
    browser.element('.contact-input').setValue(ContactText);
    browser.click('.contact-submit');
    const actual = browser.element('.contact-text').getText();

    expect(actual).to.equal(ContactText);
  });

  it('Should allow me to delete a Contact', () => {
    browser.element('.contact-input').setValue(ContactText);
    browser.click('.contact-submit');
    browser.click('.contact-delete');
    const actual = browser.element('.contact-text');
    expect(actual.state).to.equal('failure');
  });

  it('Should allow me to undelete a Contact', () => {
    browser.element('.contact-input').setValue(ContactText);
    browser.click('.contact-submit');
    browser.click('.contact-delete');
    browser.click('.contact-undelete');
    const actual = browser.element('.contact-text');

    expect(actual.value).to.not.equal(null);
  });

  it('Should disable the Add Contact button when no text is entered', () => {
    expect(browser.isEnabled('.contact-submit')).to.equal(false);
  });

  it('Should enable the Add Contact button when text is entered', () => {
    browser.element('.contact-input').setValue(ContactText);
    expect(browser.isEnabled('.contact-submit')).to.equal(true);
  });

  it('Should disable the Undelete button when there is no deleted Contact', () => {
    expect(browser.isEnabled('.contact-undelete')).to.equal(false);
  });

  it('Should enable the Undelete button when there is a deleted Contact', () => {
    browser.element('.contact-input').setValue(ContactText);
    browser.click('.contact-submit');
    browser.click('.contact-delete');
    expect(browser.isEnabled('.contact-undelete')).to.equal(true);
  });
  
  it('Should fetch contacts from API by click on FETCH CONTACTS button', () => {
    console.log(browser.element('tbody'));
    browser.click('.fetch-submit');
    browser.waitForVisible('.record', 3000)
    expect(browser.waitForVisible('.record', 3000)).to.equal(true);

  });
});
