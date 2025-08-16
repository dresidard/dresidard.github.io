function setupCarousel(selector,element) {
    const items = document.querySelectorAll(`${selector} > ${element}`);
    console.log(items + selector);
    console.log(items);
    let index = 0;

    setInterval(() => {
        items[index].classList.remove("active");
        index = (index + 1) % items.length;
        items[index].classList.add("active");
    }, 7000);
}

setupCarousel(".carousel","img");
setupCarousel(".carousel2","img");
setupCarousel(".carousel3","img");
setupCarousel(".carousel4","div");


