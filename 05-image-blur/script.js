(function () {
    class BlurryLoader {
        constructor(backgroundImage, loader, url) {
            this.backgroundImage = backgroundImage;
            this.loader = loader;
            this.url = url;
            this.percentage = loader.querySelector('#percentage');
            this.load = 0;
            this.loadSpeed = 30;
            this.interval = null;

            this.getImage();
        }

        getImage() {
            var image = new Image();
            image.src = this.url;
            image.onload = assignBgImage.bind(this);

            function assignBgImage() {
                this.backgroundImage.style.backgroundImage = `url(${image.src})`;
                this.startLoad();
            }
        }

        startLoad() {
            this.interval = setInterval(
                this.loadImg.bind(this),
                this.loadSpeed
            );
        }

        setPercentage() {
            this.percentage.innerText = this.load;
            this.loader.style.opacity = 1 - this.load / 100;
        }

        setImageBlur() {
            var blurAmount = Math.round(30 - this.load / 3);
            this.backgroundImage.style.filter = `blur(${
                blurAmount > 0 ? blurAmount : 0
            }px)`;
        }

        loadImg() {
            this.load++;
            if (this.load > 99) {
                clearTimeout(this.interval);
            }
            this.setPercentage();
            this.setImageBlur();
        }
    }

    var bg = document.querySelector('.bg');
    var loader = document.querySelector('.loading-text');
    var url = 'https://picsum.photos/1400/700';
    new BlurryLoader(bg, loader, url);
})();
