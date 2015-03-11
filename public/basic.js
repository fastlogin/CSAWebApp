
function eventCondition(bool){
  if(bool) return "Passed"
  else
    return "Coming up"
}
/*************Insert Function Name*************/
 /********************************************/

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
  $('#eboardlogin').submit( function(event){
    if($('input:first').val() == 'erichuang'){
      $('input:first').val("");
      $('#instruct').fadeToggle(600);
      $('#eboardlogin').fadeToggle(600);
      $('#dashdef').fadeToggle(600, function(){
              $('#dashwelcome').fadeToggle(600);
      $('#dash').fadeToggle(600);
      })
    }
    else{
      $('input:first').val("");
      $('#wrong').slideToggle(500).delay(1500).slideToggle(500);
    }
    event.preventDefault();
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
 })
  /********************************************/

