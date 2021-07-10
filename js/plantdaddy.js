function update(previewPic){
  	document.getElementById('image').style.backgroundImage="url("+previewPic.src+")";
  	document.getElementById('image').innerHTML = previewPic.alt;
 }


function undo(previewPic){
    document.getElementById('image').style.backgroundImage= "";
    document.getElementById('image').innerHTML = 'Click an image below to display here!';
 }