const {test, expect} = require('@playwright/test');

test('Browser Context-Validation Error login', async ({page})=>
{
   await page.goto("https://rahulshettyacademy.com/client")

   await page.locator("#userEmail").fill("paveldon@web.de")
   await page.locator("#userPassword").type("paveL#123")
   await page.locator("[value='Login']").click();

   await page.waitForLoadState('networkidle');
   const titles = await page.locator(".card-body b").allTextContents();
   
   console.log(titles)
});

test.only('Browser Context-Validation Error login', async ({page})=>
{
   await page.goto("https://rahulshettyacademy.com/client")

   await page.locator("#userEmail").fill("paveldon@web.de")
   await page.locator("#userPassword").type("paveL#123")
   await page.locator("[value='Login']").click();

   await page.waitForLoadState('networkidle');
   const titles = await page.locator(".card-body b").allTextContents();
   
   console.log(titles)
});