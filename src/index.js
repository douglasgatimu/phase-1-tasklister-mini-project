// Deliverables
// 1. As a user, I should be able to type a task into the input field.
// 2. As a user, I should be able to click some form of a submit button.
// 3. As a user, I expect to see the task string that I provided appear in the DOM after the submit button has been activated.

// Attempt:
// 4. A delete function that will remove tasks from your list
// 5. A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// 6. As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// 7. An additional input field (e.g. user, duration, date due)
// 8. Ability to edit tasks
// 9. Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM

document.addEventListener("DOMContentLoaded", () => {
  //
});

const taskTextInput = document.querySelector('#new-task-description')
const theForm = document.querySelector('#create-task-form')
const taskList = document.querySelector('#tasks')
const urgencyDropdown = document.querySelector('#urgency-select')



function createListItem() {
  let inputValue = taskTextInput.value
  let listItem = document.createElement('li')

  listItem.innerHTML = `<div class= 'item-text'> ${inputValue} </div><button class='delete-btn'> Delete </button>`
  console.log(listItem)
  let deleteBtn = listItem.querySelector('.delete-btn')
  deleteBtn.addEventListener('click', () => listItem.remove())


  //console.log(taskList)
  return listItem
}

theForm.addEventListener('submit', ((e) => {
  e.preventDefault()
  let taskText = taskTextInput.value
  console.log(taskText)
  let listItem = createListItem()



  switch (urgencyDropdown.value) {
    case 'high':
      listItem.style.backgroundColor = 'red'
      listItem.dataset.priority = 3
      break;

    case 'medium':
      listItem.style.backgroundColor = 'yellow'
      listItem.dataset.priority = 2
      break;

    case 'low':
      listItem.style.backgroundColor = 'green'
      listItem.dataset.priority = 1
      break;

    default:
      listItem.style.backgroundColor = 'gray'
      listItem.dataset.priority = 0
  }
  
  taskList.appendChild(listItem)

  urgencyDropdown.value = ''
  taskTextInput.value = ''

}))








