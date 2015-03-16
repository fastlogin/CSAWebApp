function convertArray(input){
  var result = input[0];
  for(var i = 1; i < input.length; i++){
    result += (", " + input[i])
  }
  return result;
}

function eventCondition(bool){
  if(bool) return "Passed"
  else
    return "Coming up"
}
/*************Insert Function Name*************/
 /********************************************/

$(document).ready(function(){
  $("input:checkbox").on('click', function() {
  var $box = $(this);
  if ($box.is(":checked")) {
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
})

$(document).ready(function(){
  var animating = false;
  var current;
  var currenttext;

  $('#announcedashclick').click(function(){
    if(!animating){
    animating = true;
    $('#welcometext').fadeToggle(500,function(){
      $('#dashback').fadeToggle(300);
      $('#announceedittext').fadeToggle(300, function(){
        animating = false;
      });
      currenttext = $('#announceedittext')
    });
    $('#dash').slideToggle(500, function(){
      $('#announcedash').slideToggle(300);
      current = $('#announcedash');
    });
   }
  })

  $('#famdashclick').click(function(){
    if(!animating){
    animating = true;
    $('#welcometext').fadeToggle(500,function(){
      $('#dashback').fadeToggle(300);
      $('#famedittext').fadeToggle(300, function(){
        animating = false;
      });
      currenttext = $('#famedittext')
    });
    $('#dash').slideToggle(500, function(){
      $('#famoptions').slideToggle(300);
      current = $('#famoptions');
    });
   }
  })

  $('#juiceedit').click(function(){
    if(!animating){
      animating = true;
    $('#famoptions').fadeToggle(500, function(){
      $('#juiceeditdash').fadeToggle(300, function(){
        animating = false;
      });
      current = $('#juiceeditdash');
    });
    }
  });

  $('#yellowedit').click(function(){
    if(!animating){
      animating = true;
    $('#famoptions').fadeToggle(500, function(){
      $('#yelloweditdash').fadeToggle(300, function(){
        animating = false;
      });
      current = $('#yelloweditdash');
    });
    }
  });

  $('#kellyedit').click(function(){
    if(!animating){
      animating = true;
    $('#famoptions').fadeToggle(500, function(){
      $('#kellyeditdash').fadeToggle(300, function(){
        animating = false;
      });
      current = $('#kellyeditdash');
    });
    }
  });

  $('#nancyedit').click(function(){
    if(!animating){
      animating = true;
    $('#famoptions').fadeToggle(500, function(){
      $('#nancyeditdash').fadeToggle(300, function(){
        animating = false;
      });
      current = $('#nancyeditdash');
    });
    }
  });

  $('#eventdashclick').click(function(){
    if(!animating){
    animating = true;
    $('#welcometext').fadeToggle(500,function(){
      $('#dashback').fadeToggle(300);
      $('#eventedittext').fadeToggle(300, function(){
        animating = false;
      });
      currenttext = $('#eventedittext')
    });
    $('#dash').slideToggle(500, function(){
      $('#eventoptions').slideToggle(300);
      current = $('#eventoptions');
    });
   }
  });

  $('#socialedit').click(function(){
    if(!animating){
      animating = true;
    $('#eventoptions').fadeToggle(500, function(){
      $('#socialeditdash').fadeToggle(300, function(){
        animating = false;
      });
      current = $('#socialeditdash');
    });
    }
  });

  $('#midnightedit').click(function(){
    if(!animating){
      animating = true;
    $('#eventoptions').fadeToggle(500, function(){
      $('#midnighteditdash').fadeToggle(300, function(){
        animating = false;
      });
      current = $('#midnighteditdash');
    });
    }
  });

  $('#autumnedit').click(function(){
    if(!animating){
      animating = true;
    $('#eventoptions').fadeToggle(500, function(){
      $('#autumneditdash').fadeToggle(300, function(){
        animating = false;
      });
      current = $('#autumneditdash');
    });
    }
  });

    $('#semiedit').click(function(){
    if(!animating){
      animating = true;
    $('#eventoptions').fadeToggle(500, function(){
      $('#semieditdash').fadeToggle(300, function(){
        animating = false;
      });
      current = $('#semieditdash');
    });
    }
  });

    $('#lnyedit').click(function(){
    if(!animating){
      animating = true;
    $('#eventoptions').fadeToggle(500, function(){
      $('#lnyeditdash').fadeToggle(300, function(){
        animating = false;
      });
      current = $('#lnyeditdash');
    });
    }
  });

    $('#chinaedit').click(function(){
    if(!animating){
      animating = true;
    $('#eventoptions').fadeToggle(500, function(){
      $('#chinaeditdash').fadeToggle(300, function(){
        animating = false;
      });
      current = $('#chinaeditdash');
    });
    }
  });

  $('#dashback').click(function(){
      if(!animating){
        animating = true;
        $('#dashback').fadeToggle(500);
        current.fadeToggle(500,function(){
          $('#dash').fadeToggle(300,function(){
            animating = false;
          });
        });
        currenttext.fadeToggle(500, function(){
          $('#welcometext').fadeToggle(300);
        });
      }
      });
})

$(document).ready(function(){
  $('#announcesubmit').click(function(){
    $.get('/announcement', {poster: $('#announcename').val(), content: $('#announcement').val()});
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });
})

$(document).ready(function(){
  $.get('/familiesInitJuice', function(data){
    var result = jQuery.parseJSON(data);
    $('#juiceonehead').val(convertArray(result.array[0].heads));
    $('#juiceonemembers').val(convertArray(result.array[0].members));
    $('#juiceonepoints').val(result.array[0].points);

    $('#juicetwohead').val(convertArray(result.array[1].heads));
    $('#juicetwomembers').val(convertArray(result.array[1].members));
    $('#juicetwopoints').val(result.array[1].points);

    $('#juicethreehead').val(convertArray(result.array[2].heads));
    $('#juicethreemembers').val(convertArray(result.array[2].members));
    $('#juicethreepoints').val(result.array[2].points);

    $('#juicefourhead').val(convertArray(result.array[3].heads));
    $('#juicefourmembers').val(convertArray(result.array[3].members));
    $('#juicefourpoints').val(result.array[3].points);

    $('#juicefivehead').val(convertArray(result.array[4].heads));
    $('#juicefivemembers').val(convertArray(result.array[4].members));
    $('#juicefivepoints').val(result.array[4].points);

    $('#juicesixhead').val(convertArray(result.array[5].heads));
    $('#juicesixmembers').val(convertArray(result.array[5].members));
    $('#juicesixpoints').val(result.array[5].points);

    $('#juicesevenhead').val(convertArray(result.array[6].heads));
    $('#juicesevenmembers').val(convertArray(result.array[6].members));
    $('#juicesevenpoints').val(result.array[6].points);
  });

  $('#juiceonesubmit').click(function(){
    $.get('/familiesEditJuiceOne', {heads: $('#juiceonehead').val(), members:$('#juiceonemembers').val(), points: parseInt($('#juiceonepoints').val())}, function(data){
    });
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#juicetwosubmit').click(function(){
    $.get('/familiesEditJuiceTwo', {heads: $('#juicetwohead').val(), members:$('#juicetwomembers').val(), points: parseInt($('#juicetwopoints').val())}, function(data){
    });
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#juicethreesubmit').click(function(){
    $.get('/familiesEditJuiceThree', {heads: $('#juicethreehead').val(), members:$('#juicethreemembers').val(), points: parseInt($('#juicethreepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#juicefoursubmit').click(function(){
    $.get('/familiesEditJuiceFour', {heads: $('#juicefourhead').val(), members:$('#juicefourmembers').val(), points: parseInt($('#juicefourpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#juicefivesubmit').click(function(){
    $.get('/familiesEditJuiceFive', {heads: $('#juicefivehead').val(), members:$('#juicefivemembers').val(), points: parseInt($('#juicefivepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#juicesixsubmit').click(function(){
    $.get('/familiesEditJuiceSix', {heads: $('#juicesixhead').val(), members:$('#juicesixmembers').val(), points: parseInt($('#juicesixpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#juicesevensubmit').click(function(){
    $.get('/familiesEditJuiceSeven', {heads: $('#juicesevenhead').val(), members:$('#juicesevenmembers').val(), points: parseInt($('#juicesevenpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

})

$(document).ready(function(){
  $.get('/familiesInitYellow', function(data){
    var result = jQuery.parseJSON(data);
    $('#yellowonehead').val(convertArray(result.array[0].heads));
    $('#yellowonemembers').val(convertArray(result.array[0].members));
    $('#yellowonepoints').val(result.array[0].points);

    $('#yellowtwohead').val(convertArray(result.array[1].heads));
    $('#yellowtwomembers').val(convertArray(result.array[1].members));
    $('#yellowtwopoints').val(result.array[1].points);

    $('#yellowthreehead').val(convertArray(result.array[2].heads));
    $('#yellowthreemembers').val(convertArray(result.array[2].members));
    $('#yellowthreepoints').val(result.array[2].points);

    $('#yellowfourhead').val(convertArray(result.array[3].heads));
    $('#yellowfourmembers').val(convertArray(result.array[3].members));
    $('#yellowfourpoints').val(result.array[3].points);

    $('#yellowfivehead').val(convertArray(result.array[4].heads));
    $('#yellowfivemembers').val(convertArray(result.array[4].members));
    $('#yellowfivepoints').val(result.array[4].points);

    $('#yellowsixhead').val(convertArray(result.array[5].heads));
    $('#yellowsixmembers').val(convertArray(result.array[5].members));
    $('#yellowsixpoints').val(result.array[5].points);

    $('#yellowsevenhead').val(convertArray(result.array[6].heads));
    $('#yellowsevenmembers').val(convertArray(result.array[6].members));
    $('#yellowsevenpoints').val(result.array[6].points);
  });

  $('#yellowonesubmit').click(function(){
    $.get('/familiesEditYellowOne', {heads: $('#yellowonehead').val(), members:$('#yellowonemembers').val(), points: parseInt($('#yellowonepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#yellowtwosubmit').click(function(){
    $.get('/familiesEditYellowTwo', {heads: $('#yellowtwohead').val(), members:$('#yellowtwomembers').val(), points: parseInt($('#yellowtwopoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#yellowthreesubmit').click(function(){
    $.get('/familiesEditYellowThree', {heads: $('#yellowthreehead').val(), members:$('#yellowthreemembers').val(), points: parseInt($('#yellowthreepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#yellowfoursubmit').click(function(){
    $.get('/familiesEditYellowFour', {heads: $('#yellowfourhead').val(), members:$('#yellowfourmembers').val(), points: parseInt($('#yellowfourpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#yellowfivesubmit').click(function(){
    $.get('/familiesEditYellowFive', {heads: $('#yellowfivehead').val(), members:$('#yellowfivemembers').val(), points: parseInt($('#yellowfivepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#yellowsixsubmit').click(function(){
    $.get('/familiesEditYellowSix', {heads: $('#yellowsixhead').val(), members:$('#yellowsixmembers').val(), points: parseInt($('#yellowsixpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#yellowsevensubmit').click(function(){
    $.get('/familiesEditYellowSeven', {heads: $('#yellowsevenhead').val(), members:$('#yellowsevenmembers').val(), points: parseInt($('#yellowsevenpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

})

$(document).ready(function(){
  $.get('/familiesInitKelly', function(data){
    var result = jQuery.parseJSON(data);
    $('#kellyonehead').val(convertArray(result.array[0].heads));
    $('#kellyonemembers').val(convertArray(result.array[0].members));
    $('#kellyonepoints').val(result.array[0].points);

    $('#kellytwohead').val(convertArray(result.array[1].heads));
    $('#kellytwomembers').val(convertArray(result.array[1].members));
    $('#kellytwopoints').val(result.array[1].points);

    $('#kellythreehead').val(convertArray(result.array[2].heads));
    $('#kellythreemembers').val(convertArray(result.array[2].members));
    $('#kellythreepoints').val(result.array[2].points);

    $('#kellyfourhead').val(convertArray(result.array[3].heads));
    $('#kellyfourmembers').val(convertArray(result.array[3].members));
    $('#kellyfourpoints').val(result.array[3].points);

    $('#kellyfivehead').val(convertArray(result.array[4].heads));
    $('#kellyfivemembers').val(convertArray(result.array[4].members));
    $('#kellyfivepoints').val(result.array[4].points);

    $('#kellysixhead').val(convertArray(result.array[5].heads));
    $('#kellysixmembers').val(convertArray(result.array[5].members));
    $('#kellysixpoints').val(result.array[5].points);

    $('#kellysevenhead').val(convertArray(result.array[6].heads));
    $('#kellysevenmembers').val(convertArray(result.array[6].members));
    $('#kellysevenpoints').val(result.array[6].points);
  });

  $('#kellyonesubmit').click(function(){
    $.get('/familiesEditKellyOne', {heads: $('#kellyonehead').val(), members:$('#kellyonemembers').val(), points: parseInt($('#kellyonepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#kellytwosubmit').click(function(){
    $.get('/familiesEditKellyTwo', {heads: $('#kellytwohead').val(), members:$('#kellytwomembers').val(), points: parseInt($('#kellytwopoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#kellythreesubmit').click(function(){
    $.get('/familiesEditKellyThree', {heads: $('#kellythreehead').val(), members:$('#kellythreemembers').val(), points: parseInt($('#kellythreepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#kellyfoursubmit').click(function(){
    $.get('/familiesEditKellyFour', {heads: $('#kellyfourhead').val(), members:$('#kellyfourmembers').val(), points: parseInt($('#kellyfourpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#kellyfivesubmit').click(function(){
    $.get('/familiesEditKellyFive', {heads: $('#kellyfivehead').val(), members:$('#kellyfivemembers').val(), points: parseInt($('#kellyfivepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#kellysixsubmit').click(function(){
    $.get('/familiesEditKellySix', {heads: $('#kellysixhead').val(), members:$('#kellysixmembers').val(), points: parseInt($('#kellysixpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#kellysevensubmit').click(function(){
    $.get('/familiesEditKellySeven', {heads: $('#kellysevenhead').val(), members:$('#kellysevenmembers').val(), points: parseInt($('#kellysevenpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

})

$(document).ready(function(){
  $.get('/familiesInitNancy', function(data){
    var result = jQuery.parseJSON(data);
    $('#nancyonehead').val(convertArray(result.array[0].heads));
    $('#nancyonemembers').val(convertArray(result.array[0].members));
    $('#nancyonepoints').val(result.array[0].points);

    $('#nancytwohead').val(convertArray(result.array[1].heads));
    $('#nancytwomembers').val(convertArray(result.array[1].members));
    $('#nancytwopoints').val(result.array[1].points);

    $('#nancythreehead').val(convertArray(result.array[2].heads));
    $('#nancythreemembers').val(convertArray(result.array[2].members));
    $('#nancythreepoints').val(result.array[2].points);

    $('#nancyfourhead').val(convertArray(result.array[3].heads));
    $('#nancyfourmembers').val(convertArray(result.array[3].members));
    $('#nancyfourpoints').val(result.array[3].points);

    $('#nancyfivehead').val(convertArray(result.array[4].heads));
    $('#nancyfivemembers').val(convertArray(result.array[4].members));
    $('#nancyfivepoints').val(result.array[4].points);

    $('#nancysixhead').val(convertArray(result.array[5].heads));
    $('#nancysixmembers').val(convertArray(result.array[5].members));
    $('#nancysixpoints').val(result.array[5].points);

    $('#nancysevenhead').val(convertArray(result.array[6].heads));
    $('#nancysevenmembers').val(convertArray(result.array[6].members));
    $('#nancysevenpoints').val(result.array[6].points);
  });

  $('#nancyonesubmit').click(function(){
    $.get('/familiesEditNancyOne', {heads: $('#nancyonehead').val(), members:$('#nancyonemembers').val(), points: parseInt($('#nancyonepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#nancytwosubmit').click(function(){
    $.get('/familiesEditNancyTwo', {heads: $('#nancytwohead').val(), members:$('#nancytwomembers').val(), points: parseInt($('#nancytwopoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#nancythreesubmit').click(function(){
    $.get('/familiesEditNancyThree', {heads: $('#nancythreehead').val(), members:$('#nancythreemembers').val(), points: parseInt($('#nancythreepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#nancyfoursubmit').click(function(){
    $.get('/familiesEditNancyFour', {heads: $('#nancyfourhead').val(), members:$('#nancyfourmembers').val(), points: parseInt($('#nancyfourpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#nancyfivesubmit').click(function(){
    $.get('/familiesEditNancyFive', {heads: $('#nancyfivehead').val(), members:$('#nancyfivemembers').val(), points: parseInt($('#nancyfivepoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#nancysixsubmit').click(function(){
    $.get('/familiesEditNancySix', {heads: $('#nancysixhead').val(), members:$('#nancysixmembers').val(), points: parseInt($('#nancysixpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $('#nancysevensubmit').click(function(){
    $.get('/familiesEditNancySeven', {heads: $('#nancysevenhead').val(), members:$('#nancysevenmembers').val(), points: parseInt($('#nancysevenpoints').val())}, function(data){
    })
    $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

})



$(document).ready(function(){

  $.get('/eventsInitSocial', function(data){
    var result = jQuery.parseJSON(data);
    if(result.album = 'javascript:;'){
          $('#socialalbum').val("");
    }
    else{
          $('#socialalbum').val(result.album);
    }
    if(result.passed){
      $('#socialpassed').prop("checked",true);
      $('#socialcoming').prop("checked",false);
    }
    else{
      $('#socialpassed').prop("checked",false);
      $('#socialcoming').prop("checked",true);
    }
    $('#sociald').val(result.description);
    $('#socialfbpage').val(result.page);

    $('#socialmaps').val(result.maps);
  });


  $('#socialsubmit').click(function(){
      $.get('/eventsEditSocial',{passed: $('#socialpassed').checked, description: $('#sociald').val(), page: $('#socialfbpage').val(), album: $('#socialalbum').val(), maps:$('#socialmaps').val()}, function(data){
      });
      $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $.get('/eventsInitMidnight', function(data){
    var result = jQuery.parseJSON(data);
    if(result.album = 'javascript:;'){
          $('#midnightalbum').val("");
    }
    else{
          $('#midnightalbum').val(result.album);
    }
    if(result.passed){
      $('#midnightpassed').prop("checked",true);
      $('#midnightcoming').prop("checked",false);
    }
    else{
      $('#midnightpassed').prop("checked",false);
      $('#midnightcoming').prop("checked",true);
    }
    $('#midnightd').val(result.description);
    $('#midnightfbpage').val(result.page);

    $('#midnightmaps').val(result.maps);
  });


  $('#midnightsubmit').click(function(){
      $.get('/eventsEditMidnight',{passed: $('#midnightpassed').checked, description: $('#midnightd').val(), page: $('#midnightfbpage').val(), album: $('#midnightalbum').val(), maps:$('#midnightmaps').val()}, function(data){
      });
      $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $.get('/eventsInitAutumn', function(data){
    var result = jQuery.parseJSON(data);
    if(result.album = 'javascript:;'){
          $('#autumnalbum').val("");
    }
    else{
          $('#autumnalbum').val(result.album);
    }
    if(result.passed){
      $('#autumnpassed').prop("checked",true);
      $('#autumncoming').prop("checked",false);
    }
    else{
      $('#autumnpassed').prop("checked",false);
      $('#autumncoming').prop("checked",true);
    }
    $('#autumnd').val(result.description);
    $('#autumnfbpage').val(result.page);

    $('#autumnmaps').val(result.maps);
  });


  $('#autumnsubmit').click(function(){
      $.get('/eventsEditAutumn',{passed: $('#autumnpassed').checked, description: $('#autumnd').val(), page: $('#autumnfbpage').val(), album: $('#autumnalbum').val(), maps:$('#autumnmaps').val()}, function(data){
      });
      $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $.get('/eventsInitSemi', function(data){
    var result = jQuery.parseJSON(data);
    if(result.album = 'javascript:;'){
          $('#semialbum').val("");
    }
    else{
          $('#semialbum').val(result.album);
    }
    if(result.passed){
      $('#semipassed').prop("checked",true);
      $('#semicoming').prop("checked",false);
    }
    else{
      $('#semipassed').prop("checked",false);
      $('#semicoming').prop("checked",true);
    }
    $('#semid').val(result.description);
    $('#semifbpage').val(result.page);

    $('#semimaps').val(result.maps);
  });


  $('#semisubmit').click(function(){
      $.get('/eventsEditSemi',{passed: $('#semipassed').checked, description: $('#semid').val(), page: $('#semifbpage').val(), album: $('#semialbum').val(), maps:$('#semimaps').val()}, function(data){
      });
      $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

  $.get('/eventsInitLunar', function(data){
    var result = jQuery.parseJSON(data);
    if(result.album = 'javascript:;'){
          $('#lunaralbum').val("");
    }
    else{
          $('#lunaralbum').val(result.album);
    }
    if(result.passed){
      $('#lunarpassed').prop("checked",true);
      $('#lunarcoming').prop("checked",false);
    }
    else{
      $('#lunarpassed').prop("checked",false);
      $('#lunarcoming').prop("checked",true);
    }
    $('#lunard').val(result.description);
    $('#lunarfbpage').val(result.page);

    $('#lunarmaps').val(result.maps);
  });


  $('#lunarsubmit').click(function(){
      $.get('/eventsEditLunar',{passed: $('#lunarpassed').checked, description: $('#lunard').val(), page: $('#lunarfbpage').val(), album: $('#lunaralbum').val(), maps:$('#lunarmaps').val()}, function(data){
      });
      $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

$.get('/eventsInitChina', function(data){
    var result = jQuery.parseJSON(data);
    if(result.album = 'javascript:;'){
          $('#chinaalbum').val("");
    }
    else{
          $('#chinaalbum').val(result.album);
    }
    if(result.passed){
      $('#chinapassed').prop("checked",true);
      $('#chinacoming').prop("checked",false);
    }
    else{
      $('#chinapassed').prop("checked",false);
      $('#chinacoming').prop("checked",true);
    }
    $('#chinad').val(result.description);
    $('#chinafbpage').val(result.page);

    $('#chinamaps').val(result.maps);
  });


  $('#chinasubmit').click(function(){
      $.get('/eventsEditChina',{passed: $('#chinapassed').checked, description: $('#chinad').val(), page: $('#chinafbpage').val(), album: $('#chinaalbum').val(), maps:$('#chinamaps').val()}, function(data){
      });
      $('#success').slideToggle(500).delay(1000).slideToggle(500);
  });

})

$(document).ready(function(){
  $('.aico').click(function(){
    $('#annons').slideToggle(500);
  });
})

$(document).ready(function(){
  $.get('/initAnnounce',function(data){
    var result = jQuery.parseJSON(data);
    if (result.array.length <= 0){
      $('#annons').append("<div class='announcement row row-centered'><p class='ahead'><span class='none'>No new announcements.</span></p></div>");
    }
    else for(var i = 0; i < result.array.length ; i++){
      $('#annons').append("<div class='announcement row row-centered'><p class='ahead'><span class='alabel'>Date: </span>" + result.array[i].posted + "<span class='alabel ri'>Poster: </span>" + result.array[i].poster + "<span class='alabel ri li'>" +result.array[i].comments.length +" comments</span></p><p class='acont'>"+ result.array[i].content+"</p></div>");
    }

  });

  $.get('/initEvent',function(data){
    var result = jQuery.parseJSON(data);
    
    $('#socialwin').append("<div class='col-md-6 eventconttext'><div class='eventtexthead'>"+result.array[0].name+"<p class='condition-passed'>"+eventCondition(result.array[0].passed)+"</p></div><div class='eventtextcont'>"+result.array[0].description+"</div><div class='eventtexticos'><a href='"+result.array[0].page+"'target='_blank'><span class='glyphicon glyphicon-thumbs-up eicon'></span></a><a href='"+result.array[0].album+"'><span class='glyphicon glyphicon-picture eicon'></span></a><a href='"+result.array[0].maps+"'target='_blank'><span class='glyphicon glyphicon-flag eicon'></span></a></div></div>");
    $('#mndswin').append("<div class='col-md-6 eventconttext'><div class='eventtexthead'>"+result.array[1].name+"<p class='condition-passed'>"+eventCondition(result.array[1].passed)+"</p></div><div class='eventtextcont'>"+result.array[1].description+"</div><div class='eventtexticos'><a href='"+result.array[1].page+"'target='_blank'><span class='glyphicon glyphicon-thumbs-up eicon'></span></a><a href='"+result.array[1].album+"'><span class='glyphicon glyphicon-picture eicon'></span></a><a href='"+result.array[1].maps+"'target='_blank'><span class='glyphicon glyphicon-flag eicon'></span></a></div></div>");
    $('#mafwin').append("<div class='col-md-6 eventconttext'><div class='eventtexthead'>"+result.array[2].name+"<p class='condition-passed'>"+eventCondition(result.array[2].passed)+"</p></div><div class='eventtextcont'>"+result.array[2].description+"</div><div class='eventtexticos'><a href='"+result.array[2].page+"'target='_blank'><span class='glyphicon glyphicon-thumbs-up eicon'></span></a><a href='"+result.array[2].album+"'><span class='glyphicon glyphicon-picture eicon'></span></a><a href='"+result.array[2].maps+"'target='_blank'><span class='glyphicon glyphicon-flag eicon'></span></a></div></div>");
    $('#semiwin').append("<div class='col-md-6 eventconttext'><div class='eventtexthead'>"+result.array[3].name+"<p class='condition-passed'>"+eventCondition(result.array[3].passed)+"</p></div><div class='eventtextcont'>"+result.array[3].description+"</div><div class='eventtexticos'><a href='"+result.array[3].page+"'target='_blank'><span class='glyphicon glyphicon-thumbs-up eicon'></span></a><a href='"+result.array[3].album+"'><span class='glyphicon glyphicon-picture eicon'></span></a><a href='"+result.array[3].maps+"'target='_blank'><span class='glyphicon glyphicon-flag eicon'></span></a></div></div>");
    $('#chinawin').append("<div class='col-md-6 eventconttext'><div class='eventtexthead'>"+result.array[4].name+"<p class='condition-passed'>"+eventCondition(result.array[4].passed)+"</p></div><div class='eventtextcont'>"+result.array[4].description+"</div><div class='eventtexticos'><a href='"+result.array[4].page+"'target='_blank'><span class='glyphicon glyphicon-thumbs-up eicon'></span></a><a href='"+result.array[4].album+"'><span class='glyphicon glyphicon-picture eicon'></span></a><a href='"+result.array[4].maps+"'target='_blank'><span class='glyphicon glyphicon-flag eicon'></span></a></div></div>");
    $('#gwin').append("<div class='col-md-6 eventconttext'><div class='eventtexthead'>"+result.array[5].name+"<p class='condition-passed'>"+eventCondition(result.array[5].passed)+"</p></div><div class='eventtextcont'>"+result.array[5].description+"</div><div class='eventtexticos'><a href='"+result.array[5].page+"'target='_blank'><span class='glyphicon glyphicon-thumbs-up eicon'></span></a><a href='"+result.array[5].album+"'><span class='glyphicon glyphicon-picture eicon'></span></a><a href='"+result.array[5].maps+"'target='_blank'><span class='glyphicon glyphicon-flag eicon'></span></a></div></div>");

  });

  $.get('/initJuice',function(data){
    var result = jQuery.parseJSON(data);
    
    for(var i = 0; i < result.array.length; i++){
      var heads = result.array[i].heads[0];
      var members = "";
      for(var k = 1; k < result.array[i].heads.length; k++){
        heads += (" | " + result.array[i].heads[k]);
      }
      for(var j = 0; j < result.array[i].members.length; j++){
        members += ("<p>"+result.array[i].members[j]+"</p>");
      }
      if(i < 3){
        $('#juiceone').append("<div class='col-md-4 up'><p class='points'>"+result.array[i].points+" points</p><p class='fhead'>"+heads+"</p>"+members+"</div>");
      }
      else{
        $('#juicetwo').append("<div class='col-md-3 up'><p class='points'>"+result.array[i].points+" points</p><p class='fhead'>"+heads+"</p>"+members+"</div>");
      }
    }
    
  });

  $.get('/initYellow',function(data){
    var result = jQuery.parseJSON(data);

      for(var i = 0; i < result.array.length; i++){
      var heads = result.array[i].heads[0];
      var members = "";
      for(var k = 1; k < result.array[i].heads.length; k++){
        heads += (" | " + result.array[i].heads[k]);
      }
      for(var j = 0; j < result.array[i].members.length; j++){
        members += ("<p>"+result.array[i].members[j]+"</p>");
      }
      if(i < 3){
        $('#yellowone').append("<div class='col-md-4 up'><p class='points'>"+result.array[i].points+" points</p><p class='fhead'>"+heads+"</p>"+members+"</div>");
      }
      else{
        $('#yellowtwo').append("<div class='col-md-3 up'><p class='points'>"+result.array[i].points+" points</p><p class='fhead'>"+heads+"</p>"+members+"</div>");
      }
    }
  });

  $.get('/initKelly',function(data){
    var result = jQuery.parseJSON(data);

        for(var i = 0; i < result.array.length; i++){
      var heads = result.array[i].heads[0];
      var members = "";
      for(var k = 1; k < result.array[i].heads.length; k++){
        heads += (" | " + result.array[i].heads[k]);
      }
      for(var j = 0; j < result.array[i].members.length; j++){
        members += ("<p>"+result.array[i].members[j]+"</p>");
      }
      if(i < 3){
        $('#kellyone').append("<div class='col-md-4 up'><p class='points'>"+result.array[i].points+" points</p><p class='fhead'>"+heads+"</p>"+members+"</div>");
      }
      else{
        $('#kellytwo').append("<div class='col-md-3 up'><p class='points'>"+result.array[i].points+" points</p><p class='fhead'>"+heads+"</p>"+members+"</div>");
      }
    }
  });

  $.get('/initNancy',function(data){
    var result = jQuery.parseJSON(data);

        for(var i = 0; i < result.array.length; i++){
      var heads = result.array[i].heads[0];
      var members = "";
      for(var k = 1; k < result.array[i].heads.length; k++){
        heads += (" | " + result.array[i].heads[k]);
      }
      for(var j = 0; j < result.array[i].members.length; j++){
        members += ("<p>"+result.array[i].members[j]+"</p>");
      }
      if(i < 3){
        $('#nancyone').append("<div class='col-md-4 up'><p class='points'>"+result.array[i].points+" points</p><p class='fhead'>"+heads+"</p>"+members+"</div>");
      }
      else{
        $('#nancytwo').append("<div class='col-md-3 up'><p class='points'>"+result.array[i].points+" points</p><p class='fhead'>"+heads+"</p>"+members+"</div>");
      }
    }
  });
})

/*************Splash Functions*************/
     $(document).ready(function(){
    $('#splashbutton').mouseover(function(){
      $('#drag').stop(true,true).animate({
        'opacity': '0.6',
      },400)
      $('#reflect').stop(true,true).animate({
        'opacity': '0.8',
      },400)
    })
      }
      )

          $(document).ready(function(){
    $('#splashbutton').mouseout(function(){
      $('#drag').stop(true,true).animate({
        'opacity': '1.0',
      },400)
      $('#reflect').stop(true,true).animate({
        'opacity': '0.0',
      },400)
    })
      }
      )

     $(document).ready(function(){
    $('#splashbutton').click(function(){
      $('#obliterate').fadeToggle(100, function(){
      $('.splash').delay(200).slideToggle(800)
      $('#navbar').delay(500).fadeToggle(800,function(){
        $('#iconsmain').stop(true,true).delay(600).animate({
          'opacity': '1.0'
        },800)
      })
      $('.headtext').textillate({ initialDelay: 1000,in: { effect: 'rollIn' } });


    })})})

 /********************************************/

 /*************Icon to Bar*************/
  $(document).ready(setInterval(function(){
   if($(window).scrollTop() >= 400){
    $('#icons').stop(true,false).animate({
      opacity: 1.0
    },300)
     $('#navborder').stop(true,false).animate({
      opacity: 1.0
    },300)

   }
   else{
    $('#icons').stop(true,false).animate({
      opacity: 0.0
    },300)
    $('#navborder').stop(true,false).animate({
      opacity: 0.0
    },300)
   }
   },250))
  /********************************************/

// $(document).ready(function(){
//   $('#juicebutton').load(function(){
//     var h = $('#juicebutton').height();
//     var w = $('#juicebutton').width();
//     console.log(h);
//     console.log(w);
//   })
//   $('#juicebutton').mouseover(function(){
//     $('#juicebutton').stop(true,false).animate({
//       'height': h * 0.8,
//       'width': w * 0.8
//     },400)
//   })
//   $('#juicebutton').mouseout(function(){
//     $('#juicebutton').stop(true,false).animate({
//       'height': h,
//       'width': w
//     })
//   })
// })

   /*************Insert Function Name*************/
   $(document).ready(function(){

    var juice = false;
    var yellow = false;
    var dumpling = false;
    var wanton = false;

    $('#famback').click(function(){
      $('.fambutton').delay(600).slideToggle(500);   
      $('#famback').fadeToggle(800);
      if(juice){
        $('#famcont1').slideToggle(500);
        juice = false;
      }
      if(yellow){
        $('#famcont2').slideToggle(500);
        yellow = false;
      }
      if(dumpling){
        $('#famcont3').slideToggle(500);
        dumpling = false;
      }
      if(wanton){
        $('#famcont4').slideToggle(500);
        wanton = false;
      }
    })

    $('#juicebutton').click(function(){
      $('.fambutton').slideToggle(500);  
      $('#famcont1').delay(600).slideToggle(500);  
      $('#famback').fadeToggle(800);
      juice = true;
    })

    $('#yfbutton').click(function(){
      $('.fambutton').slideToggle(500);  
      $('#famcont3').delay(600).slideToggle(500);  
      $('#famback').fadeToggle(800);
      dumpling = true;
    })

    $('#dumpbutton').click(function(){
      $('.fambutton').slideToggle(500);  
      $('#famcont2').delay(600).slideToggle(500);  
      $('#famback').fadeToggle(800);
      yellow = true;
    })

    $('#wantonbutton').click(function(){
      $('.fambutton').slideToggle(500);  
      $('#famcont4').delay(600).slideToggle(500);  
      $('#famback').fadeToggle(800);
      wanton = true;
    })

   })
    /********************************************/

    $(document).ready(function(){
      $('#socialscr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#socialwin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#socialclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#socialwin').fadeToggle(1500);
      })
    })

        $(document).ready(function(){
      $('#mndsscr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#mndswin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#mndsclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#mndswin').fadeToggle(1500);
      })
    })


    $(document).ready(function(){
      $('#mafscr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#mafwin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#mafclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#mafwin').fadeToggle(1500);
      })
    })


    $(document).ready(function(){
      $('#semiscr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#semiwin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#semiclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#semiwin').fadeToggle(1500);
      })
    })


    $(document).ready(function(){
      $('#chinascr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#chinawin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#chinaclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#chinawin').fadeToggle(1500);
      })
    })


    $(document).ready(function(){
      $('#gscr').click(function(){
        $('.eventsmain').slideToggle(500);
        $('#gwin').slideToggle(1500);
      })
    })

    $(document).ready(function(){
      $('#gclose').click(function(){
        $('.eventsmain').slideToggle(1500);
        $('#gwin').fadeToggle(1500);
      })
    })

/*************Insert Function Name*************/
$(document).ready(function(){
        $('.navbar-nav li').click(function () {
            $(this).addClass('active').siblings().removeClass('active');
        });
})

  $(document).ready(function(){
    $('#abou').click(function(){
      $('body').scrollTo('#abouthead',{duration:800,offset:-50});
      })
    })

    $(document).ready(function(){
    $('#fam').click(function(){
      $('body').scrollTo('#famhead',{duration:800,offset:-50});
      })
    })

    $(document).ready(function(){
    $('#eve').click(function(){
      $('body').scrollTo('#events',{duration:800,offset:-50});
      })
    })

        $(document).ready(function(){
    $('#con').click(function(){
      $('body').scrollTo('#contactend',{duration:800,offset:-50});
      })
    })

            $(document).ready(function(){
    $('#hom').click(function(){
      $('body').scrollTo(0,{duration:800});
      })
    })


 /********************************************/
$(document).ready(function(){
  $('#ebbutton').click(function(){
    $.get('/login', {username: $('#eblogin').val(), password: $('#ebpw').val()}, function(data){
      if(data == 'success'){
        $('#instruct').fadeToggle(600);
        $('#eboardlogin').fadeToggle(600);
        $('#dashdef').fadeToggle(600, function(){
              $('#dashwelcome').fadeToggle(600);
        $('#dash').fadeToggle(600);
        });
      }
      else{
        $('#wrong').slideToggle(500).delay(1000).slideToggle(500);
      }
    });
  });
})
 /********************************************/
 $(document).ready(function(){
  $('#eventcirc').mouseover(function(){
    $('#eventcirc').stop(true,true).animate({
      color : 'rgb(70,70,70)'
    },600)
  })
   $('#eventcirc').mouseout(function(){
    $('#eventcirc').stop(true,true).animate({
      color : 'rgb(220,85,120)'
    },600)
  })


  $('#famcirc').mouseover(function(){
    $('#famcirc').stop(true,true).animate({
      color : 'rgb(70,70,70)'
    },600)
  })
   $('#famcirc').mouseout(function(){
    $('#famcirc').stop(true,true).animate({
      color : 'rgb(115,220,245)'
    },600)
  })


  $('#newscirc').mouseover(function(){
    $('#newscirc').stop(true,true).animate({
      color : 'rgb(70,70,70)'
    },600)
  })
   $('#newscirc').mouseout(function(){
    $('#newscirc').stop(true,true).animate({
      color : 'rgb(250,200,65)'
    },600)
  })

   $('#eventcirc').click(function(){
   });
   $('#famcirc').click(function(){
   })
   $('#newscirc').click(function(){
   })
 })
  /********************************************/

