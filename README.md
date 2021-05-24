# Lab8_Starter

### Partner Names:
Beilei He, Tony Liu

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

Answer: 1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: We should not to use the unit test to test the "message" function of a messaging application. Unit testing is more focus on the individual parts of the bigger project. The "message" feature of a messaging application is the overall goal and involves many smaller features.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Answer: I think we can use unit tests to test the max message length feature. The max message length feature is one part of features of the overall messaging functionality. Therefore it is resonable to test this small feature using unit testing

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

Answer: If we set the headless to be true, Puppeteer will not open the browser window.


5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

Answer: Inside beforeAll function, add the following line:\
await page.click('img[alt="settings"]');\
This will click on the setting img and enter the settings page.

