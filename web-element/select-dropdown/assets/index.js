const selectControl = document.querySelector('.select-control');
const selectInput = document.querySelector('.select-input');
const selectValue = document.querySelector('#select-value');
const inputSearch = document.querySelector('#input-search');
const dropdownOptions = document.querySelector('.dropdown-options');
const dropdownOptionList = document.querySelectorAll('.dropdown-options > li:not(#no-result)');
const dropdownPanel = document.querySelector('#dropdown-panel');
const noResult = document.querySelector('#no-result');

selectInput.addEventListener('click', () => {
    selectControl.classList.toggle('active');
    noResult.style.display = 'none';
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
    let count = 0;
    options.forEach(option => {
        const optionTextValue = option.textContent.toLowerCase().trim();
        if (optionTextValue.indexOf(searchInputValue) > -1) {
            count++;
            option.style.display = 'block';
        } else {
            option.style.display = 'none';
        }
    });
    if (count === 0) {
        noResult.style.display = 'block';
    } else {
        noResult.style.display = 'none';
    }

});

document.addEventListener('click', (event) => {
    if (!(selectControl).contains(event.target)) {
        if (selectControl.classList.contains('active')) {
            inputSearch.value = '';
            const options = document.querySelectorAll('.dropdown-options > li');
            options.forEach(option => {
                option.style.display = 'block';
            });
            selectControl.classList.remove('active');
            noResult.style.display = 'none';
        }
    }
});



