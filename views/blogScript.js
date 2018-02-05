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

    addPost("How I started...",
        "When I first started Mathematics and Informatics High School I thought that C++ was" +
        " horrible, I tried to get away from it as much as possible. Due to an unfortunate incident, " +
        "I had to skip 1 year of High School, which was the second half of the 11th grade and the " +
        "second of the 12th, the worst part was that I started to see programming as being interesting " +
        "at that time, but me being sick pretty much made my learning harder, so I gave up. I came to " +
        "Cluj-Napoca in order to start a Kinesiology College, which at the time I felt like it was what " +
        "I wanted to do... it turns out it wasn't. Halfway through the first year, I started feeeling " +
        "the need to solve problems, programming problems exactly, so I started researching for " +
        "programming languages, but I couldn't decide what to start studying so I " +
        "thought <em>There's one programming language that I know the basics to</em>, which was C++." +
        "<br>I revised the basics in order to get better and after a while I got an offer to join " + 
        "Gameloft's QA as a Manual Tester, so I left C++ again for, I think it was the 4th time, in order " +
        "to work hard on my job. After getting that job and seeing how the environment and the community " +
        "of a Software Development company is like, I decided to quit Kinesiotherapy college because I felt " +
        "that this is what I want to do, I want to work in this environment. <br>After two years of working " +
        "in Gameloft, I decided to go to my best friend, who is an amazing Web Developer, and ask him " + 
        "what does it mean to be a Web Developer, what do I need to do and what do I need to learn." +
        "I did a lot of research regarding HTML, CSS and JavaScript and after working with them for a while " +
        "I pretty much knew that this is what I want to do. I did the Codeacademy HTML, CSS and JavaScript " +
        "tutorials. I went over to FreeCodeCamp and did those as well, I did daily exercises from " +
        "Codewars and once I got a hold of my basic knowledge of these three languages and logical thinking " +
        "I decided to enroll in a School in order to learn Web Development the right way and I have to say " +
        "that I absolutely love it...",  
        2135
    );

    addPost(
        "What I learned so far...",
        "Nothing to see here yet, folks!",
        3215
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

    if (window.innerWidth === 768) {
        console.log(this);
    }

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