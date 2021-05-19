# Lab8_Starter

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

Answer: 1

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Answer: No. Unit testing is more focus on the individual parts of the bigger project. The "message" feature of a messaging application is the overall goal and involves many smaller features.

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters

Answer: No. The unit test is not for the load testing. Unit testing should focus more on the feature and funtionality of smaller parts of code.

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

Answer: If we set the headless to be true,Puppeteer will not be able to drive the browser to simulate the user interaction. 


5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?

Answer: Inside beforeAll function, add the following line:\
await page.click('img[alt="settings"]');\
This will click on the setting img and enter the settings page.

