$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/virgingames/resources/featurefile/login.feature");
formatter.feature({
  "line": 2,
  "name": "Login functionality",
  "description": "As a user I want to login into virgin games website",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 20961797900,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Verify that user should navigate to login page",
  "description": "",
  "id": "login-functionality;verify-that-user-should-navigate-to-login-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I should navigate to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 833692700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 15133297200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iShouldNavigateToLoginPage()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.after({
  "duration": 5972592000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid email id into email field\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password into password field\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "errorMessage"
      ],
      "line": 18,
      "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "Please try again, your username/email or password has not been recognised"
      ],
      "line": 19,
      "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 13441502800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I enter invalid email id into email field\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid password into password field\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the error message \"Please try again, your username/email or password has not been recognised\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 89900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 24804462900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidEmailIdIntoEmailField()"
});
formatter.result({
  "duration": 69169015400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidPasswordIntoPasswordField()"
});
formatter.result({
  "duration": 1197166100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1455694300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Please try again, your username/email or password has not been recognised",
      "offset": 32
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 986530000,
  "status": "passed"
});
formatter.after({
  "duration": 10137087100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 21,
  "name": "Verify the error message with empty credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-empty-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 22,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter invalid email id into email field\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I leave password field blank",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message for both credential required \"\u003cerrorMessage\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-empty-credentials;",
  "rows": [
    {
      "cells": [
        "errorMessage"
      ],
      "line": 29,
      "id": "login-functionality;verify-the-error-message-with-empty-credentials;;1"
    },
    {
      "cells": [
        "Both your username and password are required"
      ],
      "line": 30,
      "id": "login-functionality;verify-the-error-message-with-empty-credentials;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 18893304800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify the error message with empty credentials",
  "description": "",
  "id": "login-functionality;verify-the-error-message-with-empty-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I enter invalid email id into email field\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I leave password field blank",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should see the error message for both credential required \"Both your username and password are required\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 74500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginLink()"
});
formatter.result({
  "duration": 27542002200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iEnterInvalidEmailIdIntoEmailField()"
});
formatter.result({
  "duration": 2724306300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iLeavePasswordFieldBlank()"
});
formatter.result({
  "duration": 41600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 1408868800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Both your username and password are required",
      "offset": 61
    }
  ],
  "location": "LoginSteps.iShouldSeeTheErrorMessageForBothCredentialRequired(String)"
});
formatter.result({
  "duration": 1506201100,
  "status": "passed"
});
formatter.after({
  "duration": 3578705700,
  "status": "passed"
});
});