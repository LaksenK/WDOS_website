let content;
document.addEventListener('DOMContentLoaded', function () {
    const editButtons = document.querySelectorAll('.edit-button');

    editButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Check if the clicked button has the class 'edit-button'
            if (this.classList.contains('edit-button')) {
                const dataKey = this.value;
                // console.log(this.value);
                const data = localStorage.getItem(dataKey);
                if (data) {
                    localStorage.setItem('currentData', data);
                    content = data;
                    localStorage.setItem("dataKey",dataKey);
                   
                    window.open("popup.html", "popup", "width=750,height=650");
                } else {
                    alert('No data found for this button.');
                }
            }
        });
    });

    // Retrieve data from local storage and populate the textarea
    const textarea = document.getElementById("editor-textarea");
    const currentContent=localStorage.getItem(dataKey);
    console.log(currentContent);
    // const saveButton = document.getElementById("save-button");
    // saveButton.addEventListener("click",function(){
       console.log(dataKey);
    // })
});
///
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById("editor-textarea");
    const saveButton = document.getElementById("save-button");

    // Retrieve data from local storage and populate the textarea
    const savedData = localStorage.getItem('currentData');
    if (savedData) {
        textarea.value = savedData;
    }

    const editButtonValue = localStorage.getItem('editButtonValue');

    // Set the textarea value to the corresponding local storage data
    if (editButtonValue) {
        textarea.value = localStorage.getItem(editButtonValue);
    }

    // Add event listener to Save Changes button
    saveButton.addEventListener('click', function () {
        // Get the updated data from the textarea
        const newData = textarea.value;

        // Get the value of the edit button that was clicked
        const editButtonValue = localStorage.getItem('editButtonValue');

        // Store the updated data in local storage under the corresponding key
        localStorage.setItem(editButtonValue, newData);

        // Update the currentData in local storage
        localStorage.setItem(localStorage.getItem("dataKey"), newData);
        


        // Alert the user that changes have been saved
        alert('Changes have been saved successfully!');
    });
});



