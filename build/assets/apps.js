$(document).ready(function() {
   $(".js-search-results").hide();
});

$(document).on('click', '.showDetails-0', function () {
   $(".cards").hide();
        showDetails(0);
});

$(document).on('click', '.showDetails-1', function () {
   $(".cards").hide();
        showDetails(1);
});

$(document).on('click', '.showDetails-2', function () {
   $(".cards").hide();
        showDetails(2);
});

$(document).on('click', '.showDetails-3', function () {
   $(".cards").hide();
        showDetails(3);
});

$(document).on('click', '.showDetails-4', function () {
   $(".cards").hide();
        showDetails(4);
});

$(document).on('click', '.showDetails-5', function () {
   $(".cards").hide();
        showDetails(5);
});

 // STEP 1 - get the input from the user
    function showDetails(civID) {
   console.log(civID);
        var userChoice = "";

        if (civID == 0) {
            userChoice = "Kardashev Scale type 0";
        }
        else if (civID == 1) {
            userChoice = "Kardashev Scale type 1";
        }
        else if (civID == 2) {
            userChoice = "Kardashev Scale type 2";
        }
        else if (civID == 3) {
            userChoice = "Kardashev Scale type 3";
        }
        else if (civID == 4) {
            userChoice = "Kardashev Scale type 4";
        }
        else if (civID == 5) {
            userChoice = "Kardashev Scale type 5";
        }
        getResults(userChoice);
    }

    // STEP 2 - using the input from the user (query) make the API call to get the JSON response

    //functiona definition
    function getResults(userSearchTerm) {
        $.getJSON("https://www.googleapis.com/youtube/v3/search", {
                part: "snippet",
                maxResults: 2,
                key: "AIzaSyAMUD_BHo3KndZfwnmbo50I9NzIY3RCvk4",
                q: userSearchTerm,
                type: "video"

            },
            function(receivedApiData) {
                //show the json array received from the API call
                //console.log(receivedApiData);
                // if there are no results it will just empty the list
                if (receivedApiData.pageInfo.totalResults == 0) {
                    alert("No video found!");
                }
                //if there are results, call the displaySearchResults
                else {
                    displaySearchResults(receivedApiData.items);

                }
            });
    }

    // STEP 3 - using the JSON response (videos), populate the relevant part of your HTML with the variable inside the JSON
    function displaySearchResults(videosArray) {
        //console.log(videosArray);

        //create an empty variable to store one LI for each one the results
        var buildTheHtmlOutput = "";

        $.each(videosArray, function(videosArrayKey, videosArrayValue) {
            //create and populate one LI for each of the results ( "+=" means concatenate to the previous one)
            buildTheHtmlOutput += "<li>";
            buildTheHtmlOutput += "<p>" + videosArrayValue.snippet.title + "</p>"; //output vide title
            buildTheHtmlOutput += "<a href='https://www.youtube.com/watch?v=" + videosArrayValue.id.videoId + "' target='_blank'>"; //taget blank is going to open the video in a new window
            buildTheHtmlOutput += "<img src='" + videosArrayValue.snippet.thumbnails.high.url + "'/>"; //display video's thumbnail
            buildTheHtmlOutput += "</a>";
            buildTheHtmlOutput += "</li>";
        });

        $(".js-search-results ul").html(buildTheHtmlOutput);
        $(".js-search-results").show();
    }

function hideContainer() {
   $(".cards").show(); 
   $(".js-search-results").hide(); 
};


