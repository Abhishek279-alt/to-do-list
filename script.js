// console.log(text.value);

function addItem() {
  var listInput = document.getElementById("listInput").value;
  // console.log(typeof listInput);
  const listItem = document.createElement("li");

  const textNode = document.createTextNode(listInput);
  listItem.appendChild(textNode);
  // Adding "li" into "ul"
  document.getElementById("itemList").appendChild(listItem);
  listItem.classList.add("listItem");

  listItem.addEventListener("click", () => {
    console.log(listItem.innerText);
    let listText = prompt("Change Text", listItem.innerText);
    // listItem.innerText = listText;
    if (listText === null) {
      return;
    } else {
      listItem.innerText = listText;
    }
  });
}

const itemList = document.getElementById("itemList");
const childItem = itemList.children;
console.log(childItem);

const listItem = document.getElementsByTagName("li");

const buttonEdit = document.getElementById("delete");

let index = childItem.length;

buttonEdit.addEventListener("click", () => {
  let index = childItem.length;
  let i = index - 1;
  // console.log(childItem[i]);
  childItem[i].remove();
});
