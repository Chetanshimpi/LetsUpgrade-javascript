function changeimg(){
    const im=document.getElementById("image1");
    const newimage="Ferrari.jpg";
    // console.log(im.id)
    im.src=newimage;
}

function original(){
    const im1= document.getElementById("image1");
    const newi="BMW.jpg";
    im1.src=newi;
}

function change(){
    const im2=document.getElementById("image1");
    if(im2.src.match("BMW")){
        im2.src="Ferrari.jpg";
    }
    else{
        im2.src="BMW.jpg";
    }
}