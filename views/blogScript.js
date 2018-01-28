const wowProfile = 'https://eu.api.battle.net/wow/character/twisting-nether/rottenchilly?fields=statistics&locale=en_GB&apikey=cjfu9939tr5j2jymnu7navrtda3shxhw';

window.onload = function() {

    function getInfoFromApi(wowProfile) { // Gather info from the API
        return $.ajax({
            url: wowProfile,
            method: 'GET',
            error: function(err) {
                alert('There has been an error: ' + err)
            }
        });
    }
    const articlesElement = document.getElementById("articles");
    const gameInfo = document.querySelector(".game-info");
    const posts = [];

    getInfoFromApi(wowProfile)
        .then(function(response) {
            displayGameInfo(response, wowProfile);
        });

    function displayGameInfo(response, wowProfile) { // function to display the information
        gameInfo.innerHTML = "Character name: " + response.name +
            '<br>Realm: ' + response.realm + '<br>Achievement Points: ' + response.achievementPoints + "<br>Quests completed: " +
            response.statistics.subCategories[4].statistics[0].quantity
    }

    class Post {
        constructor(title, content, id) {
            this.title = title;
            this.content = content;
            this.id = id; // Date.now() will be used to input an id in later stages
        }
    }

    function addPost(title, content, id) {
        posts.push(new Post(title, content, id));
    };

    addPost(
        "Goals and Hobbies",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eu interdum diam. Nulla et congue ante. Ut nec tristique lorem, a elementum dui. Sed rutrum facilisis nisi, et maximus mi luctus quis. Curabitur erat" +
        "tellus, viverra sit amet iaculis quis, pellentesque sit amet nibh. Nunc et sem massa. Vestibulum ac turpis interdum, sodales sapien in, cursus diam." +
        "Donec id diam felis. Etiam quis augue sit amet nisl vulputate rutrum pellentesque ac lacus. Curabitur dictum nisl et lorem ultricies, eu tempor felis facilisis. Nam non nunc nisi. Vivamus feugiat gravida interdum.<br><br>" +
        "Fusce in auctor magna. Nulla egestas neque at leo suscipit, nec laoreet purus imperdiet. Sed sed nisl vel sem vehicula fermentum. Aliquam lacinia ornare velit et iaculis. Donec feugiat quam massa," +
        " sed euismod tellus varius at. Sed et elit sed nisl sollicitudin ornare. Donec elementum a magna in condimentum. Nulla vitae feugiat lacus. Sed leo augue, vulputate sed ullamcorper vel, aliquet at turpis." +
        " Aenean bibendum lectus non quam lobortis, id venenatis libero aliquam. Integer porta laoreet metus pharetra blandit. Phasellus ac nunc condimentum eros ullamcorper interdum." +
        " Nullam interdum, est nec convallis congue, leo felis porta leo, a malesuada libero tellus ut velit. Suspendisse sed risus sit amet nunc viverra gravida.<br><br>" +
        "Aliquam suscipit ante enim, non sagittis elit lacinia et. Donec mattis ullamcorper lobortis. Nam vulputate rutrum ante. Sed viverra vestibulum odio, vel feugiat risus imperdiet non. Integer eu laoreet metus. " +
        " Suspendisse potenti. Pellentesque vitae enim vestibulum, porta velit in, finibus ligula. Cras eu nibh id leo rutrum hendrerit a et ex. Duis cursus tortor id lectus accumsan vehicula.<br><br>" +
        "Quisque suscipit elit convallis tortor convallis eleifend. Pellentesque ut dui in dui scelerisque feugiat. Aenean nec tristique metus. Quisque a ullamcorper mauris, a pretium leo." +
        " Suspendisse ultricies nisl at massa sagittis, ut tempor neque scelerisque. Quisque risus nulla, hendrerit non finibus id, mollis ac sem. Etiam pharetra dolor eu interdum mattis. Maecenas a arcu nulla.<br><br>" +
        "Praesent dapibus pretium eros. Fusce posuere magna a pellentesque tincidunt. Mauris et tellus in augue pellentesque tristique. Mauris quis scelerisque mauris. Duis elementum est at tincidunt interdum." +
        " Praesent faucibus faucibus enim at pharetra. Praesent non blandit massa. In aliquet placerat urna sit amet dapibus. Curabitur non ante elit.",
        2135
    );

    addPost(
        "Projects - both completed and WIP",
        "this",
        3215
    );

    addPost(
        "Post 3",
        "TExting text text",
        5312
    );

    console.log(posts);

    function displayArticle() {
        for (let i = 0; i < posts.length; i++) {
            const articleDiv = template.cloneNode(true);
            articleDiv.id = posts[i].id;
            const articleTitle = articleDiv.querySelector('.article-title');
            articleTitle.innerHTML = posts[i].title;

            articleTitle.addEventListener('click', function() {
                //this.parentNode.parentNode.href += '?id=' + articleDiv.id;
                const currentPost = posts.find(element => {
                    return this.parentNode.parentNode.parentNode.id == element.id;
                });
                localStorage.setItem("title", currentPost.title);
                localStorage.setItem("content", currentPost.content);
                localStorage.setItem("id", currentPost.id);
                // this.parentNode.parentNode.href += '?title=' + currentPost.title;
                // this.parentNode.parentNode.href += '&content=' + currentPost.content;
            });

            const articleContent = articleDiv.querySelector('.article-body');
            articleContent.innerHTML = shortenBody(posts[i].content);
            articlesElement.appendChild(articleDiv);
        }
        template.style.display = 'none';
    }

    displayArticle();

    const postElements = document.querySelectorAll(".post");
    for (let i = 0; i < postElements.length; i++) {
        postElements[i].addEventListener("mouseover", function() { this.style.background = "#d2e1f7" });
        postElements[i].addEventListener("mouseout", function() { this.style.background = "#F7F7F7" });
    }
}

function shortenBody(string) {
    const maxLength = 200;
    let shortBody = string.substr(0, maxLength);
    shortBody = shortBody.substr(0, Math.min(shortBody.length, shortBody.lastIndexOf(" ")));
    return shortBody + "...";
}

function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return e instanceof DOMException && (
                // everything except Firefox
                e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === 'QuotaExceededError' ||
                // Firefox
                e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}

//https://stackoverflow.com/questions/25434813/simple-pagination-in-javascript