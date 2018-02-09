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
        "I had to skip 1 year of High School, which was the second half of the 11th grade and " +
        "first half of the 12th, the worst part was that I started to see programming as being interesting " +
        "at that time, but me being sick pretty much made my learning harder, so I gave up. I came to " +
        "Cluj-Napoca in order to start a Kinesiology College, which at the time felt like it was what " +
        "I wanted to do... it turns out it wasn't. Halfway through the first year, I started feeeling " +
        "the need to solve problems, programming problems exactly, so I started researching for " +
        "programming languages, but I couldn't decide what to start studying so I " +
        "thought <em>There's one programming language that I know the basics to</em>, which was C++." +
        "<br>I revised the basics in order to get better and after a while I got an offer to join " + 
        "Gameloft's QA as a Manual Tester, so I left C++ again for, I think it was the 4th time, in order " +
        "to work hard on my job. After getting that job and seeing how the environment and the community " +
        "of a Software Development company is like, I decided to quit Kinesiotherapy college because I felt " +
        "that this is what I want to do, I want to work in this environment. <br>After two years of working " +
        "in Gameloft, I asked my best friend, who is an amazing Web Developer, " + 
        "what does it mean to be a Web Developer, what do I need to do and what do I need to learn. " +
        "I did a lot of research regarding HTML, CSS and JavaScript and after working with them for a while " +
        "I pretty much knew that this is what I want to do. I did the Codeacademy HTML, CSS and JavaScript " +
        "tutorials. I went over to FreeCodeCamp and did those as well, I did daily exercises from " +
        "Codewars and once I got a hold of my basic knowledge of these three languages and logical thinking, " +
        "I decided to enroll in a School in order to learn Web Development the right way and I have to say " +
        "that I absolutely love it...",  
        2135
    );

    addPost(
        "What I learned so far...",
        "I have worked all by myself doing all sorts of exercises before enrolling to the Informal School of IT. I learned about basic HTML and CSS and " +
        "I found them to be pretty easy, being static and all, but even these two have their tricky parts, especially once you get into Flexbox and start " +
        "using libraries.<br>I concentrated more on JavaScript though, since I felt like that's the most important part of web development, it's certainly " +
        "the hardest. I worked for about a month using HTML and CSS, doing basic stuff like positioning, how to use attributes and how CSS connects to HTML, " +
        "I learned about Bootstrap and used it for a little while, but didn't waste too much time with it.<br>Once I felt like I learned the basics, I went " +
        "ahead and started learning JavaScript the real way. I felt like FreeCodeCamp had some very interesting exercises and what I appreciated most about this " +
        "app was the fact that the challenges that were given to you didn't had much information about how to solve them, so you basically had to research " +
        "quite a lot in order to do the challenges the right way. Of course you had the way to solve them right on their forum, and even though I am ashamed " +
        "to say that I looked up one of the challenges and how to properly solve it, after doing so I went ahead and did the same exact challenge again without " +
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
        "magic and I felt like Harry Potter doing his first Wingardium Leviosa. All the time spent on JavaScript before beginning this course " + 
        "was very well spent, since I already had my JS knowledge and it was much easier to understand how the DOM worked and how to use the " +
        "Objects from the API to my advantage. I was always challenged with newer tasks and even though I wished we had more homework to " +
        "use what I had learned, I was still happy because we had our final Project, which was to create an IMDB-look-alike web app, and that " +
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

    addPost("My time at the School...",
        "I had mixed feeling during my time at the Informal School of IT. I was really excited that I was about to learn a lot from experienced people, " +
        "but at the same time I felt a little scared that I was gonna have a lot of work to do and not so much free time. I started by " +
        "learning networking, which was very interesting, and it was something that I didn't get to touch or experiment before, so I invested " +
        "quite some time into understanding what HTTP is, how it works, what exactly is a protocol, how does it work and how does it help us. I got to " +
        "learn what a request/response is, how do we use it to our advantage, what a status code is and I finally understood the meaning of 404 after" +
        " seeing it at least once a day while surfing the web, it all felt new and intriguing since I didn't even think " +
        "about touching these sort of stuff before.<br> We started learning HTML and CSS afterwards, even though I studied this before " +
        "starting the course, I still got to learn and understand a lot of stuff and it helped me to have someone to constantly ask what I didn't understand " +
        "whenever I felt the need to. It goes without saying that my experience before all of this has helped, it helped me during the whole course, but " +
        "what I did before felt irrelevant at times. I got to learn HTML and CSS in an organized manner and it felt like all I had done before made much more " +
        "sense now, since all I did before this was play around with everything, it felt like I didn't know HTML and CSS at all.<br> I got to learn Bootstrap " +
        "and how to properly use the Flexbox and how easily can a page be made responsive when these two are used together, I managed to play around with them " +
        "quite some time and it was really fun to test out my creativity.<br> I finally got to the thing I was awaiting the most, which was JavaScript, and " +
        "I was a little underwhelmed about the first classes, it wasn't only after around 2 and a half to 3 months after I started the course that I " +
        "got to do some interesting things and feel challenged, but even in the beginning of learning JavaScript, I got to do many things that I had already " +
        "done on my own and it really helped, because I saw how I managed to do them faster and better and it felt great to notice my progression.<br> I wish " +
        "we had more homework and challenges given by the professors, the ones they had given were interesting to solve and I got to learn a lot from them, but " +
        "I still wish I had more, the ones that I found most interesting to do were the following:<ul>" +
        "<li>Got to create a Rock-Paper-Scissors Game</li>" +
        "The initial challenge was to create this game in JavaScript and log in the console which of two wins by randomly choosing each of the players' choices." +
        " I wanted to take it a step further, and after seeing how the DOM works, I wanted to experiment with it so I made this little game into " +
        "a page and had the 3 choices as buttons for the user to choose from, while the computer would have his choice randomly chosen and display the result." +
        "<li>Got to create an object of people and an Edit, Delete button for each of them, while having an Add button to add more.</li>" +
        "This was probably the first time I felt pretty challenged, even though I used jQuery to finish it(I was at that step of the course), I didn't want " +
        "to use it anymore afterwards and concentrate strictly on Plain JavaScript. I learned how to grab an object's values and place them into inputs " +
        "and then save them, this was probably the most difficult task of the challenge and it took me a while, but it was worth it. I learned how to " +
        "correctly use inputs and have their values stored into an object, how to use the Date object to get the current time in miliseconds and set it as an ID for " +
        "every user created and how to properly delete a user both from the object and the HTML page itself(although I got to know how to do this better during my time with AJAX)." +
        "<li>Got to learn how to make an AJAX request</li>" +
        "This is where I learned how to take advantage of certain APIs and grab the information I needed. The challenge was to use the Weather API in order to get " +
        "the current weather from your location or by using Geolocation and get it using the Browser's Location Service. After learning this, I wanted to look into " +
        "other APIs so I made a request to the Blizzard API in order to get some information from my Battlenet account, which you can clearly see on my Home Page " +
        "where the information from one of my World of Warcraft characters is displayed." +
        "<li>Got to learn how to use a Version Control System, GIT specifically</li>" +
        "<li>Got to use Object Oriented Programming into displaying several articles on a page</li>" +
        "This was another very interesting challenge where I managed to use a lot of what I had learned in previous classes. The idea was to make an AJAX request to the " +
        "Typicode jsonplaceholder, get all articles and display them on a home page, each of the article had several comments. The user had the option of Editing and " +
        "Deleting a post, this was the moment where I felt pretty relieved by the fact that I got to do this before so the idea of how I was gonna do it was in my head, " +
        "I just had to adapt it properly using the API, and this was also the moment that I learned how to use query strings in order to properly redirect the user " +
        "to the article he just clicked on. The way I made this page worked helped me a lot into creating my own Page on which these articles are posted." +
        "<li>Got to learn about Cookies and Local Storage</li>" +
        "I was given the task, just as before, to make an AJAX request to a Weather API and display the weather using my location. The twist this time around was to " +
        "display the temperature either in Celsius or Fahrenheit, and let the choice be saved in a cookie. It might not sound like much right now, but at the time, " +
        "because it was new and I had never done it, it felt provocative and I am happy to say that I finished the challenge succesfully. " +
        " I got to learn about Local Storage, which I am using on this Page in order to open the posts due to the lack of an API at the moment." +
        "<li>The final project, an IMDB clone</li>" + 
        "I wish we had a project such as this every month during my time at the course. It was probably the best time I have had into putting in practice what I have " +
        "learned. We were 9 people, we had to work together in order to link all of the pages with one-another and we had to make it work as well as " +
        "possible. <br>I was tasked with doing the Login page at first, which was, as always, something I had never done, I got to make use of a real API to " +
        "check for the user and password and create the necessary cookie which would be used in order to give the administrator privileges to the logged person. " +
        "The login page didn't take a lot to finish completely, however in the remaining time I asked my classmates/co-workers if they needed any help and went ahead " +
        "to help wherever I could so that we could finish our project as well as possible before the deadline arrived. I wish I got to invest more time into this " +
        "project and put some more features into it, features that weren't necessary requested when we got it, but more out of the enjoyment of creating, experimenting " +
        "and programming." +
        "</ul>I would say that my time at the School was well invested and I probably wouldn't have learned as much if I kept learning on my own. I still have a great " +
        "amount of work and things to learn, but I am happy for this because at least I know that I will never get bored of developing.",
        5132)

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