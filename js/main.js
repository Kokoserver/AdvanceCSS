const sections = document.querySelectorAll("section");
const options = {
  root: null, // means you are refaring to current viewport, or you can leave it
  threshold:0.25, //ranging from 0 to 1
  rootMargin:"300px"
}
const observer = new IntersectionObserver((entries, observer)=>{
  entries.forEach((entry) => {
    if(!entry.isIntersecting){
      return
    }

    console.log(entry.target);
    observer.unobserve(entry.target)
  });
}, options)

sections.forEach((section) => {
  observer.observe(section)
});
