//Dom variable
let bookNameInput = document.getElementById('bookName-input');
console.log(bookNameInput);
let bookAuthorInput = document.getElementById('bookAuthor-input');
console.log(bookAuthorInput);
let bookStatus = document.getElementById('status');
console.log(bookStatus);
let submitButton = document.getElementById('submit');
console.log(submitButton);




const url = 'https://645d6729250a246ae31ed307.mockapi.io/books'

let bookList =[]; //storing books from api in array format
//create a funtion to getBooks from api


async function getBooks() {
    console.log('inside the getBooks funtions:')

        //ty catch block
        try {
            //get respones from api
            let response = await fetch(url);
            console.log('response: ', response);

            let data = await response.json();
            console.log('data from api:', data);

            //assign data to booklist
            bookList = data;
            console.table(bookList);
            createBookDiv();

        } catch(error){
            console.log(error);
        }

}


getBooks();

//function to post books (send) to the api

async function postBooks(){
    console.log('postBooks inside the funtions');
    //create the respone
    try{ let response = await fetch(url, {

        //method  type
        method: "POST", 
        body: JSON.stringify({
            //what's being sent to the api?
            bookName: bookNameInput.value,
            bookAuthor: bookAuthorInput.value,
            read: bookStatus.value === 'read',
            currentlyReading: bookStatus.value === 'currently-reading',
            wantToRead: bookStatus.value === 'want-to-read'

        }),
        headers: {
            "Content-type": "application/json"
        }

    });
    console.log('printing response from postBooks', response);
    getBooks();
    //createBookDiv();
    }catch(error) {
        console.log(error);

    }

}
//creating an event to listen to the buttom click and send info



postBooks();

submitButton.addEventListener('click', postBooks)


function clearInputs(){
    bookNameInput.value = "";
    bookAuthorInput.value = "";
    bookStatus.value = "";
}

function createBookDiv () {
    return book = bookList.map((book) =>{
        console.log('printing book  map method: ', book);

    })
    
}