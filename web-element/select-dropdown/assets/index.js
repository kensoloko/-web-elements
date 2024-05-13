const selectControl = document.querySelector('.select-control');
const selectInput = document.querySelector('.select-input');
const selectValue = document.querySelector('#select-value');
const inputSearch = document.querySelector('#input-search');
const dropdownOptions = document.querySelector('.dropdown-options');
const dropdownOptionList = document.querySelectorAll('.dropdown-options > li');

selectInput.addEventListener('click', () => {
    selectControl.classList.toggle('active');
});

dropdownOptionList.forEach((option) => {
    option.addEventListener('click', () => {
        const text = option.textContent;
        selectValue.value = text.trim();
        selectControl.classList.remove('active');
        inputSearch.value = '';
        const options = document.querySelectorAll('.dropdown-options > li');
        options.forEach(option => {
            option.style.display = 'block';
        });
    })
});

inputSearch.addEventListener('keyup', () => {
    const searchInputValue = inputSearch.value.toLowerCase().trim();
    const options = document.querySelectorAll('.dropdown-options > li');
    options.forEach(option => {
        const optionTextValue = option.textContent.toLowerCase().trim();
        if (optionTextValue.indexOf(searchInputValue) > -1) {
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
});

