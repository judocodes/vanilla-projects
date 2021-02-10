(function () {
    function ScrollIntoView(element) {
        this.element = element;
        this.threshold = 0.5;
        this.observeElement();
    }

    ScrollIntoView.prototype = {
        observeElement() {
            var observer = this.getObserver();
            observer.observe(this.element);
        },
        getObserver() {
            var options = {
                rootMargin: '0% 2000% 0% 2000%',
                threshold: this.threshold,
            };
            return new IntersectionObserver(
                this.checkIfInView.bind(this),
                options
            );
        },
        checkIfInView(entries, observer) {
            entries.forEach(checkIfIntersecting.bind(this));

            function checkIfIntersecting(entry) {
                if (entry.isIntersecting) {
                    this.element.classList.add('show');
                } else {
                    this.element.classList.remove('show');
                }
            }
        },
    };

    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function applyScrollIntoView(box) {
        new ScrollIntoView(box);
    });
})();
