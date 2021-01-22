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

// kilometerToMeter("stringCheck");
// kilometerToMeter(-23);
// kilometerToMeter(23);
