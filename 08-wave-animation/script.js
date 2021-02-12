(function () {
    class FormWave {
        constructor(formField) {
            this.formField = formField;
            this.label = this.formField.querySelector('label');
            this.wrapLettersInSpans();
        }

        wrapLettersInSpans() {
            var letters = this.label.innerText.split('');
            this.label.innerText = '';
            letters.forEach(createNodeAndAppend.bind(this));

            function createNodeAndAppend(letter, idx) {
                var span = document.createElement('span');
                span.style.transitionDelay = idx * 50 + 'ms';
                span.innerText = letter;
                this.label.appendChild(span);
            }
        }
    }

    document
        .querySelectorAll('.form-control')
        .forEach(function createFormWave(formcontrol) {
            new FormWave(formcontrol);
        });
})();
