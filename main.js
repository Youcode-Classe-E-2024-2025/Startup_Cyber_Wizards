const mainImage = document.querySelector('.mainimage');

    const thumbnails = document.querySelectorAll('.more_images img');
    
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            
            mainImage.src = this.src;
        });
    });