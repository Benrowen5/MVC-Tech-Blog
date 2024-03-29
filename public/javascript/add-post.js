async function createPostHandler (event) {
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim(); 
    const content = document.querySelector('#post-content').value.trim();

    if(title && content) {
        const response = await fetch('/api/posts', {
            method: 'post',
            body: JSON.stringify({
                title,
                content
            }),
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => {
            if(response.ok) {
                // console.log('response was ok');
                document.location.replace('/dashboard');
                } else {
                    alert(response.statusText);
                };
            });        
    }
}

document.querySelector('.new-post-form').addEventListener('submit', createPostHandler);