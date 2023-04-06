async function DisplayPhotos() {

  let rover = $('input[name="rover"]:checked').val();
  let date = $('#PicDate').val();


  makeAPICall(rover, date);
}

const apiEndpoint = 'https://api.nasa.gov/mars-photos/api/v1/rovers';
const apiKey = '7jNjBvKe2SYqRRbScCXOfVOWNq0g2zVUHmVIR70p';

function createGallery(images) {
const photoContainer = document.getElementById('photoContainer');
photoContainer.innerHTML = '';


for (let i = 0; i < 25; i++) {
  const image = images[i];

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('imageContainer');
  const img = document.createElement('img');
  img.src = image.img_src;
  img.alt = image.camera.full_name;
  img.title = image.camera.name;
  img.addEventListener('click', () => {
    window.open(image.img_src, '_blank');
  });
  imgContainer.appendChild(img);
  photoContainer.appendChild(imgContainer);
}
}
function searchPhotos(rover, date) {
const url = `${apiEndpoint}/${rover}/photos?earth_date=${date}&api_key=${apiKey}`;
fetch(url)
  .then(response => response.json())
  .then(data => {
    const images = data.photos;
    if (images.length > 0) {
      createGallery(images);
    } else {
      alert('No photos found for the selected date.');
    }
  })
  .catch(error => console.error(error));
}
function DisplayPhotos() {
const form = document.getElementById('marsForm');
if (form.checkValidity()) {
  const rover = document.querySelector('input[name="rover"]:checked').value;
  const date = document.getElementById('PicDate').value;
  searchPhotos(rover, date);
}
}

function ClearForm() {
const form = document.getElementById('marsForm');
form.reset();
const photoContainer = document.getElementById('photoContainer');
photoContainer.innerHTML = '';
}

function getCuriosity() {
document.getElementById('PicDate').min = '2012-08-06';
document.getElementById('PicDate').max = '2019-09-28';
}

function getOpportunity() {
document.getElementById('PicDate').min = '2004-01-26';
document.getElementById('PicDate').max = '2016-06-11';
}

function getSpirit() {
document.getElementById('PicDate').min = '2004-01-05';
document.getElementById('PicDate').max = '2004-03-21';
}




function ClearForm() {
  $('#marsForm')[0].reset();
  $('#photoContainer').empty();
}

$('#marsForm').submit(function(e) {
  e.preventDefault();
  DisplayPhotos();
});


function getCuriosity() {
  document.getElementById("PicDate").value = "2012-08-06";
}

function getOpportunity() {
  document.getElementById("PicDate").value = "2004-01-26";
}

function getSpirit() {
  document.getElementById("PicDate").value = "2004-01-05";
}