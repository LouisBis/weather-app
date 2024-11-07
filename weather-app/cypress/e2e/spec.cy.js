describe('Weather display', () => {
  it('should display current weather', () => {
    // When I go to '/'
    cy.visit('/')
      // Then I should see the current temperature
      .get('[data-cy-temp]')
      // And I should see the current weather icon
      .get('[data-cy-weather]')
      // // And I should see the current city
      .get('[data-cy-city]')
  })
})
