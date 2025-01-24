/*function loadSelectedCrops() {
    var addedCrops = document.getElementById('addingcrops');
    addedCrops.innerHTML = ''; // Clear existing crops

    for (var i = 0; i < localStorage.length; i++) {
        var cropData = localStorage.getItem('crop_' + i);
        if (cropData) {
            cropData = JSON.parse(cropData);
            var newImage = document.createElement('img');
            newImage.src = cropData.imageSrc;
            newImage.alt = cropData.cropName;
            newImage.style.width="100px";
            newImage.style.height="100px";
            newImage.style.marginRight="50px";
            newImage.style.borderRadius="50%";
            addedCrops.appendChild(newImage);
        }
    }
}

// Call the loadSelectedCrops function when the page loads
window.onload = loadSelectedCrops;*/
function loadSelectedCrops() {
    var addedCrops = document.getElementById('addingcrops');
    addedCrops.innerHTML = ''; // Clear existing crops

    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i);
        if (key && key.startsWith('crop_')) {
            var cropData = JSON.parse(localStorage.getItem(key));
            var newImage = document.createElement('img');
            newImage.src = cropData.imageSrc;
            newImage.alt = cropData.cropName;
            newImage.style.width = "100px";
            newImage.style.height = "100px";
            newImage.style.marginRight = "50px";
            newImage.style.borderRadius = "50%";
            newImage.style.borderStyle="solid";
            newImage.style.borderColor="black";
            newImage.style.borderWidth="1px";
            addedCrops.appendChild(newImage);
        }
    }
}

// Call the loadSelectedCrops function when the page loads
window.onload = loadSelectedCrops;