window.onload = function() {
    const articleTitle = localStorage.getItem("title");
    const articleContent = localStorage.getItem("content");
    const articleId = localStorage.getItem("id");

    displayArticle(articleTitle, articleContent, articleId);
    const commentForm = document.querySelector(".add-comment");
    const commentBtn = commentForm.getElementsByTagName("button")[0];
    commentBtn.addEventListener('click', event => {
        event.preventDefault();

        const usernameInput = document.getElementsByTagName('input')[0];
        let usernameValue = usernameInput.value;
        const emailInput = document.getElementsByTagName('input')[1];
        let emailValue = emailInput.value;
        const contentInput = document.getElementsByTagName('textarea')[0];
        let contentValue = contentInput.value;

        if (validateUsername(usernameInput, usernameValue) &&
            validateEmail(emailInput, emailValue) &&
            validateContent(contentInput, contentValue)) {
            addComment(usernameValue, contentValue);
        commentForm.reset();
        contentInput.value = "";
        }
    });
}

function displayArticle(title, content, id) {
    const postID = document.getElementById("full-article");
    postID.id = id;
    const postTitle = document.querySelector(".article-title");
    postTitle.innerHTML = title;
    const postContent = document.querySelector(".article-content");
    postContent.innerHTML = content;
}


function addComment(name, comment) {
    const commentTemplate = document.querySelector('.comment-template');

    const commentElement = commentTemplate.cloneNode(true);
    const commentUser = commentElement.querySelector('.comment-user');
    commentUser.innerHTML = name;
    // const commentEmail = commentElement.querySelector('.user-email');
    // commentEmail.innerHTML = email;
    const commentContent = commentElement.querySelector('.comment-content');
    commentContent.innerHTML = comment;
    const line = document.createElement('HR');
    commentElement.appendChild(line);
    document.querySelector('.comments-section').appendChild(commentElement);
}

function validateUsername(input, value) {
    const usernameError = document.querySelector('.username-error');

    if (value === "") {
        usernameError.innerHTML = "Please input a name.";
        usernameError.style.visibility = "visible";
        input.style.border = "2px solid red";
        return false;
    } else if (/^[a-zA-Z0-9]*$/.test(value) === false) {
        usernameError.innerHTML = "No symbols are allowed in your name.";
        input.style.border = "2px solid red";
        usernameError.style.visibility = "visible";
        return false;
    } else if (value.length < 4) {
        usernameError.innerHTML = "Your name must be at least 4 characters long.";
        input.style.border = "2px solid red";
        usernameError.style.visibility = "visible";
        return false;
    } else if (value.length > 20) {
        usernameError.innerHTML = "Your name must be less than 20 characters.";
        input.style.border = "2px solid red";
        usernameError.style.visibility = "visible";
        return false;
    } else {
        usernameError.style.visibility = "hidden";
        input.style.border = "1px solid #ccc"
        return true;
    }
}

function validateEmail(input, email) {
    const emailError = document.querySelector('.email-error');

    if (email === "") {
        emailError.innerHTML = "Please input an email address."
        input.style.border = "2px solid red";
        emailError.style.visibility = "visible";
        return false;
    } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) === false) {
        emailError.innerHTML = "Your email address is invalid."
        input.style.border = "2px solid red";
        emailError.style.visibility = "visible";
        return false;
    } else {
        input.style.border = "1px solid #ccc";
        emailError.style.visibility = "hidden";
        return true;
    }
}

function validateContent(input, content) {
    const contentError = document.querySelector('.content-error');

    if (content === "") {
        contentError.innerHTML = "Please write a comment."
        input.style.border = "2px solid red";
        contentError.style.visibility = "visible";
        return false;
    } else {
        input.style.border = "1px solid #ccc";
        contentError.innerHTML = "";
        contentError.style.visibility = "hidden";
        return true;
    }
}