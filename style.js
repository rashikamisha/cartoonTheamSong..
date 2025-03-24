function searchcontainer() {
    let filter = document.getElementById('find').value.toUpperCase();
    let item = document.querySelectorAll('.cartoon-item'); // Corrected selector
    let button = document.querySelectorAll('.cartoon-item button'); // Corrected selector

    for (let i = 0; i < button.length; i++) {
      
        let value = button[i].innerText || button[i].textContent;

        if (value.toUpperCase().indexOf(filter) > -1) {
            item[i].style.display = ""; // Show item
        } else {
            item[i].style.display = "none"; // Hide item
        }
    }
}
