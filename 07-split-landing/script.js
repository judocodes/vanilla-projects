(function () {
    class PageExpander {
        constructor(element, host, className) {
            this.element = element;
            this.className = className;
            this.host = host;
            this.addListener();
        }

        addListener() {
            this.element.addEventListener('mouseenter', expandPage.bind(this));
            this.element.addEventListener('mouseleave', expandPage.bind(this));

            function expandPage(e) {
                this.host.classList.toggle(this.className);
            }
        }
    }

    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var host = document.querySelector('.container');

    new PageExpander(left, host, 'expand-left');
    new PageExpander(right, host, 'expand-right');
})();
