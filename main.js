
function button() {
  alert("Work is going on right now")
}



  
  let nav = document.querySelector('.nav-background');
  
  window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
      nav.classList.add('on-scroll');
    }
    else{
      nav.classList.remove('on-scroll');
  
    }
  }
  
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
      else {
        entry.target.classList.remove("show");
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((element) => observer.observe(element));





  