document.addEventListener('DOMContentLoaded', function() {
    const sections =
    document.querySelectorAll('.animate');
    const observer = new 
    IntersectionObserver( entries =>{
        entries.forEach(entry =>
        {
            (entry.isIntersecting) {
                entry.target.classList.add ('active');
                observer.unobserve(entry.target);
            }
        }
        );
    } { threshold:0.3});
    sections.forEach(section =>{ 
        observer.observe(section);

    });
});
document.addEventListener("DOMContentLoaded", ()=> {
    const textElement = 
    document.querySelector(".animated.text");
    const text =
    textElement.textContent;
    textElement.textContent="";
    let i =0;
    function type(){
        if (i< text.length){
            textElement.textContent+= text[i];
            i++
            setTimeout(type,100);

        }
    }
    type();
});