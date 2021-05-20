describe('Basic user flow for SPA ', () => {
  beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');
    await page.waitForTimeout(500);

  });

  // test 1 is given
  it('Test1: Initial Home Page - Check for 10 Journal Entries', async () => {
    const numEntries = await page.$$eval('journal-entry', (entries) => {
      return entries.length;
    });
    expect(numEntries).toBe(10);
  });

  // test 2 is given
  it('Test2: Make sure <journal-entry> elements are populated', async () => {
    let allArePopulated = true;
    let data, plainValue;
    const entries = await page.$$('journal-entry');
    for (let i = 0; i < entries.length; i++) {
      data = await entries[i].getProperty('entry');
      plainValue = await data.jsonValue();
      if (plainValue.title.length == 0) { allArePopulated = false; }
      if (plainValue.date.length == 0) { allArePopulated = false; }
      if (plainValue.content.length == 0) { allArePopulated = false; }
    }
    expect(allArePopulated).toBe(true);
  }, 30000);

  it('Test3: Clicking first <journal-entry>, new URL should contain /#entry1', async () => {
    // implement test3: Clicking on the first journal entry should update the URL to contain “/#entry1”
    const entries = await page.$$('journal-entry');
    await entries[0].click();

    await page.waitForNavigation();
    const url = page.url();
    let eveal = url.indexOf("/#entry1") > -1;
    expect(eveal).toBe(true);
  });

  it('Test4: On first Entry page - checking page header title', async () => {
    // implement test4: Clicking on the first journal entry should update the header text to “Entry 1” 
    const title = await page.$eval('h1', (title) => {
      return title.textContent;
    });
    expect(title == "Entry 1").toBe(true);

  });

  it('Test5: On first Entry page - checking <entry-page> contents', async () => {
    let check = true;

    const title = await page.$eval('entry-page', (page) => {
      return page.entry.title;
    });
    if (title != "You like jazz?") {
      check = false;
    }

    const date = await page.$eval('entry-page', (page) => {
      return page.entry.date;
    });
    if (date != "4/25/2021") {
      check = false;
    }

    const content = await page.$eval('entry-page', (page) => {
      return page.entry.content;
    });
    if (content != "According to all known laws of aviation, there is no way a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway because bees don't care what humans think is impossible.") {
      check = false;
    }


    const img = await page.$eval('entry-page', (page) => {
      return page.entry.image;
    });
    if (img.src != 'https://i1.wp.com/www.thepopcornmuncher.com/wp-content/uploads/2016/11/bee-movie.jpg?resize=800%2C455') {
      check = false;
    }
    if (img.alt != 'bee with sunglasses') {
      check = false;
    }


    expect(check).toBe(true);

  }, 10000);

  it('Test6: On first Entry page - checking <body> element classes', async () => {
    // implement test6: Clicking on the first journal entry should update the class attribute of <body> to ‘single-entry’
    const className = await page.$eval('body', (page) => {
      return page.className;
    });

    expect(className).toBe("single-entry");
  });

  it('Test7: Clicking the settings icon, new URL should contain #settings', async () => {
    // implement test7: Clicking on the settings icon should update the URL to contain “/#settings”

    const setting = await page.$('img[alt="settings"]');
    await setting.click();
    await page.waitForNavigation();
    const url = page.url();
    let eveal = url.indexOf("/#settings") > -1;
    expect(eveal).toBe(true);

  });

  it('Test8: On Settings page - checking page header title', async () => {
    // implement test8: Clicking on the settings icon should update the header to be “Settings”
    const title = await page.$eval('h1', (title) => {
      return title.textContent;
    });
    expect(title == "Settings").toBe(true);


  });

  it('Test9: On Settings page - checking <body> element classes', async () => {
    // implement test9: Clicking on the settings icon should update the class attribute of <body> to ‘settings’
    const className = await page.$eval('body', (page) => {
      return page.className;
    });

    expect(className).toBe("settings");

  });

  it('Test10: Clicking the back button, new URL should be /#entry1', async () => {
    // implement test10: Clicking on the back button should update the URL to contain ‘/#entry1’
    await page.goBack();

    const url = page.url();
    let eveal = url.indexOf("/#entry1") > -1;
    expect(eveal).toBe(true);
  });

  // define and implement test11: Clicking the back button once should bring the user back to the home page
  it('Test11: Clicking the back button, new URL should be http://127.0.0.1:5500/', async () => {

    await page.goBack();

    const url = page.url();
    let eveal = url == 'http://127.0.0.1:5500/';
    expect(eveal).toBe(true);
  });

  // define and implement test12: When the user if on the homepage, the header title should be “Journal Entries”
  it('Test12: When the user if on the homepage, the header title should be “Journal Entries', async () => {

    const title = await page.$eval('h1', (title) => {
      return title.textContent;
    });
    expect(title == "Journal Entries").toBe(true);
  });

  // define and implement test13: On the home page the <body> element should not have any class attribute 
  it('Test13: On the home page the <body> element should not have any class attribute', async () => {

    const classLength = await page.$eval('body', (page) => {
      return page.classList.length;
    });

    expect(classLength).toBe(0);

  });

  // define and implement test14: Verify the url is correct when clicking on the second entry
  it('Test14: Clicking second <journal-entry>, new URL should contain /#entry2', async () => {
    const entries = await page.$$('journal-entry');
    await entries[1].click();

    await page.waitForNavigation();
    const url = page.url();
    let eveal = url.indexOf("/#entry2") > -1;
    expect(eveal).toBe(true);
  });

  // define and implement test15: Verify the title is current when clicking on the second entry
  it('Test15: On second Entry page - checking page header title', async () => {
    const title = await page.$eval('h1', (title) => {
      return title.textContent;
    });
    expect(title == "Entry 2").toBe(true);

  });


  // define and implement test16: Verify the entry page contents is correct when clicking on the second entry
  it('Test16: On second Entry page - checking <entry-page> contents', async () => {
    let check = true;

    const title = await page.$eval('entry-page', (page) => {
      return page.entry.title;
    });
    if (title != "Run, Forrest! Run!") {
      check = false;
    }

    const date = await page.$eval('entry-page', (page) => {
      return page.entry.date;
    });
    if (date != "4/26/2021") {
      check = false;
    }

    const content = await page.$eval('entry-page', (page) => {
      return page.entry.content;
    });
    if (content != "Mama always said life was like a box of chocolates. You never know what you're gonna get.") {
      check = false;
    }


    const img = await page.$eval('entry-page', (page) => {
      return page.entry.image;
    });
    if (img.src != 'https://s.abcnews.com/images/Entertainment/HT_forrest_gump_ml_140219_4x3_992.jpg') {
      check = false;
    }
    if (img.alt != 'forrest running') {
      check = false;
    }


    expect(check).toBe(true);

  }, 10000);

  // define and implement test17: Clicking the back button once should bring the user back to the home page
  it('Test17: Clicking the back button, new URL should be http://127.0.0.1:5500/', async () => {

    await page.goBack();

    const url = page.url();
    let eveal = url == 'http://127.0.0.1:5500/';
    expect(eveal).toBe(true);
  });



  // define and implement test18: Verify the url is correct when clicking on the third entry
  it('Test18: Clicking third <journal-entry>, new URL should contain /#entry3', async () => {
    const entries = await page.$$('journal-entry');
    await entries[2].click();

    await page.waitForNavigation();
    const url = page.url();

    let eveal = url.indexOf("/#entry3") > -1;
    expect(eveal).toBe(true);
  });

  // define and implement test19: Verify the title is correct when clicking on the third entry
  it('Test19: On third Entry page - checking page header title', async () => {
    const title = await page.$eval('h1', (title) => {
      return title.textContent;
    });
    expect(title == "Entry 3").toBe(true);

  });

  // define and implement test20: Verify the entry page contents is correct when clicking on the third entry
  it('Test20: On second Entry page - checking <entry-page> contents', async () => {
    let check = true;

    const title = await page.$eval('entry-page', (page) => {
      return page.entry.title;
    });
    if (title != "Ogres are like onions") {
      check = false;
    }

    const date = await page.$eval('entry-page', (page) => {
      return page.entry.date;
    });
    if (date != "4/27/2021") {
      check = false;
    }

    const content = await page.$eval('entry-page', (page) => {
      return page.entry.content;
    });
    if (content != "Onions have layers. Ogres have layers. Onions have layers. You get it? We both have layers.") {
      check = false;
    }


    const img = await page.$eval('entry-page', (page) => {
      return page.entry.image;
    });
    if (img.src != 'https://advancelocal-adapter-image-uploads.s3.amazonaws.com/image.syracuse.com/home/syr-media/width2048/img/entertainment_impact/photo/shrek-donkeyjpg-daa31aa2b5bedfaa.jpg') {
      check = false;
    }
    if (img.alt != 'shrek and donkey looking confused') {
      check = false;
    }


    expect(check).toBe(true);

  }, 10000);

  // define and implement test21: Clicking the back button once should bring the user back to the home page
  it('Test21: Clicking the back button, new URL should be http://127.0.0.1:5500/', async () => {

    await page.goBack();

    const url = page.url();
    let eveal = url == 'http://127.0.0.1:5500/';
    expect(eveal).toBe(true);
  });

  // define and implement test22: Verify the url is correct when clicking on the fourth entry
  it('Test22: Clicking third <journal-entry>, new URL should contain /#entry4', async () => {
    const entries = await page.$$('journal-entry');
    await entries[3].click();

    await page.waitForNavigation();
    const url = page.url();
    let eveal = url.indexOf("/#entry4") > -1;
    expect(eveal).toBe(true);
  });

});