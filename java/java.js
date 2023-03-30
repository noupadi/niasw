function toggle(){

    var body = document.body; 
    body.id = ( body.id ) ? body.id : 'body_id'; // ffox

    body.use_custom_cursor = !body.use_custom_cursor;

    body.style.cursor = body.use_custom_cursor ? 'wait' : 'auto';
}

// function open_nav() {
//     if (document.getElementById('navigation').style.display == 'none') { 
//         document.getElementById('navigation').style.right = '0';
//         document.getElementById('navigation').style.display = 'flex'
//         document.getElementById('main-aside').style.marginBottom = '2.5vh';
//     } else {
//         document.getElementById('navigation').style.display = 'none'
//         document.getElementById('main-aside').style.marginBottom = '0';
//     }   

// }
