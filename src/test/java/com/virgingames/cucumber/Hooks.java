package com.virgingames.cucumber;

import com.cucumber.listener.Reporter;
import com.virgingames.basepage.BasePage;
import com.virgingames.browserselector.BrowserSelector;
import com.virgingames.loadproperty.LoadProperty;
import com.virgingames.utility.Utility;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;


import java.io.IOException;
import java.util.concurrent.TimeUnit;

/**
 * Created By Bhavesh
 */
public class Hooks extends BasePage {

    // object creation for calling browser and base Url

    BrowserSelector browserSelector = new BrowserSelector();
    LoadProperty loadProperty = new LoadProperty();

    String baseUrl = loadProperty.getProperty("baseUrl");

    String browser = loadProperty.getProperty("browser");

    @Before
    // belwo method is to open the browser
    public void openBrowser(){

        browserSelector.selectBrowser(browser);
        driver.manage().window().maximize();
        driver.get(baseUrl);
        driver.manage().timeouts().implicitlyWait(70, TimeUnit.SECONDS);
        Reporter.assignAuthor("Best in Testing", "Bhavesh Patel");
    }

    @After

    // below method is to quit browser and takes screenshots if test fails
    public void tearDown(Scenario scenario){
        if(scenario.isFailed()){
            String screenShotPath = Utility.getScreenshot(driver, scenario.getName().replace(" ", "_"));
            try {
                Reporter.addScreenCaptureFromPath(screenShotPath);
            } catch (IOException e) {
                e.printStackTrace();
            }

        }
        driver.quit();
    }
}
