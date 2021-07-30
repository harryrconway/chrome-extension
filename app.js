const saveButton = document.getElementById('save-btn');
const ulEl = document.getElementById('ul-el');
const deleteButton = document.getElementById('delete-btn');
let inputEl = document.getElementById('input-el');
let saveTab = document.getElementById('save-tab');
let myLeads = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render()
} else {
    leadsFromLocalStorage = null
}

saveButton.addEventListener('click', () => {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render()
})

deleteButton.addEventListener('dblclick', function () {
    localStorage.clear()
    myLeads = []
    render()
})

const tabs = [
    { url: 'https://www.google.com.au/' }
]

saveTab.addEventListener('click', function () {
    console.log(tabs[0]);
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render()
})

function render() {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
            `
    }
    ulEl.innerHTML = listItems
}