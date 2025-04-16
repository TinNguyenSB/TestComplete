//USEUNIT BrowserHandler
function Script_Test_Case_001()
{
  //Delays the test execution for the specified time period.
  Delay(2000);
  //Runs a script routine.
  OpenBrowserWithOpts1();
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.CurrentBrowser.Navigate("https://bearstore-testsite.smartbear.com/");
  //Checks whether the 'contentText' property of the Aliases.browser.pageShop.sectionContent.textnodeWelcomeToOurStore object equals 'Welcome to our store.'.
  aqObject.CheckProperty(Aliases.browser.pageShop.sectionContent.textnodeWelcomeToOurStore, "contentText", cmpEqual, "Welcome to our store.");
  //Closes the 'BrowserWindow' window.
  Aliases.browser.BrowserWindow.Close();
}