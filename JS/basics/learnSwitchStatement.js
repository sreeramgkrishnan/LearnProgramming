/**
 * Write a JavaScript function that evaluates 
 * a student's score and
 * returns their grade using a switch statement
 * to assess score ranges.
 */

function calculateGrade(score) {
    
    switch (true) {
        case score >= 90:
            console.log(`Grade is A+`);
            break;
        case score >= 80 && score < 90:
            console.log(`Grade is A-`);
            break;    
        case score >= 75 && score < 80:
            console.log(`Grade is B+`);
            break;        
        case score >= 65 && score < 75:
            console.log(`Grade is B-`);
            break;            
        case score >= 60 && score < 65:
            console.log(`Grade is C+`);
            break;            
        case score >= 50 && score < 60:
            console.log(`Grade is C-`);
            break;                
        case score >= 40 && score < 50:
            console.log(`Grade is D`);
            break;            
        case score < 40:
            console.log(`Grade is F`);
            break;            
        default:
            console.log('Invalid score')
            break;
    }
}

let score = 55;
calculateGrade(score);