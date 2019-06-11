import { getGreeting } from '../support/app.po';

describe('bmw', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to bmw!');
  });
});
