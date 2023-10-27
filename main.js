// получаем нащи значения с полей ввода после нажатии на кнопку добавить, а так же очищаем поля
document.querySelector(".head__button").addEventListener("click", function(){
   let titleInput = document.querySelector(".head__input-title")
   let descriptionInput = document.querySelector(".head__input-description")

   title = titleInput.value
   description = descriptionInput.value

   titleInput.value = ""
   descriptionInput.value = ""

   // Создаем элемент списка с заголовком и описанием
   createHeadTitle(title, description);
})

// поиск тега ul с классом body__list
function getList() {
   return document.querySelector(".body__list");
}

//создание списка и обвертки с заголовком и описанием
function createItemLi(){
   let list = getList()
   
   let itemLi = document.createElement("li")
   itemLi.classList.add("body__item", "item")

   list.appendChild(itemLi);   
   return itemLi
}

function createHeadTitle (title, description){
   let itemList = createItemLi()
   
   let wrapper = document.createElement("div")
   wrapper.classList.add("item__tekst-wrapper");

   let titleEl = document.createElement("h3")
   titleEl.classList.add("item__title");
   titleEl.textContent = title;

   let descriptionEl = document.createElement("p");
   descriptionEl.classList.add("item__description");
   descriptionEl.textContent = description;

   // Добавляем элементы заголовка и описания к элементу списка
   itemList.append(wrapper)
   wrapper.appendChild(titleEl);
   wrapper.appendChild(descriptionEl);

   // Создаем кнопки для редактирования и удаления
   createButtons(itemList);
}

//созданик кнопок для редактирования карточек с заданиями 
function createButtons(itemList){
   let wrapper = document.createElement("div")
   wrapper.classList.add("item__buttons");
   
   let buttonSumbit = document.createElement("button")
   buttonSumbit.classList.add("button-sumbit")
   buttonSumbit.textContent = "Выполнено"

   let buttonRename = document.createElement("button")
   buttonRename.classList.add("button-rename")
   buttonRename.textContent = "Редактировать"

   let buttonRemove = document.createElement("button")
   buttonRemove.classList.add("button-remove")
   buttonRemove.textContent = "Удалить"

   itemList.appendChild(wrapper)
   wrapper.appendChild(buttonSumbit)
   wrapper.appendChild(buttonRename)
   wrapper.appendChild(buttonRemove)

   //Добавляем клик кнопке редактировать
   buttonRename.addEventListener("click", function() {
      let newTitle = prompt("Введите новый заголовок", itemList.querySelector(".item__title").textContent);
      if (newTitle !== null) {
         itemList.querySelector(".item__title").textContent = newTitle;
      }
      let newDescription = prompt("Введите новое описанике", itemList.querySelector(".item__description").textContent);
      if (newDescription !== null) {
         itemList.querySelector(".item__description").textContent = newDescription;
      }
   });

   //Добавляем клик кнопке удалить
   buttonRemove.addEventListener("click", function (e) {
      // Находим родительский элемент, который содержит кнопку "удаоить"
      let item = e.target.closest(".item");
   
      if (item) {
         // Удаляем элемент списка
         item.remove();
      }
   });

// Добавляем обработчик события "click" к кнопке "Выполнено"
buttonSumbit.addEventListener("click", function (e) {
   // Находим родительский элемент, который содержит кнопку "Выполнено"
   let item = e.target.closest(".item");

   if (item) {
      // Добавляем класс "sumbit" к родительскому элементу
      item.classList.add("sumbit");

      // Удаляем кнопку "Выполнено" и кнопку "Редактировать"
      let buttonSubmit = item.querySelector(".button-sumbit");
      let buttonRename = item.querySelector(".button-rename");
      if (buttonSubmit) {
         buttonSubmit.remove();
      }
      if (buttonRename) {
         buttonRename.remove();
      }
   }
});
}

