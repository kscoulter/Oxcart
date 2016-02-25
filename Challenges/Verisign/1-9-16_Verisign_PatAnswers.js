// JavaScript source code
/*
1) Write a function charFrequency() that takes a string of characters, counts the number of occurrences of each character, and returns an object with the characters and their counts as key/value pairs. Don't worry about illegal characters. No jQuery allowed.

  function charFrequency(strToAnalyze) {}
*/
            function charFrequency(strChars) {
                //Create an empty array for the characters, anticipate the length of the characters and count them.
                var arrayChars = [];
                var totalCount;
                var wordLength = strChars.length;
                var countChars = arrayChars.count;
                //Loop through to rack up the key value pairs
                for (var i = 0; i < wordLength; i++) {
                    if (!arrayChars[strChars[i]]) {
                        arrayChars[strChars[i]] = 1;
                    } else {
                        arrayChars[strChars[i]] += 1;
                    }
                } 
                // Return the key value pairs assocaited with character frequency.
                return arrayChars;
            }
            //To test if it's working.
            console.log(charFrequency("Verisign"));

/*
1b) Modify charFrequency() to return an array of just the characters sorted by frequency in descending order. No jQuery allowed.
*/

            function charFrequency(strChars) {
                //Create an empty array for the characters, anticipate the length of the characters and a separate array for just the key values.
                var arrayChars = [];
                var wordLength = strChars.length;
                var keys = []; 

                for (var i = 0; i < wordLength; i++) {
                    if (!arrayChars[strChars[i]]) {
                        arrayChars[strChars[i]] = 1;
                    } else {
                        arrayChars[strChars[i]] += 1;
                    }
                } 
                //Push just the key values into the key array.
                for(var key in arrayChars){ 
                    keys.push(key);
                }
                //Compare them by numeric size by adding and subtracting to determine frequency.
                function sortByValues(a,b){
                    return arrayChars[b]-arrayChars[a]
                }
                //Return the key values, sorted by frequency.
                return keys.sort(sortByValues);

            }
            //To see if it's working.
            console.log(charFrequency("Verisign"));


/*
2) There are TWO primary reasons why the line inside this loop will perform poorly. Identify them, explain why they are inefficient, and show what you would do instead:

	for (var i = 0; i < 100; i++) {
		jQuery('content section:first-child div').append('<p>' + i + '</p>');
	}
*/

            // 1. Generally, DOM manipulation can be very slow, and additionally here the function loops through looking and appending 100 times. So the way this is written is especially slow.

            // 2. In addition to using a depricated tag <content>, the 'content section:first-child div' selector is innefficient.

            // My answer:
                //Create empty value to append
                var valueToAppend;
                //Rack up the values to append proramatically without looking through the DOM
                for (var i = 1; i < 100; i++) {

                    valueToAppend += '<p>' + i + '</p>';

                }
                //Bolt the 100 <p> tags to the DOM
                $('#divId').append(valueToAppend);


/*
  3) Write a function that logs the name and true/false value of each checkbox in the form below to the browser console. Bind this function to the form's submit event. If no checkboxes are checked, abort the form submission. Do this succinctly using jQuery.
  
  <form id="default-form">
		<label><input type="checkbox" name="one">One</label>
		<label><input type="checkbox" name="two">Two</label>
		<label><input type="checkbox" name="three">Three</label>
		<input type="submit">
	</form>
*/

            //Find the form and create a click event on submission.
            $('#default-form').on('submit', function(){
                //If the box isn't checked (the "!" means not), prevent the submisson
                if (!$("#default-form input[type='checkbox']").is(':checked')) {
                    event.preventDefault();
                    console.log('Prevented')
                // If it is checked, log the name.
                } else {
                    console.log($(this).attr('name' + 'is checked'));
                }

            });


/*
  3b) Do the above, but do it without using jQuery. Don't worry about non-W3C browsers.
*/
            //Create some variables for easier reading
            var checked = 0;
            var form = document.getElementById('default-form');
            var input = document.getElementsByTagName('input');
            var inputPosition = form.getElementsByTagName('input');
            //Add a listener event for submisson
            form.addEventListener("submit", function(event){
                //If nothing is checked, prevent the submission or if it is, allow it through.
                if(checked===0){
                    console.log('Prevented');
                    event.preventDefault();
                } else {
                    console.log('working');
                }

                //Loop through to augment the counter.
                for(i=0; i < input.length; i++){
                    if(inputPosition[i].checked){
                    checked++;
                    }
                }

            });

/*
  3c) Modify the jQuery version of the function to apply to all forms on the page that have a class of "lazy-form". Change the line of code that does the event binding to allow it to work with forms that are lazy-loaded onto the page by some user action. In other words, the event binding that you perform immediately will capture form submissions for forms that are generated and added to the page post-onload (via Ajax, for example), so long as they have the "lazy-form" class.
*/

            //Set a boolean value to determine if checked or not.
            var checked = 0;
            //Grab the form and bind to a submit event
            $('.lazy-form').on('submit', function(){
                //If the checked value is 0, stop the submission.
                if (checked === 0) {
                    event.preventDefault();
                    console.log('Prevented')
                //Augment the check and find each of the input checkboxes
                } else {
                    $(this).find('input[type="checkbox"]').each(function(){
                      console.log('Working'); 
                      if($(this).is(':checked')){
                        checked++;
                      } 
                    })
                }

            });



/*
4) Write a block of code that will change the title of an HTML page once per minute to show how many minutes have passed. No jQuery allowed.
*/
            // Set the time to zero and create a variable for easier reading
            var time_passed = 0;
            var pageTitle = document.getElementsByTagName('title');
            //Set the time interval to 60 seconds
            setInterval(function () {titleTimer()},60000);
            //Augment the time based on the interval
            function titleTimer(){
                time_passed++;
                pageTitle[0].innerText = time_passed;
                console.log('working');
            }
            //Invoke the ounter
            titleTimer();

/*
4b) Modify the above code to restart the timer when a user clicks on the page. In other words, page titles are only changed when the user has not interacted with the page for a minute or more. No jQuery allowed.
*/
            // Set the time to zero and create a variable for easier reading and set the time interval to 60 seconds 
            var time_passed = 0;
            var pageTitle = document.getElementsByTagName('title');
            setInterval(function () {titleTimer()},60000);
            //Augment the time based on the interval
            function titleTimer(){
                time_passed++;
                pageTitle[0].innerText = time_passed;
            }
            titleTimer();
            //Call the reset function when the window is cliced
            window.onclick = stopInterval;
            function stopInterval(){
                //Clear the timer and restart the timer
                window.clearInterval(stop);
                stop = setInterval(function () {titleTimer()},60000);
                console.log('working');
            }