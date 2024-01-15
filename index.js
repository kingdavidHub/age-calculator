$(document).ready(function (){

  function ageCalc(day, month, year) {
    var currentDate = new Date();

    var targetDate = new Date(currentDate.getFullYear(), 8, 15);
    if (currentDate > targetDate) {
        targetDate.setFullYear(currentDate.getFullYear() + 1);
    }
    var timeDifference = targetDate.getTime() - currentDate.getTime();

    // Calculate the number of days remaining
    var daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    // Calculate the number of months remaining
    var monthsRemaining = targetDate.getMonth() - currentDate.getMonth() +
        (12 * (targetDate.getFullYear() - currentDate.getFullYear()));
    var age = targetDate.getFullYear() - year;


    // $("#numberSpan").text(newText);

    $("#age-num").text(age);
    $("#months-left").text(monthsRemaining);
    $("#days-left").text(daysRemaining);
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
