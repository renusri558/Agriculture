function remove() {
    var addedCrops = document.getElementById('addingcrops');
    addedCrops.innerHTML = ''; // Remove all child elements

    var allCrops = document.querySelectorAll('.eachcrop img');
    allCrops.forEach(function (crop) {
        crop.style.opacity = 1; // Set opacity to 1
        crop.parentElement.onclick = function() { addCrop(crop.src, crop.alt, crop.parentElement); }; // Enable onclick event
    });
}

function addCrop(imageSrc, cropName, parentElement) {
    var addedCrops = document.getElementById('addingcrops');
    var cropCount = addedCrops.childElementCount;

    if (cropCount >=5) {
        alert('Please select exactly 5 crops');
        return;
    }
    var newImage = document.createElement('img');
    newImage.src = imageSrc;
    newImage.alt = cropName;
    newImage.style.width = "100px";
    newImage.style.height = "100px";
    newImage.style.marginRight = "50px";
    newImage.style.borderRadius = "50%";
    addedCrops.appendChild(newImage);
    parentElement.onclick = null; // Disable onclick event
    updateLocalStorage();
}

function updateLocalStorage() {
    var addedCrops = document.getElementById('addingcrops');
    var crops = addedCrops.querySelectorAll('img');

    crops.forEach(function (crop, index) {
        localStorage.setItem('crop_' + index, JSON.stringify({ imageSrc: crop.src, cropName: crop.alt }));
    });
}

// Call the loadSelectedCrops function when the page loads
window.onload = loadSelectedCrops;
