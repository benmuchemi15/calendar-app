$(document).ready(function () {
    //current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")); 
    //assign saveBtn 
    $(".saveBtn").on("click", function () {
        var txt = $(this).siblings(".description").val(); 
        var times = $(this).parent().attr("id"); 

        //set items in local storage.
        localStorage.setItem(times, txt);
    })

    function timeTrack() {
        
        var eachHr = moment().hour(); 

        
        $(".time-block").each(function () {
            var eachTime = parseInt($(this).attr("id").split("hr")[1]);
            console.log( eachTime, eachHr)

            
            if (eachTime < eachHr) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (eachTime === eachHr) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }


    //saved data from LocalStorage 
    $("#hr8 .description").val(localStorage.getItem("hr8"));
    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
    $("#hr16 .description").val(localStorage.getItem("hr16"));
    $("#hr17 .description").val(localStorage.getItem("hr17"));

    
    timeTrack(); 
})