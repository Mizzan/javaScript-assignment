/*-----------------------------------------------------------------
-------------------------------------------------------------------
------------- Author Name : Mizanur Rahman ------------------------
------------- Assignmnet 3 on JavaScript Problem Solving ----------
------------- My helping buddies 👇 -------------------------------
-------------😎 Google, stackOverFlow, mdn, w3schools 😎----------
-------------------------------------------------------------------
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
// kilometerToMeter(23);  // correct expected result check

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
// budgetCalculator(5, 3, 2); // correct expected number check

/*-----------------------------------------------------------------
-------------------------------------------------------------------
------------------------ Problem Solving #3 -----------------------
------------------------ hotelCost --------------------------------
-------------------------------------------------------------------*/

function hotelCost(numberOfDayStay) {
  // declaring all the variable first
  var costOfFirstTenDays = 100; // First 10 day stay cost
  var costOfAfterTenDays = 80; // Stay cost after ten day
  var costOfAfterTwentyDays = 50; // Stay cost after twenty day

  var daysRemaining;
  var costOfRemainingDays;

  if (numberOfDayStay == null) {
    // checking if the number of days is not empty
    return "Days number should not be empty, Enter a number";
  }
  if (isNaN(numberOfDayStay)) {
    // checking if the number of days is not a string input
    return "Days number should not be a string, Enter a valid number";
  }
  if (numberOfDayStay < 0) {
    // checking if the number of days is not a negative number
    return "Days number should not be a nagative number, Enter a positive number";
  }

  if (numberOfDayStay > 20) {
    // checking if the number of days stay is greater than 20 days
    daysRemaining = numberOfDayStay - 20; // calculating the remaining days
    costOfRemainingDays = daysRemaining * costOfAfterTwentyDays; // calculating the remaining days cost

    return (
      // calculating the cost of after twenty days
      costOfRemainingDays + costOfAfterTenDays * 10 + costOfFirstTenDays * 10
    );
  } else if (numberOfDayStay <= 20 && numberOfDayStay > 10) {
    // checking if the number of days stay is less than 20 and greater than 10
    daysRemaining = numberOfDayStay - 10;
    costOfRemainingDays = daysRemaining * costOfAfterTenDays;
    // calculating the cost of after ten days
    return costOfRemainingDays + costOfFirstTenDays * 10;
  } else {
    // calculating the cost of ten days
    return numberOfDayStay * costOfFirstTenDays;
  }
}
// hotelCost(-2) // negative number check
// hotelCost('ss') // string check
// hotelCost(30) // correct expected result check

/*-----------------------------------------------------------------
-------------------------------------------------------------------
------------------------ Problem Solving #4 -----------------------
------------------------ megaFriend --------------------------------
-------------------------------------------------------------------*/

function megaFriend(namesOfFriends) {
  if (namesOfFriends.length > 0 && Array.isArray(namesOfFriends)) {
    //   checking if it an array and it is not empty
    let longestNameOfFriend = namesOfFriends[0];

    for (let i = 1; i < namesOfFriends.length; i++) {
      //   storing the names into the longestName variable
      let longestName = namesOfFriends[i];

      //   checking which name is the longest
      if (longestName.length > longestNameOfFriend.length) {
        //   reassigning the longest name into longestNameOfFriend varaible
        longestNameOfFriend = longestName;
      }
    }
    //   returing the longestNameOfFriend varaible
    return longestNameOfFriend;
  } else {
    return "Name should not be string or empty and it should be an array of names.";
  }
}
// megaFriend('ss') // string check
// megaFriend(['Raju','Sanju','Chowdhury']) // correct expected result check

/*-----------------------------------------------------------------
-------------------------------------------------------------------
---------------------------- The End  -----------------------------
-------------------------------------------------------------------
-------------------------------------------------------------------*/
