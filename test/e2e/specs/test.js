// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default e2e tests': function (browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js
    const devServer = browser.globals.devServerURL

    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('a.navbar-brand')
      .assert.containsText('#navbarNav a[href="#top"]', 'ДОМОЙ')
      .assert.containsText('#navbarNav a[href="#solutions"]', 'РЕШЕНИЯ')
      .assert.containsText('#navbarNav a[href="#clients"]', 'НАШИ КЛИЕНТЫ')
      .assert.containsText('#navbarNav a[href="#recommendations"]', 'НАС РЕКОМЕНДУЮТ')
      .assert.containsText('#navbarNav a[href="#contact"]', 'КОНТАКТЫ')
      .assert.containsText('#navbarDropdownMenuLink', 'РУС')
      .assert.containsText('a.navbar-brand', 'ALLATRACK')

       // change locale
      .click('#navbarDropdownMenuLink')
      .assert.containsText('#navbarDropdownMenuLink > .dropdown-menu > a:first-child', 'УКР')
      .pause(100)
      .click('#navbarDropdownMenuLink > .dropdown-menu > a:first-child')
      .pause(100)
      .assert.containsText('#navbarNav a[href="#top"]', 'ДОДОМУ')
      .end()
  }
}
