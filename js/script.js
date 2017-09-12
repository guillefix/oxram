$(document).ready(function() {
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    // console.log("HI");
    // Avoid following the href location when clicking
    event.preventDefault();
    // Avoid having the menu to close when clicking
    event.stopPropagation();
    // If a menu is already open we close it
    //$('ul.dropdown-menu [data-toggle=dropdown]').parent().removeClass('open');
    // opening the one you clicked on
    $(this).parent().addClass('open');

    var menu = $(this).parent().find("ul");
    console.log(menu);
    var menupos = menu.offset();

    if ((menupos.left + menu.width()) + 30 > $(window).width()) {
        var newpos = - menu.width();
    } else {
        var newpos = $(this).parent().width();
    }
    menu.css({ left:newpos });

    });

    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') && !$(e.target).is('.dropdown-toggle') && !$(e.target).is('#various-processesLink') ) {
            $(this).collapse('hide');
        }
    });

    var tooltip = $('<div/>').qtip({
      id: 'fullcalendar',
      prerender: true,
      content: {
        text: ' ',
        title: {
          button: true
        }
      },
      position: {
        my: 'bottom center',
        at: 'top center',
        target: 'event',
        viewport: $('#fullcalendar'),
        adjust: {
          mouse: false,
          scroll: false
        }
      },
      show: false,
      hide: false,
      style: 'qtip-bootstrap'
    }).qtip('api');

    $('#calendar').fullCalendar({

      googleCalendarApiKey: "AIzaSyClnQp8hjs6HEu-PKP0Sa71NbJn_qb2L-8",
      events: {
            googleCalendarId: 'oxford3dprinting@gmail.com'
        },
      eventClick: function( data, event, view ) {
        event.preventDefault();
        window.open(data.url, '_blank');
        console.log(data);
      },
      eventMouseover: function(data,event,view) {
        var content
        if (data.allDay) {
          content = (data.location && '<p><b>Location: </b> '+data.location+'</p>');
        } else {
          content = '<p><b>Start:</b> '+data.start.format("MMMM Do YYYY, h:mm a")+'<br />' +
   				(data.end && '<p><b>End:</b> '+data.end.format("MMMM Do YYYY, h:mm a")+'</p>' || '')
           +(data.location && '<p><b>Location: </b> '+data.location+'</p>' || '');
        }

          // + '<p><a href="'+data.url+'">Google calendar</a></p>';

  			tooltip.set({
          'content.title': data.title,
  				'content.text': content
  			})
        .show(event);
  			// .reposition(event).show(event);
  		},
      eventMouseout: function(data,event,view) { tooltip.elements.tooltip.hide(0) },
      // dayClick: function() { tooltip.hide() },
  		// eventResizeStart: function() { tooltip.hide() },
  		// eventDragStart: function() { tooltip.hide() },
  		// viewDisplay: function() { tooltip.hide() },
    });
$("#register").on("click", function() {
  email = $("#emailInput").val();
  // console.log($.get("https://maker.ifttt.com/trigger/ox3dp/with/key/dxjeJ1cCPHSh38dH3pN_hT?value1="+email));
  function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
  }
  console.log(httpGet("https://maker.ifttt.com/trigger/ox3dp/with/key/dxjeJ1cCPHSh38dH3pN_hT?value1="+email));
//   $.ajax({
//   // method: "GET",
//   url: "https://maker.ifttt.com/trigger/ox3dp/with/key/dxjeJ1cCPHSh38dH3pN_hT",
//   data: { "value1": email }
// }).done(function( msg ) {
//     console.log( "Data Saved: " + msg );
//   });

});

});



// 	$("#POSTtest").on("click", function() {
// 		var myCookie = readCookie("testCookie");
// 		$.post("/", {"testdata": myCookie});
// 	})
//
//
//     $(".design-btn").on("click", function(e) {
//         e.preventDefault();
//         console.log($(this).attr("id"));
//         var ajaxURL = '/ajax/design';
//         $.getJSON(ajaxURL, {"customerID": "1234", "designID": $(this).attr("id"), "fileURL": $(this).attr("href")}, function(data){
//         console.log("got data");
//         console.log(data);
//         });
//         updateStatus($(this).next(), "NewOrder");
//     });
// //obj = $("#design1").next() for each of the designs "designID"
// function updateStatus(obj, status) {
// 	function func1() {
// 		obj.html("Printing");
// 		setTimer(obj, 10, {0: function() {obj.html("Finished")}});
// 	}
// 	function func2() {
// 		obj.html("Finished");
// 	}
// 	switch (status) {
// 		case "Printing":
// 			obj.html(status);
// 			//javascript timer
// 			setTimer(obj, 60, {});
// 			break;
// 		case "NewOrder":
// 			obj.html("Searching for printer");
// 			window.setTimeout(func1, 40000);//42seconds
// 			window.setTimeout(func2, 50000);//42+10
// 			//obj.html("Searching for printer");
// 			break;
// 		case "Finished":
// 		case "Error":
// 			obj.html(status);
// 	}
//
// }
//
// //window.setTimeout(updateStatus($("#design1").next(), "Printing"), 2000);
//
//    function display( obj, str ) {
//
//     obj.html("Printing "+str);
//   }
//
//   function toMinuteAndSecond( x ) {
//     return Math.floor(x/60) + ":" + x%60;
//   }
//
//   function setTimer( obj, remain, actions ) {
//     (function countdown() {
//        display(obj, toMinuteAndSecond(remain));
//        actions[remain] && actions[remain]();
//        (remain -= 1) >= 0 && setTimeout(arguments.callee, 1000);
//     })();
//   }
//
//
//    //COOKIES
//
//    function createCookie(name,value,days) {
//     if (days) {
//         var date = new Date();
//         date.setTime(date.getTime()+(days*24*60*60*1000));
//         var expires = "; expires="+date.toGMTString();
//     }
//     else var expires = "";
//     document.cookie = name+"="+value+expires+"; path=/";
// }
//
// function readCookie(name) {
//     var nameEQ = name + "=";
//     var ca = document.cookie.split(';');
//     for(var i=0;i < ca.length;i++) {
//         var c = ca[i];
//         while (c.charAt(0)==' ') c = c.substring(1,c.length);
//         if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
//     }
//     return null;
// }
//
// function eraseCookie(name) {
//     createCookie(name,"",-1);
// }
//
// $("#createCookie").on("click", function() {
// 	var cookieData = $("#cookieTest").val();
// 	createCookie('testCookie', cookieData, 1);
// 	$("#createdCookie").html("Created Cookie!");
// });
