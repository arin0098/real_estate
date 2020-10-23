fetch("http://arinafedosiuk.com/T9/wp-json/wp/v2/house")
    .then(initial => initial.json())
    .then(callback);

function callback(data) {
    console.log(data)

    data.forEach(showPost)
}

function showPost(post) {
    console.log(post)
    const template =
        document.querySelector("template#postTemplate").content;
    const clone = template.cloneNode(true);

    clone.querySelector(".property_name").textContent = post.property_name;

document.querySelector("main").appendChild(clone);


}
