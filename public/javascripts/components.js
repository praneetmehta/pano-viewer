//A-frame component for cursor enter and leave action listener
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    //cursor enter
    this.el.addEventListener('mouseenter', function (evt) {
        //display the hotspot holder
      $("#marker_prop_holder").css({
        'opacity':'1',
        'z-index': '999'
      });
      $('#upload').css({
        display:'inline-block'
      });
      document.onmousemove = getCursorXY;
      function getCursorXY(e) {
      var x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
      var y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
      $('#img').css({
        left:x+'px',
        top:y+'px'
      });
          $('#img').mouseover(function(){
        $('#img').css({
            width: '160px',
            height: '120px'
        });
        $('#marker_img').css({
            width: '160px',
            height: '120px'
        })
    });
    $('#img').mouseout(function(){
        $('#img').css({
            width: '80px',
            height: '60px'
        });
        $('#marker_img').css({
            width: '80px',
            height: '60px'
        })
    });
      }
      
      // info = string(imageName + ____ + text)
      var info = $(this).html().split('____');
      console.log(info);
      //set hotspot image and text
      $('#marker_img').attr("src", '/project_images/'+info[0]);
      $('#marker_txt').html(info[1]);

    });
    //cursor leave
    this.el.addEventListener('mouseleave', function (evt) {
        //hide the hotspot holder
      $("#marker_prop_holder").css({
        'opacity':'0',
        'z-ndex': '999'
      });
      $('#upload').css({
        display:'inline-block'
      });
      //remove hotspot image from the holder
      $('#marker_img').attr("src", ' ');
      $('#marker_txt').html(' ');
    });
    
  }
});