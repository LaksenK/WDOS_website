document.addEventListener('DOMContentLoaded', function () {
    const textarea = document.getElementById('editor-textarea');
    const saveButton = document.getElementById('save-button');
    const dataKey = localStorage.getItem('dataKey');
    const savedData = localStorage.getItem('currentData');

    if (savedData) {
        textarea.value = savedData;
    }

    saveButton.addEventListener('click', function () {
        const newData = textarea.value;
        localStorage.setItem(dataKey, newData);
        alert('Changes have been saved successfully!');
        window.close(); // Optional: Close the popup after saving
    });
});
