!(function () {
    class Nav {
        constructor(hostElem) {
            this.hostElem = hostElem;
            this.openBtn = hostElem.querySelector('#open');
            this.closeBtn = hostElem.querySelector('#close');
            this.setupListeners();
        }

        setupListeners() {
            this.openBtn.addEventListener('click', openNav.bind(this));
            this.closeBtn.addEventListener('click', closeNav.bind(this));

            function openNav(e) {
                this.hostElem.classList.add('show-nav');
            }

            function closeNav(e) {
                this.hostElem.classList.remove('show-nav');
            }
        }
    }

    var container = document.querySelector('.container');
    new Nav(container);
})();
