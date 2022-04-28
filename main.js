let
    shareIcon = document.querySelector('.profile button');
    shareBox = document.querySelector('.share');

    shareIcon.addEventListener( 'click' , function (){
        if (this.parentElement.classList.contains('hide')){
            this.parentElement.classList.remove('hide');
            shareBox.classList.toggle('active');
        } else {
            shareIcon.parentElement.classList.add('hide');
            shareBox.classList.toggle('active');
        }
    });