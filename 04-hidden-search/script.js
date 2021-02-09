!(function () {
    class Search {
        constructor(hostElem) {
            this.hostElem = hostElem;
            this.button = this.hostElem.querySelector('.btn');
            this.search = this.hostElem.querySelector('.search');
            this.setupListeners();
        }

        setupListeners() {
            this.button.addEventListener('click', toggleSearchbar.bind(this));
            this.search.addEventListener('keydown', closeOnEsc.bind(this));

            function toggleSearchbar() {
                this.hostElem.classList.toggle('search-active');
                this.search.focus();
            }

            function closeOnEsc(e) {
                if (e.code != 'Escape') return;
                else this.hostElem.classList.toggle('search-active');
            }
        }
    }

    new Search(document.querySelector('.container'));
})();
