function animateName(element) {
    element.classList.add("clicked");
    setTimeout(() => {
        element.classList.remove("clicked");
    }, 1000);
}
