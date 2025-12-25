/**
 *  Learn if-else and switch case
 */


function launchBrowser(browserName) {
    if (browserName === 'chrome') {
        console.log(`browser is ${browserName}`);
    } else if ( browserName === 'edge') {
        console.log(`browser is ${browserName}`);
    } else if (browserName === 'safari') {
        console.log(`browser is ${browserName}`);
    } else {
        console.log(`browser is Firefox`);
    }
}

let browserName = 'chrome';
launchBrowser(browserName);

function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log(`Test type is ${testType}`);
            break;
        case "sanity" :
            case "smoke":
            console.log(`Test type is ${testType}`);
            break;
        case 'regression':
            case "smoke":
            console.log(`Test type is ${testType}`);
            break;    
        default: 
            console.log(`Test type is smoke`);
            break;
    }
}

let testType = ''
runTests(testType)