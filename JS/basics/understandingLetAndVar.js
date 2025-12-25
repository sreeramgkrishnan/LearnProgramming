/**
 *  Learn var vs let vs const and understand variable scoping
 */


const browserVersion = 'Chrome';

function getBrowserVersion() {
    if(browserVersion == 'Chrome') {
        let browserVersion = 'chrome';
        console.log(`Browser version under the block scope is ${browserVersion}`);
        
    }
    console.log(`Browser version under function scope is ${browserVersion}`);        
}

getBrowserVersion();