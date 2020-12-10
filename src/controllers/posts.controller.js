import view from '../views/post.html';

const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    return await response.json();
}

export default async () => {

    const divElement = document.createElement('div');
    divElement.innerHTML = view;

    const postsElements = divElement.querySelector('#posts');
    const totalPosts = divElement.querySelector('#total');
    
    
    const posts = await getPosts();
    // console.log(posts);
    totalPosts.innerHTML = posts.length;
    
    posts.forEach( post => {
        postsElements.innerHTML += `
            <li class="list-group-item border-primary bg-dark text-white">
                <h5>${ post.title }</h5>
                <p>${ post.body }</p>
            </li>
        `;
    });

    return divElement;

}