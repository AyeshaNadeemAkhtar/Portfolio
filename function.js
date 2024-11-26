function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth'});
}

window.onscroll = function() {
    let button = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    {
        button.style.display = 'block';
    }
    else 
    {
        button.style.display = 'none';
    }
};