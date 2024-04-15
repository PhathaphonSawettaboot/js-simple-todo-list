const form = document.getElementById('new-item-form');
const input = document.getElementById('item-input')
const addBtn = document.getElementsByClassName('add-btn');
const list = document.getElementById('list');
const listItem = document.getElementsByClassName('list-item');

form.addEventListener('submit', e => {
    e.preventDefault()

    console.log(input.value);

    const item = document.createElement('li');
    item.innerText = input.value;
    item.classList.add('list-item');

    list.appendChild(item);
    input.value = '';

    item.addEventListener('click', () => {
        list.removeChild(item)
    })
});

