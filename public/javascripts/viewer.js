    $(document).ready(function(){
        can = document.getElementsByClassName('a-canvas');
        $('.a-canvas').css({'transition':'all 0.4s'});
    });

    $('#project').focus(function(){
        if(this.value == 'Project Name'){
            this.value = '';
        }
    });

    sky = document.getElementsByTagName('a-entity');
    $('html').keydown(function(e){
        if(e.which == 38){
            var val = $('a-entity').attr('scale');
            var val_z = val.z;
            if(val_z<=10){
                sky[0].setAttribute('scale',{x:1,y:1,z:val_z+.05});
            }
            console.log(val_z);

        }else if(e.which == 40){
            var val = $('a-entity').attr('scale');
            var val_z = val.z;
            if(val_z >= 0.5){
                sky[0].setAttribute('scale',{x:1,y:1,z:val_z-.05});
            }
            console.log(val_z);
        }else if(e.which == 27){
            shift()
            
        }else if(e.which == 68){
            sky[0].setAttribute('scale',{x:1,y:1,z:1});

        }
    });

    function day_night(){
        if(document.getElementById('cmn-toggle-1').checked){
            $('.page-bg').css({
                background:'black'
                
            });
            $('#settings').css({
                color: 'white'

            });
            $('#project').css({
                color: 'white'
            });
            $('#project').focus(function(){
                $(this).css({
                    borderBottom: 'solid 2px #fff'
                });
            });
        }else{
            $('.page-bg').css({
                background:'white'
            });
            $('#settings').css({
                color: 'black'

            });
            $('#project').css({
                color: 'black'
            });
            $('#project').focus(function(){
                $(this).css({
                    borderBottom: 'solid 2px #111'
                });
            });
    }
}
// function pan_sphere(){
//         if(document.getElementById('cmn-toggle-2').checked){
//             sky[0].setAttribute('no-click-look-controls',{maxyaw:6.28, maxpitch:1})
//         }else{
//             sky[0].setAttribute('no-click-look-controls',{maxyaw:6.28, maxpitch:0})         
//     }
// }
    function shift(){
        can = document.getElementsByClassName('a-canvas');
        left = $('.a-canvas').css("left");
        width = $(window).innerWidth();
        height = $(window).innerHeight();
        height_reduced  =height*3/5;
        width_reduced = width*3/5;
        height_pad = height*2/5 - 40;
        if(left == '40px'){
            $('.a-canvas').css({
                    left:0,
                    top:0,
                    width:width,
                    height:height
                });
        }else{
            $('.a-canvas').css({
                    left:40,
                    top:height_pad,
                    width:width_reduced+'px',
                    height:height_reduced,
                    boxShadow:'0px 0px 10px 1px black'
                });
        }
    }

    var entity = document.querySelector('#control');
//     entity.addEventListener('componentchanged', function (evt) {
//     if (evt.detail.name === 'rotation') {
//         console.log('Entity has moved from', evt.detail.intersection, 'to', evt.detail.newData, '!');
//         var b = document.createElement("a-sphere");
//             b.setAttribute("position", {
//                 "x" : evt.detail.oldData.x,
//                 "y" : evt.detail.oldData.y,
//                 "z" : evt.detail.oldData.z
//             });
//             b.setAttribute("radius","1.25");
//             b.setAttribute("color","#EF2DFE");
//             var a = document.getElementById('aframe-scene');
//             a.appendChild(b);
//             var addedImage = b;

//   }
// });