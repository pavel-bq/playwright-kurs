const {test, expect} = require('@playwright/test');

test.only('Browser Playwritght Test', async ({browser})=>
{
    // plugins/coolis
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/")

    const userName = page.locator('#username');
    const userPass = page.locator("[type='password']");
    const singIn = page.locator('#signInBtn');

    await userName.type('rahulshetty');
    await userPass.type('learning');
    await singIn.click();
    console.log(await page.locator("[style*='block']").textContent());
    await expect(page.locator("[style*='block']")).toContainText('Incorrect')

    await userName.fill('');
    await userName.fill('rahulshettyacademy');

    await Promise.all([
        page.waitForURL(),
        singIn.click()
    ]);

});

test('Page Playwritght Test', async ({page})=>
{
    await page.goto("https://google.com")
    await expect(page).toHaveTitle("Google")

});