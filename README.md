# Project Three


### App overview:

- To begin, the app takes you to a login page where you're prompted to create a user profile or login as an existing user (it's not exactly a "user system" per se, at the moment it's just a way of creating and displaying different playlists for different users depending on who's "logged in").

- The app then takes you to the main page where you can enter a country to search for. When you search for a country, the app queries the last.fm API to find the top 50 most popular tracks in that country for the past week, and then displays them in descending order on the page with the artist, song name, and an image of the artist/band. If you mouseover a song, a query is fired to the Spotify API to play a sample of the song.

- You can click on the save button to save a song to your playlist, and if you navigate to the playlist page, your saved songs will appear. From the playlist page you can choose to remove a song, which will delete it from your playlist.

### Technical details:

(from the project prompt readme: "Provide some technical details about the app")

### Group responsibilities and contributions:

- We shared responsibilities across the entire app, and all of us worked on different aspects of both the frontend and the backend. We all took an active role in planning the app, delegating tasks, and fixing bugs. Major contributions include:
  - Carrie:
  - Andy: Provided much of the backend functionality for adding users to the database, adding songs to the songs database and the user's playlist, and deleting songs from the database, in addition to hooking up the backend to the front. Also worked out a lot of bugs and technical glitches when they occurred.
  - Tyler:
