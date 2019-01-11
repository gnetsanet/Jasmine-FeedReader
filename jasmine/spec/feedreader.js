/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        it('Has all URLs defined',function(){
            allFeeds.forEach(function(aFeed) {
                url = aFeed.url;
                expect(url).toBeDefined();
                expect(url.length).not.toBe(0);
            });
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('Has all URL names defined', function() {
            allFeeds.forEach(function(aFeed) {
                urlName = aFeed.name;
                expect(urlName).toBeDefined();
                expect(urlName.length).not.toBe(0);
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {
        
        // a test that ensures the menu element is hidden by default.
        it('Menu element is hidden by default', function() {
            expect(document.body.classList.contains('menu-hidden')).toBeTruthy();
        });

        it('Menu toggles when clicked', function() {
            //Very first click, shows menu
            document.body.querySelector('.menu-icon-link').click();
            expect(document.body.classList.contains('menu-hidden')).toBe(false);

            //Second click hides menu
            document.body.querySelector('.menu-icon-link').click();
            expect(document.body.classList.contains('menu-hidden')).toBe(true);
        });
    });

    describe('Initial Entries', function() {

        //Jasmine's beforeEach
        beforeEach(function(done) {
            loadFeed(0,done);
        });

        // Check if feeds have been loaded by checking
        // there is at least one .entry class in .feed container
       
        it('Entry in a feed', function(done) {
            expect(document.body.getElementsByClassName('entry').length).toBeGreaterThan(0);
            done();
        });
    });

    // A new test suite to test new feed selection
    describe('New Feed Selection', function() {

        // Test to see if content changes on new feed selection

        var oldContent, newContent;

        beforeEach(function(done) {
            loadFeed(0, function() {
                oldContent = document.getElementsByClassName('feed')[0].innerText;
                loadFeed(3, function() {
                    newContent = document.getElementsByClassName('feed')[0].innerText;
                    done();
                });
            });
        });


        it('Feed changes content', function(done) {
            expect(oldContent != newContent).toBe(true);
            done();
        });

    });

}());
