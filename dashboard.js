//let content;
document.addEventListener('DOMContentLoaded', function () {
    const editButtons = document.querySelectorAll('.edit-button');

    editButtons.forEach(button => {
        button.addEventListener('click', function () {

            if (this.classList.contains('edit-button')) {
                const dataKey = this.value;
                // console.log(this.value);
                const data = localStorage.getItem(dataKey);
                if (data) {
                    localStorage.setItem('currentData', data);
                    //content = data;
                    localStorage.setItem("dataKey", dataKey);

                    window.open("popup.html", "popup", "width=750,height=650");
                } else {
                    alert('No data found for this button.');
                }
            }
        });
    });


    const textarea = document.getElementById("editor-textarea");
    const currentContent = localStorage.getItem(dataKey);

});
///
document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById("editor-textarea");
    const saveButton = document.getElementById("save-button");
    const savedData = localStorage.getItem('currentData');
    if (savedData) {
        textarea.value = savedData;
    }
    const editButtonValue = localStorage.getItem('editButtonValue');
    if (editButtonValue) {
        textarea.value = localStorage.getItem(editButtonValue);
    }
    saveButton.addEventListener('click', function () {
        const newData = textarea.value;
        const editButtonValue = localStorage.getItem('editButtonValue');
        localStorage.setItem(editButtonValue, newData);
        localStorage.setItem(localStorage.getItem("dataKey"), newData);
        alert('Changes have been saved successfully!');
    });
});



function list_generate(array) {
    let code = '';
    let array_size = array.length;
    for (let i = 0; i < array_size; i++) {
        code += `<li>${array[i]}</li>`;
    }
    return code;
}
const email = JSON.parse(localStorage.getItem("subscribedEmails"))
document.getElementById("news-letter").innerHTML = list_generate(email);

