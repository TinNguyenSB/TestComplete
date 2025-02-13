function OpenBrowserWithOpts1(){
  Browsers.Item("chrome").RunOptions = "--disable-sync --no-first-run --disable-popup-blocking";
  Browsers.Item("chrome").Run();
  Sys.Browser().BrowserWindow(0).Maximize();
}

function OpenBrowserWithOpts2(){
  Browsers.Item("chrome").RunOptions = "--disable-features=PrivacySandboxAdsAPIs,PrivacySandboxEnrollment,PrivacySandboxSettings3,PrivacySandboxSettings4 --disable-sync --no-first-run";
  Browsers.Item("chrome").Run();
  Sys.Browser().BrowserWindow(0).Maximize();
}


function CloseBrowsers() {
  try {
    while (Sys.WaitBrowser("chrome", 2000).Exists)
    Sys.WaitBrowser("chrome").Close();
  } catch (error) {
    // Code that runs if there is an error
    Log.Message(error)
  }
}