
/*
student version with NO assertion tests or refactoring implemented
*/
const max = 1000;   // Set upper bounds
const min = 0;      // Set lower bounds
let check4prime;    // global object

class Check4Prime {
    /*
    Calculates prime numbers and put true or false in an array
    */
    primeCheck(num) {
        // Initialize array to hold prime numbers
        let primeBucket = new Array(max + 1);

        // Initialize all elements to true, non-primes will be set to false later
        for (let i = 2; i <= max; i++) {
            primeBucket[i] = true;
        }

        // Do all multiples of 2 first
        let j = 2;
        for (let i = j+j; i <= max; i = i+j) { // start with 2j as 2 is prime
            primeBucket[i] = false; // set all multiples of 2 to false
        }

        for (j = 3; j <= max; j = j+2) { // begin from 3 up to max
            if (primeBucket[j] == true) { // only do if primeBucket[j] is still a prime (not a multiple of 3, 5, 7, ...)
                for (let i = j+j; i <= max; i = i+j) { // start with 2j as j is a prime
                    primeBucket[i] = false; // set all multiples of the prime to false
                }
            }
        }

        // Check input against prime array
        if (primeBucket[num] == true) {
            return true;
        }
        else {
            return false;
        }
    }


    /*
    Method to validate input
    */
    checkArgs() {
        /*
        for (var i=0; i < arguments.length; i++)
            console.log(arguments[i]);
        */

        // Check arguments for correct number of parameters if not throw new Error();
        if (arguments.length != 1) {

        }
        else 
        {
            // If undefined throw new Error();

            // If zero/empty throw new Error();

            // Is not integer? throw new Error();

            // Get integer from character

            // If not a number throw new Error();

            // If less than lower bounds throw new Error();
 
            // If greater than upper bounds throw new Error();

        }
    }
} // end Check4Prime class



/*
do the automated tests cases when developer performs test
*/
function checkTest(num)
{
    check4prime = new Check4Prime();
    // run various automated tests
    test_Check4Prime_known_true();
    test_Check4Prime_known_false();
    test_Check4Prime_checkArgs_neg_input();
    test_Check4Prime_checkArgs_above_upper_bound();
    test_Check4Prime_checkArgs_char_input();
    test_Check4Prime_checkArgs_2_inputs();
    test_Check4Prime_checkArgs_zero_input();
    test_Check4Prime_checkArgs_undefined_input();
    test_Check4Prime_checkArgs_non_integer_input();
}
/*
do the check for prime when ordinary user is running solution, you can merge this function with checkTest() if you want
*/
var runOnce = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            checkTest();
        }
    };
})();
function check(num)
{
    check4prime = new Check4Prime();
    try {
        runOnce();
        // check4prime.checkArgs(num);
        check4prime.checkArgs(parseInt(num));
        // either use this assertion or the alert box for output
        var description = `Is number ${num} a prime? ${check4prime.primeCheck(num)}` ;
        assert(check4prime.primeCheck(num), description)
        // alert(`Is number ${num} a prime? ${check4prime.primeCheck(num)}`)
    }
    catch (err) {
        let descriptionerr = `Input/number: ${num}.`;
        assert(check4prime.primeCheck(num), descriptionerr);
    }
}


/*
append test result in list on web page 
*/
function assert(outcome, description) {
    var li = document.createElement('li'); 
    li.className = outcome ? 'pass' : 'fail'; 
    li.appendChild( document.createTextNode( description ) ); 
  
    output.appendChild(li); 
}

/*
Test methods, recommended naming convention
(Test)_MethodToTest_ScenarioWeTest_ExpectedBehaviour
In test method the pattern we use is "tripple A"
Arrange, Act and Assert
*/


// Test case 1, check known true primes
function test_Check4Prime_known_true() {
    // The arrangement below is called tripple A
	
	// Arrange - here we initialize our objects
    check4prime = new Check4Prime();
    // Act - here we act on the objects
    const array = [3, 17, 29, 997]
    
    array.forEach(num => assert(check4prime.primeCheck(num) == true , `Test for know true primes with: ${num}`));
    
    // Assert - here we verify the result

}

// Test case 2, check known false primes
function test_Check4Prime_known_false() {
    check4prime = new Check4Prime();

    const array = [0,4,27,49];
    array.forEach(num => assert(check4prime.primeCheck(num) == false, `Test for know false primes with: ${num}`));
}

// Test case 3, check negative input
function test_Check4Prime_checkArgs_neg_input() {
    check4prime = new Check4Prime();
    const num = -1;
    
    assert(check4prime.primeCheck(num) == false, `Test for negative input: ${num}`);
}

// Test case 4, check for upper bound limit
function test_Check4Prime_checkArgs_above_upper_bound() {
    check4prime = new Check4Prime();
    const num = 10001;

    assert(check4prime.primeCheck(num) == false, `Test for upper bound limit: ${num}`);
}

// Test case 5, check for char input
function test_Check4Prime_checkArgs_char_input() {
    check4prime = new Check4Prime();
    const char = "r";

    assert(check4prime.primeCheck(char) == false, `Test for char input: ${char}`);
}

// Test case 6, check for more than one input
function test_Check4Prime_checkArgs_2_inputs() {
    check4prime = new Check4Prime();
    const num = [5, 99];
    assert(check4prime.primeCheck(num) == false, `Test for more than one input: ${num}`);
}

// Test case 7, check for zero/empty input
function test_Check4Prime_checkArgs_zero_input() {
    check4prime = new Check4Prime();
    assert(check4prime.primeCheck() == false, `Test for empty input:`);
}

// Test case 8, check for undefined input
function test_Check4Prime_checkArgs_undefined_input() {
    check4prime = new Check4Prime();
    var num;
    assert(check4prime.primeCheck(num) == false, `Test for undefined input: ${num}`);
}

// Test case 9, check for non-integer input
function test_Check4Prime_checkArgs_non_integer_input() {
    check4prime = new Check4Prime();
    const num = 17.5;
    assert(check4prime.primeCheck(num) == false, `Test for non-integer input: ${num}`)
}