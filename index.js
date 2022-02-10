console.log("College Library");

// Constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

// Display Constructor
function Display() {

}

// Add method to display prototype
Display.prototype.add = function (book) {
    console.log("Adding");
    let tableBody = document.getElementById("tableBody");
    let uiString = `
                    <tr>
                        
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr>`
    tableBody.innerHTML += uiString;

}
// Implement the clear function
Display.prototype.clear = function () {
    let libraryForm = document.getElementById("libraryForm");
    libraryForm.reset();
}
//  Implement the validatefunction
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}
Display.prototype.show = function (type,displaymessage) {
    let message = document.getElementById("message");
    message.innerHTML = `
<div class="alert alert-warning alert-dismissible fade show" role="alert">
   <strong>Message</strong> ${displaymessage}
   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
   <span aria-hidden="true">&times;</span>
  </button>
</div>`;
setTimeout(function(){
message.innerHTML=''
},2000);
}
// Add submit event listner to libraryForm
let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener('submit', libraryFormSubmit);


function libraryFormSubmit(e) {
    console.log("You have submitted library form");
    let name = document.getElementById("bookName").value;
    let author = document.getElementById("author").value;
    // let type=document.getElementById("").value;

    let fiction = document.getElementById("fiction");
    let programming = document.getElementById("programming");
    let cooking = document.getElementById("cooking");
    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);


    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('sucess',' Your book has been successfully added');
    }
    else {
        display.show('danger',' Sorry you cannot add thid book');

    }

    e.preventDefault();

}
