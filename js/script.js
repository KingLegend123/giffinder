// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function() {

            function giphyURLWithSearchTerm(searchTerm) {

                var newURL = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
                return newURL;
            }

            function giphyURLWithSearchTerm(searchTerm) {

                var newURL = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
                return newURL;
            }

            function callGiphyAPIWithSearchTerm(searchTerm) {
                $.ajax({
                    url: giphyURLWithSearchTerm(searchTerm),
                    method: "GET",
                    success: function(response) {
                        var url = response.data[0].images.original.url;
                        appendImageToBody(url);
                    },
                });
            }
            $("button").click(function() {
                var searchTerm = $("input").val();
                callGiphyAPIWithSearchTerm(searchTerm);
            });
