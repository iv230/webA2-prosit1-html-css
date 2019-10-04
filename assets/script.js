class Slider {
    constructor(element) {
        this.element = $(element);
        console.log("Element is " + this.element);
        this.slides = this.element.find(".slide-image").toArray();
        console.log(this.slides.length + " images loaded");
    }

    slide(index) {
        this.element.animate({"left" : (index === 0) ? 0 : "-=100vw"}, 1000);
        this.timeout = setTimeout(() => {
            this.slide((index + 1 > this.slides.length - 1) ? 0 : index + 1);
        }, 2000);
        console.log("SLIIIIIIIIIIDE " + index);
    }

    stop() {
        clearTimeout(this.timeout);
    }
}

$(() => {
    $(".slider").each((index, element) => {
        console.log("An element is " + element)
        new Slider(element).slide(0);
    });
})