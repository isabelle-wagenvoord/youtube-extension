let categories = new Set();
let channels = new Set();

const categoryInput = document.getElementById('category-input');
const channelInput = document.getElementById('channel-input');

const submitCategory = document.getElementById('submit-category');
const submitChannel = document.getElementById('submit-channel');

const categoryList = document.getElementById('flagged-categories');
const channelList = document.getElementById('flagged-channels');

function addCategory(c) {
    if(categories.has(c)) return;
    categories.add(c);
    categoryList.appendChild(generateFlagElement(c, 'category'));
}

function addChannel(c) {
    if(channels.has(c)) return;
    channels.add(c);
    channelList.appendChild(generateFlagElement(c, 'channel'));
}

function generateFlagElement(c, type) {
    const pill = document.createElement('div');
    const removeButton = document.createElement('button');
    pill.classList.add('pill');
    if (type === 'category') {
        pill.classList.add('category');
    }
    else if (type === 'channel') {
        pill.classList.add('channel');
    }
    pill.textContent = c;
    removeButton.textContent = 'x';
    removeButton.addEventListener('click', event => {
        removeButton.remove();
        if(pill.classList.contains('category')) {
            console.log(pill.textContent);
            categories.delete(pill.textContent);
        }
        else if(pill.classList.contains('channel')) {
            channels.delete(pill.textContent);
        }
        pill.remove();
    })
    pill.appendChild(removeButton);
    // return `<div class="pill">c<button>x</button></div>`;
    return pill;
}

submitCategory.addEventListener("click", addCategory)
submitChannel.addEventListener("click", addChannel)

categoryInput.addEventListener('keyup', event => {
    if(event.code === "Enter") {
        event.preventDefault();
        addCategory(categoryInput.value);
        categoryInput.value = "";
    }
})
channelInput.addEventListener('keyup', event => {
    if(event.code === "Enter") {
        event.preventDefault();
        addChannel(channelInput.value);
        channelInput.value = "";
    }
})