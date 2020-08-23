//     Create a simple pair of inputs and a submit button in your HTML
//     The inputs are name and text
//     Create a posts array with a few {name: ..., text:...} objects
//     Write a function called render that loops through posts and creates a simple div for each post
//     The loop should also add the div to somewhere on the HTML
//     Add an on("click") event to the button. When the button is clicked you should:
//     Grab the name and text from the inputs
//     Push a new object to the posts array with the name and text data
//     Call render again
// Once you're done with that, you'll notice that whenever you add a new post, it will duplicate the entire list on the DOM - fix this.
// This might be useful

// const posts = [
//     { name: 'roni', text: 'i want pasta' },
//     { name: 'dan', text: 'i want salad' },
//     { name: 'idan', text: 'i prefer steak' }
// ]

// const render = function () {
//     $('#posts').empty()
//     let id = 0
//     for (let post of posts ) {
//         $('#posts').append(`<div class= 'post' data-id=${id} >${post.name} say: ${post.text}</div>`);
//         id ++
//     }
// }

// $('#post').click(function () {
//     const name = $('#name').val()
//     const text = $('#text').val()
//     posts.push({name, text})
//     $('#text').val('')
//     $('#name').val('')
//     render () 
// } )

// $('.posts').on('click', function () { 
//     console.log(this);
//     $(this).remove();
// });



