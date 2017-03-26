    // create the hotspot with the attributes
    function createmarker(){
        var b = document.createElement("a-sphere");
        var cursor = document.querySelector("a-cursor");

        var cursor_pos = new THREE.Vector3().copy(cursor.object3D.getWorldPosition()); // get cursor's world position

        b.setAttribute("position", {
            "x" : cursor_pos.x,
            "y" : cursor_pos.y,
            "z" : cursor_pos.z
        });
        console.log(cursor_pos);
        b.setAttribute("radius","0.07");
        b.setAttribute("click-drag", '');
        b.setAttribute("cursor-listener", true);
        b.setAttribute("color","#fff");
        //set inner html as image address and text to be later used for displaying on hover
        if(document.getElementById('marker_image').files.item(0)){
            b.innerHTML = document.getElementById('marker_image').files.item(0).name +'____' +$('#marker_text').val();
            console.log(document.getElementById('marker_image').files.item(0).name);
        }else{
            b.innerHTML = '____' +$('#marker_text').val();
        }
        
        var a = document.getElementById('aframe-scene');
        a.appendChild(b);
        $('#upload')[0].reset();
    }
    //remove the last created hotspot
    function removemarker(){
        console.log($('#enti').attr('position'));
        if($('#aframe-scene').children().last().prop("tagName") == "A-SPHERE"){
            $('#aframe-scene').children().last().remove();
        };
    }
