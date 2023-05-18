# May 18

- robots.txt: think of like a .gitignore, tells the robot to ignore some paths, robot goes to the welcome page then searches through any links on it
- sitemap.xml, listed links are really important (promoted links which promotes it in the search results above other pages on the site), at a news site there will be a lot more; as well looks at the most recent dates
- reindexing happens every 6 months or year, so may need to wait for the site to appear at that point; if use google analytics it will initiate an indexing

- cdn and local javascript code, only loads when the page is loaded on the webrowser
- these scripts are not immediately invoked, some are immediately invoked, but usually they will need to be activated by calling a function in it; this would be the case for Google analytics
- plausible analytics doesn't do as much tracking as google analytics
- all of the `meta` tags on the prediabtes.guide site are search engine optimizations
- in the activation event there will be an array of events, so after the defered code is loaded, then the activation code will actually activate it even though it does not have a defer