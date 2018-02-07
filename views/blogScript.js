const wowProfile = 'https://eu.api.battle.net/wow/character/Draenor/Arcatraz?fields=statistics&locale=en_GB&apikey=cjfu9939tr5j2jymnu7navrtda3shxhw';

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
    const loading = document.querySelector(".loading");
    const posts = [];

    getInfoFromApi(wowProfile)
        .then(function(response) {
            displayGameInfo(response, wowProfile);
            loading.style.display = "none";
        });

    function displayGameInfo(response, wowProfile) { // function to display the information
        gameInfo.innerHTML = "One of my favorite games of all time is World of Warcraft. The reason " +
        "behind this I will explain at a later time.<br> I currently play a Death Knight since I got bored of my other characters." + 
        ", his name is " + response.name + " and his Home Realm is " + response.realm + ".<br>" +
        " With the help of " + response.name + " and the other characters, I have gathered a total of " +
        response.achievementPoints + " Achievement Points. <br> I have also completed a total of " + 
        response.statistics.subCategories[4].statistics[0].quantity + " quests, and counting, with him."
    };

    class Post {
        constructor(title, content, id) {
            this.title = title;
            this.content = content;
            this.id = id; // Date.now() will be used to input an id in later stages
        }
    };

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
        "I have worked all by myself doing all sorts of exercises before enrolling to the Informal School of IT. I learned about basic HTML and CSS and " +
        "I found them to be pretty easy, being static and all, but even these two have their tricky parts, especially once you get into Flexbox and start " +
        "using libraries.<br>I concentrated more on JavaScript though, since I felt like that's the most important part of web development, it's certainly " +
        "the hardest.I worked for about a month using HTML and CSS, doing basic stuff like positioning, how to use attributes and how CSS connects to HTML, " +
        "I learned about Bootstrap and used it for a little while, but didn't waste too much time with it.<br>Once I felt like I learned the basics, I went " +
        "ahead and started learning Javscript the real way. I felt like FreeCodeCamp had some very interesting exercises and what I appreciated most about this " +
        "app was the fact that the challenges that were given to you didn't had much information about how to solve it, so you basically had to research " +
        "quite a lot in order to do the challenges the right way. Of course you had the way to solve them right on their forum, and even though I am ashamed " +
        "to say that I looked up one of the challenges and how to properly solved it, after doing so I went ahead and did the same exact challenge again without " +
        "any help whatsoever. Codeacademy had some pretty neat ways of teaching you JavaScript, but they didn't have any challenging exercises and I felt " +
        "like I hadn't learned anything by the time I was done with it. After doing these things, I went ahead to my friend and asked him to give me " +
        "some advice of how can I become better at understanding the ways of the JavaScript... and he did. Little did I know that some hard times were " +
        "gonna come by, but these hard times got me to understand some pretty good things. The challenges were composed of: <ul> " +
        "<li>Logging 'Hello World'</li>" +
        "<li>Calculate the Average, Mean and Mode of several variables</li>" +
        "<li>Creating an Object and find out what properties and methods are</li>" +
        "<li>Creating a Constructor and prototype</li>" +
        "<li>Creating a Mini-IMDB clone using Constructors, Objects and Methods to display a full description of the Movie and Actors</li>" +
        "<li>Creating an Object filled with the built-in Array Methods without using other Methods not created by myself for help</li></ul>" +
        "During the last assignment, I felt pretty comfortable of the knowledge I have gained with the JavaScript language and so I decided " +
        "to enroll to the Informal School of IT to understand and learn Web Development in the proper way. The first couple of months were " +
        "mostly recap of what I had already learned and there were moments when I thought that I was probably better off on my own.<br>" +
        "What I was waiting for the most was the DOM Manipulation lessons, AJAX and how to use APIs, once we got to those lessons, I felt " +
        "challenged again and was happy to learn new things. Making a request to the API and displaying every little thing from it felt like " +
        "magic and I felt like Harry Potter doing his first Wingardium Leviosa. All the time spent on JavaScript before beginning this course" + 
        "was very well spent, since I already had my JS knowledge and it was much easier to understand how the DOM worked and how to use the " +
        "Objects from the API to my advantage. I was always challenged with newer tasks and even though I wished we had more homework to " +
        "use what I had learned, I was still happy because we had our final Project, which was to creat an IMDB-look-alike web app, and that " +
        "was probably the time where I got to actually be part of a real project, a real team and got to use all the knowledge I had gathered before " +
        "and during the course. I also had a React lesson for ~a week in which we learned the basics of using that Framework, however I was not interested " +
        "at all, I wanted to feel as comfortable as possible using plain Vanilla.js and I wasn't about to go overboard about learning something " +
        "that I can't quite understand fully yet, but I think I am ready now. I find that framework to be incredibly helpful and the way it does " +
        "its job is remarkable, but I just didn't felt the need to learn it at the time, same with jQuery. I did learn jQuery for a good time during " +
        "my time at the School, but other than making AJAX feel a little easier to use, I felt the library to overcomplicate things that I didn't " +
        "fully understand.<br>I was saying that I am ready now to learn a framework and maybe take it to the next level, so I started reading and " +
        "watching videos about TypeScript and I am interested to try my first framework, not sure about what to choose, but I heard Vue.js to be a " +
        "really interesting one so I might start with that, it's also new and not as popular as React or Angular.",
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