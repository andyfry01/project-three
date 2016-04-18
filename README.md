# Project Three

### Introducing, _vybes_. A responsive music app featuring top hits from around the world


### App overview:

- To begin, the app takes you to a login page where you're prompted to create a user profile or login as an existing user (it's not exactly a "user system" per se, at the moment it's just a way of creating and displaying different playlists for different users depending on who's "logged in").

- The app then takes you to the main page where you can enter a country to search for. When you search for a country, the app queries the last.fm API to find the top 50 most popular tracks in that country for the past week, and then displays them in ascending order on the page with the artist, song name, and an image of the artist/band. If you mouseover a song, a query is fired to the Spotify API to play a sample of the song.

- You can click on the save button to save a song to your playlist, and if you navigate to the playlist page, your saved songs will appear. From the playlist page you can choose to remove a song, which will delete it from your playlist.

### Technical details:

(from the project prompt readme: "Provide some technical details about the app")

### Group responsibilities and contributions:

- We shared responsibilities across the entire app, and all of us worked on different aspects of both the frontend and the backend. We all took an active role in planning the app, delegating tasks, and fixing bugs. Major contributions include:

- Carrie: Contributed heavily on the front end side, including all the style. Front end features worked on include:
    - Dynamically updating the text/style of the buttons displayed in the actual song components based on the page the user is on, and the action that is taken on the button
    - Displaying songs according to the country searched
    - Displaying songs on the Playlist page
    - Hover over effects, triggering the call to play music
    - Manipulating state so that when a song is deleted from the playlist database, it is removed visually and instantly<br><br>
    I also did some work on the backend side:
    - Making the ajax call to lastFM to find top 50 hits for each country
    - Making the ajax call to Spotify to return the song snippet urls
    - Building the route for finding the current user's playlist which returns the order of the songs in descending order (last song added is displayed first)<br><br>
**I just want to add, our group had an amazing dynamic and was super organized. Working with Andy and Tyler not only helped me better understand React, and Node especially, it made me a better developer. Also, branching/merging/etc was not an issue at all. Team Dusty Sticks for the win!**


  - Andy: Provided much of the backend functionality for adding users to the database, adding songs to the songs database and the user's playlist, and deleting songs from the database, in addition to hooking up the backend to the front. Also worked out a lot of bugs and technical glitches when they occurred.

  - Tyler: Did some work in the backend to make it so only one user can be signed in at a time, and when someone uses the "one click signup", they become the only one that's loggedIn: true. Also set up routes, adding a new user to our database via axios, got the "view playlist/back to search" button to change according to what page the user was on (with a lot of Andy's help), and some minor bug fixes. Also, came up with the sweet name.


  ### Known bugs:


  - Sign-in button 'logs in' on click, even when that user is not a part of the database. If user doesn't exist in the database (or if fields are left blank), need to display an alert.
  - If country is not found, red error screen displays.
  - When there are multiple songs of the same title, the wrong song most likely will play.Need to find tune api call.
  - Red error screen flashes when View Playlist button is clicked--seems like the call to render the songs in the user's playlist array isn't rendering for a split second which is why this error was consoled: index.js:47 Uncaught TypeError: Cannot read property 'map' of undefined



  ### Future features:
  - Display 'featured country top hits' upon login so that the search page isn't blank
  - Search other users 'profiles'/playlists
  - Ability to save to multiple playlists
  - Display username on the Header (ex: Welcome Tyler)
  - When switching routes to playlist page, the results page should keep the data that is displayed so that users don't have to search for a country again when they click 'return to search'.
  - Hit enter to Search
  - Autofill countries while typing in input box
