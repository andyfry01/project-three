# Project Three


### App overview:

- To begin, the app takes you to a login page where you're prompted to create a user profile or login as an existing user (it's not exactly a "user system" per se, at the moment it's just a way of creating and displaying different playlists for different users depending on who's "logged in").

- The app then takes you to the main page where you can enter a country to search for. When you search for a country, the app queries the last.fm API to find the top 50 most popular tracks in that country for the past week, and then displays them in ascending order on the page with the artist, song name, and an image of the artist/band. If you mouseover a song, a query is fired to the Spotify API to play a sample of the song.

- You can click on the save button to save a song to your playlist, and if you navigate to the playlist page, your saved songs will appear. From the playlist page you can choose to remove a song, which will delete it from your playlist.

### Technical details:

- The app uses two APIs: last.fm to find the top 50 songs for a given week in a given country, and Spotify to play a sample snippet from the songs.  

- When you search for a country, an API call is made to last.fm, which grabs the data. We then map over the data and render unique song components to the page based on that song's data.

- In terms of data organization for adding songs to a playlist and displaying a playlist, we've got two MongoDB collections: users and songs. When a new song is added, it's first added as a new document in the songs collection, and then added as a reference in a user's profile under their "playlists" array. When you navigate to the playlist page, the app first reads which songs are in a user's playlist, and then fetches the songs from the songs collection to display on the page. When deleting a song, both the reference and the song are deleted from the database.

### Group responsibilities and contributions:

- We shared responsibilities across the entire app, and all of us worked on different aspects of both the frontend and the backend. We all took an active role in planning the app, delegating tasks, and fixing bugs. Major contributions include:
  - Carrie:
  - Andy: Provided much of the backend functionality for adding users to the database, adding songs to the songs database and the user's playlist, and deleting songs from the database, in addition to hooking up the backend to the front. Also worked out a lot of bugs and technical glitches when they occurred.
  - Tyler: Did some work in the backend to make it so only one user can be signed in at a time, and when someone uses the "one click signup", they become the only one that's loggedIn: true. Also set up routes, adding a new user to our database via axios, got the "view playlist/back to search" button to change according to what page the user was on (with a lot of Andy's help), and some minor bug fixes.
