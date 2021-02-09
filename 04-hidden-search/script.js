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

            function toggleSearchbar() {
                this.hostElem.classList.toggle('search-active');
                this.search.focus();
            }
        }
    }

    new Search(document.querySelector('.container'));
})();
