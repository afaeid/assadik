var navBar = document.querySelector('.nav-links');
function openMenu(){
  navBar.style.left = '0';
}
function closeMenu(){
  navBar.style.left = '-50%'
}
var latestVid = document.querySelector('.latest_video');
var latestVidDes = document.querySelector('.latest-vid-des');
latestVid.src = 'https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fassadikofficial%2Fvideos%2F1561043297729099%2F&show_text=false&width=476&t=0';

latestVidDes.innerHTML = 'সুরা ইয়াসিন | উমর হিশাম আল আরাবি; আয়াতঃ ১-১০'
