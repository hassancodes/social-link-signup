

(function ($) {


    "use strict";

    $.fn.extend({ 

      countdown100: function(options) {
        var defaults = {
          timeZone: "",
          endtimeYear: 0,
          endtimeMonth: 0,
          endtimeDate: 0,
          endtimeHours: 0,
          endtimeMinutes: 0,
          endtimeSeconds: 0,
        }

        var options =  $.extend(defaults, options);

        return this.each(function() {
          var obj = $(this);
          var timeNow = new Date();
          // we are subtractingg current time - endtime = timeremaining
          //  we need to store remaining time in local storage and assign it to endtime

          var tZ = options.timeZone; console.log(tZ);
          var endYear = options.endtimeYear;
          var endMonth = options.endtimeMonth;
          var endDate = options.endtimeDate;
          var endHours = options.endtimeHours;
          var endMinutes = options.endtimeMinutes;
          var endSeconds = options.endtimeSeconds;
         
          if(tZ == "") {
            
            var deadline = new Date(endYear, endMonth - 1, endDate, endHours, endMinutes, endSeconds);
            
          } 
          else {

            var deadline = moment.tz([endYear, endMonth - 1, endDate, endHours, endMinutes, endSeconds], tZ).format();
        }

          if(Date.parse(deadline) < Date.parse(timeNow)) {
            var deadline = new Date(Date.parse(new Date()) + endDate * 24 * 60 * 60 * 1000 + endHours * 60 * 60 * 1000); 
          }
          

          
          console.log(deadline)
          let t_serialized = JSON.stringify(deadline);
          localStorage.setItem("myObj",t_serialized)
          let rec_t = JSON.parse(localStorage.getItem("myObj"))
          deadline = rec_t
          initializeClock(deadline);

          function getTimeRemaining(endtime) { 
            var t = Date.parse(endtime) - Date.parse(new Date());
            // console.log(t)
            
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
              'total': t,
              'days': days,
              'hours': hours,
              'minutes': minutes,
              'seconds': seconds
            };
          }

          function initializeClock(endtime) { 
            var daysSpan = $(obj).find('.days');
            var hoursSpan = $(obj).find('.hours');
            var minutesSpan = $(obj).find('.minutes');
            var secondsSpan = $(obj).find('.seconds');

            function updateClock() { 

              var t = getTimeRemaining(endtime);
              // let t_serialized = JSON.stringify(t);
              // localStorage.setItem("myObj",t_serialized)
              // let rec_t = JSON.parse(localStorage.getItem("myObj"))
              // console.log(rec_t);



              daysSpan.html(t.days);
              hoursSpan.html(('0' + t.hours).slice(-2));
              minutesSpan.html(('0' + t.minutes).slice(-2));
              secondsSpan.html(('0' + t.seconds).slice(-2))

              if (t.total <= 0) {
                clearInterval(timeinterval);
              }
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
            // console.log("this is time:" ,timeinterval);
          }

          


        });
      }
    });

    

})(jQuery);