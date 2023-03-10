<!DOCTYPE html>
<html>
<head>
    <title>Cached Page Viewer</title>
</head>
<body>
    <form id="form">
        <label for="url">Enter URL:</label>
        <input type="text" id="url" name="url">
        <button type="submit" id="submit">Submit</button>
    </form>
    <div id="cachedPage"></div>
    <script>
        // Get the form element
        const form = document.getElementById("form");

        // Add event listener to the form to handle form submission
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            // Get the entered URL
            const url = document.getElementById("url").value;

            // Construct the cached version URL by appending "cache:" in front of the original URL
            const cachedUrl = "cache:" + url;

            // Use fetch API to send a request to Google and retrieve the cached version of the page
            fetch(cachedUrl)
                .then((response) => response.text())
                .then((data) => {
                    // Get the div element to display the cached page
                    const cachedPage = document.getElementById("cachedPage");

                    // Insert the retrieved page's HTML into the div element
                    cachedPage.innerHTML = data;
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    </script>
</body>
</html>
