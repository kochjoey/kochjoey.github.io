const image1 = document.getElementById('about-img1');
const image2 = document.getElementById('about-img2');
const image3 = document.getElementById('about-img3');
const image4 = document.getElementById('about-img4');

image1.addEventListener('mouseover', function() {
    document.getElementById('desc-1').style.display = 'block';
});

image1.addEventListener('mouseout', function() {
    document.getElementById('desc-1').style.display = '';
});

image2.addEventListener('mouseover', function() {
    document.getElementById('desc-2').style.display = 'block';
});

image2.addEventListener('mouseout', function() {
    document.getElementById('desc-2').style.display = '';
});

image3.addEventListener('mouseover', function() {
    document.getElementById('desc-3').style.display = 'block';
});

image3.addEventListener('mouseout', function() {
    document.getElementById('desc-3').style.display = '';
});

image4.addEventListener('mouseover', function() {
    document.getElementById('desc-4').style.display = 'block';
});

image4.addEventListener('mouseout', function() {
    document.getElementById('desc-4').style.display = '';
});



