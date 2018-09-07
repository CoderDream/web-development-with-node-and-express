let Browser = require('zombie'),
    assert = require('chai').assert;

let browser;

suite('Cross-Page Tests', function () {

    setup(function () {
        browser = new Browser();
    });

    test('requesting a group rate quote from the hood river tour page should ' +
        'populate the hidden referrer field correctly', function (done) {
        let referrer = 'http://localhost:3000/tours/hood-river';
        browser.visit(referrer, function () {
            browser.clickLink('.requestGroupRate', function () {
                //
                // browser.window.$(function(){
                //     setTimeout(()=>{
                //         browser.fill('referrer', 'user');
                //         let ddd=browser.field('referrer').value;
                //         debugger;
                //     },10000);
                //
                // });
                // let b = browser.source;
                // console.log(b);
                console.log('browser:  ' + browser.field('referrer').value);
                console.log('referrer: ' + referrer);
                assert(browser.field('referrer').value === referrer);
            });

           // done();
        });
    });

    test('requesting a group rate from the oregon coast tour page should ' +
        'populate the hidden referrer field correctly', function (done) {
        let referrer = 'http://localhost:3000/tours/oregon-coast';
        browser.visit(referrer, function () {
            browser.clickLink('.requestGroupRate', function () {
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('visiting the "request group rate" page dirctly should result ' +
        'in an empty value for the referrer field', function (done) {
        browser.visit('http://localhost:3000/tours/request-group-rate', function () {
            assert(browser.field('referrer').value === '');
            done();
        });
    });

});
