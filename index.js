$(document).ready(function (){

  function ageCalc(day, month, year) {
     // Get the current date
     const currentDate = new Date();
     const currentYear = currentDate.getFullYear();
     const birthdayThisYear = new Date(currentYear, Number(month) - 1, Number(day));
 
     // storage
     let age = 0; 
     // ! GET CURRENT AGE
     if (currentDate >= birthdayThisYear) {
         age = currentYear - year;
     } else {
         age = currentYear - Number(year) - 1;
     }
 

    // ! countdown for days left
    const diffTime = Math.abs(birthdayThisYear - currentDate);
    const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24));


    //  ! countdown for month lefts
    const monthsLeft = (Math.ceil(daysLeft / 30.44)) - 1;


    // Output the result
        $("#age-num").text(age);
        $("#months-left").text(monthsLeft);
        $("#days-left").text(daysLeft);
  }

    // SUMBIT HANDLER
  $(".input-details").on("submit", function( event ) {
    event.preventDefault();
    
    const day = $("#day").val();
    const month = $("#month").val();
    const year = $("#year").val();
    
    if(!day || !month || !year){
      console.log("All field is required");

        // show error alerts
        $(".requirement-error").css('display', 'block');
        $("input").addClass("input-error")
        $(".input-details p").addClass('error');
        $(".age-num").text("--");
      setTimeout(() => {
        $(".requirement-error").css('display', 'none');
        $("input").removeClass("input-error")
        $(".input-details p").removeClass('error');
        
      }, 1500);
    }else {
      // perform the function here


      ageCalc(day, month, year)

    }
  
  
  });
});
