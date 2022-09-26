function ON(){
    let OFFIMG=document.getElementById('OFFIMG')
    if( OFFIMG.src.match("./imges/OFF.png") ){
        OFFIMG.src ='./imges/ON.png'
    }
    
}

function OFF(){
    let OFFIMG=document.getElementById('OFFIMG')
    if( OFFIMG.src.match("./imges/ON.png") ){
        OFFIMG.src ='./imges/OFF.png'
    }
}