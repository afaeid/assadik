function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  a = ul.getElementsByTagName('a');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < a.length; i++) {
    li = a[i].getElementsByTagName("li")[0];
    txtValue = li.textContent || li.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

var contentVideo = document.querySelector('.content_video');
var firstVideo = document.querySelector('#myUL a');
var contentLists = document.querySelectorAll('#myUL a');
window.addEventListener('load',()=> {
  contentVideo.src = firstVideo.dataset.videolink;
})
contentLists.forEach((item,index) => {
 var videoSrc = item.dataset.videolink;
  item.addEventListener('click', ()=>{
 contentVideo.src = videoSrc;
  item.style.background = 'var(--active-bg-color)'
 removeActive(index);
  })
})
function removeActive(index1){
  contentLists.forEach((item, index2)=> {
 if(index1 != index2){
   item.style.background = '#fff'
 } 
  })
}
