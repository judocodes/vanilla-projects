!(function () {
    class ProgressBar {
        constructor(hostElement) {
            this.hostElement = hostElement;
            this.circles = this.hostElement.querySelectorAll('.circle');
            this.progressBar = this.hostElement.querySelector('.progress-bar');
            this.prevButton = this.hostElement.querySelector('#prev');
            this.nextButton = this.hostElement.querySelector('#next');
            this.currentPage = 1;

            this.setUpListeners();
        }

        activateCircles() {
            this.circles.forEach(highLightActiveCircles.bind(this));

            function highLightActiveCircles(circle, idx) {
                if (idx < this.currentPage) {
                    circle.classList.add('active');
                } else {
                    circle.classList.remove('active');
                }
            }
        }

        moveProgressBar() {
            var unit = 100 / (this.circles.length - 1);
            var percentage = unit * (this.currentPage - 1) + '%';
            this.progressBar.style.width = percentage;
        }

        setUpListeners() {
            this.prevButton.addEventListener('click', prevPage.bind(this));
            this.nextButton.addEventListener('click', nextPage.bind(this));

            function nextPage(e) {
                if (this.currentPage < this.circles.length) {
                    this.currentPage = this.currentPage + 1;
                }
                this.moveProgressBar();
                this.activateCircles();
                this.disableButtons();
            }

            function prevPage(e) {
                if (this.currentPage > 1) {
                    this.currentPage = this.currentPage - 1;
                }
                this.moveProgressBar();
                this.activateCircles();
                this.disableButtons();
            }
        }

        disableButtons() {
            if (this.currentPage == 1) {
                this.prevButton.disabled = true;
                this.nextButton.disabled = false;
            } else if (this.currentPage == this.circles.length) {
                this.nextButton.disabled = true;
                this.prevButton.disabled = false;
            } else {
                this.prevButton.disabled = false;
                this.nextButton.disabled = false;
            }
        }
    }

    var hostElement = document.getElementById('main');
    new ProgressBar(hostElement);
})();
