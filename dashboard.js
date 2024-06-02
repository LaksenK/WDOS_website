
document.addEventListener('DOMContentLoaded', function () {
    const editButtons = document.querySelectorAll('.edit-button');

    editButtons.forEach(button => {
        button.addEventListener('click', function () {
            const dataKey = this.value;
            const data = localStorage.getItem(dataKey);

            if (data) {
                localStorage.setItem('currentData', data);
                localStorage.setItem('dataKey', dataKey);
                window.open('popup.html', 'popup', 'width=750,height=650');
            } else {
                alert('No data found for this button.');
            }
        });
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

