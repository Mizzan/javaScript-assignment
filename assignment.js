/*-----------------------------------------------------------------
-------------------------------------------------------------------
------------- Author Name : Mizanur Rahman ------------------------
------------- Assignmnet 3 on JavaScript Problem Solving ----------
-------------------------------------------------------------------*/

// Here is the Github repo link of the assignment
// https://github.com/Mizzan/javaScript-assignment

/*-----------------------------------------------------------------
-------------------------------------------------------------------
------------------------Problem Solving #1 ------------------------
------------------------ kilometerToMeter -------------------------
-------------------------------------------------------------------*/

function kilometerToMeter(kilometerValue) {
  if (kilometerValue <= 0) {
    // checking if it is positive number
    return "Kilometer value should be positive, Enter positive number.";
  } else if (isNaN(kilometerValue)) {
    // checking if it is a string
    return "Kilometer value should not be string, Enter valid number.";
  } else {
    // multipying 1000 meter to kilometerValue as [ 1 km = 1000 meter]
    return kilometerValue * 1000;
  }
}

// kilometerToMeter("stringCheck"); // string check
// kilometerToMeter(-23); // negative number check
// kilometerToMeter(23);  // expected result check

/*-----------------------------------------------------------------
-------------------------------------------------------------------
------------------------Problem Solving #2 ------------------------
------------------------ budgetCalculator -------------------------
-------------------------------------------------------------------*/

function budgetCalculator(numberOfWatch, numberOfPhone, numberOfLaptop) {
  var watchPrice = 50;
  var phonePrice = 100;
  var laptopPrice = 500;

  if (isNaN(numberOfWatch) || numberOfWatch <= 0) {
    //   checking if it is a string or a negative number
    return "Please enter a valid number of numberOfWatch.";
  } else if (isNaN(numberOfPhone) || numberOfPhone <= 0) {
    //   checking if it is a string or a negative number
    return "Please enter a valid number of numberOfPhone.";
  } else if (isNaN(numberOfLaptop) || numberOfLaptop <= 0) {
    //   checking if it is a string or a negative number
    return "Please enter a valid number of numberOfLaptop.";
  } else {
    return (
      //   calculating the total budget
      numberOfWatch * watchPrice +
      numberOfPhone * phonePrice +
      numberOfLaptop * laptopPrice
    );
  }
}

// budgetCalculator(5, "asd", 2); // string check
// budgetCalculator(-3, 5, 2); // negative number check
// budgetCalculator(5, 3, 2); // expected number check
