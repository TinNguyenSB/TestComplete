Given("user is on Login page", function (){
  Log.Message("User accessed Login page")
});

When("user login with valid credential", function (){
  Log.Message("user logged in with valid credential")
});

Then("Account page shows account info", function (){
  Log.Message("Account info displayed")
});

Then("user can click comfirm button", function (){
  Log.Message("user clicked on Confirm button")
});
