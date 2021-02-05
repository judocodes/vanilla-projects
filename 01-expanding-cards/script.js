(function Module() {
  class PictureCards {
    constructor() {
      this.panels = document.querySelectorAll('.panel');
      this.addListeners();
    }

    addListeners() {
      this.panels.forEach(addListener.bind(this));

      // ***
      function addListener(panel) {
        panel.addEventListener('click', expandOnClick.bind(this));

        // ***
        function expandOnClick() {
          this.removeAllActiveClasses();
          panel.classList.add('active');
        }
      }
    }

    removeAllActiveClasses() {
      this.panels.forEach(removeActiveClass);

      function removeActiveClass(panel) {
        panel.classList.remove('active');
      }
    }
  }

  new PictureCards();
})();
