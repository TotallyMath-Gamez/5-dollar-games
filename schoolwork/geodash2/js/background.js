window.onload = function() {
    var storedColor = localStorage.getItem('backgroundColor') || '#0a0d31';
    document.body.style.backgroundColor = storedColor;
    var colorPicker = document.getElementById('colorPicker');
    if (colorPicker) {
        colorPicker.value = storedColor;
    }
};

function changeBackgroundColor() {
    var color = document.getElementById("colorPicker").value;
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color); // Store color in localStorage
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = "#0a0d31";
    var colorPicker = document.getElementById("colorPicker");
    if (colorPicker) {
        colorPicker.value = "#0a0d31";
    }
    localStorage.setItem('backgroundColor', "#0a0d31");
}
