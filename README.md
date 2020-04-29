V2 changes

- Remade the project to be structured as a SPA with seperate js files for the pages, at the cost of the add and search function.
- Added an external API where the data is being fetched.
- Removed Add and Search Function

Choices and assumptions:

- I chose a dark brown theme which matches a dark beer. I chose a dark color to show a bit of class.
- I added a border to the beers so it was easier to seperate them visually.
- I only chose to add the image and the name of the beer for minimal information on the front page, but adding more information on the detailed view page.
- When adding a new beer, I chose to add a list of all beers where the user can search and click isntead of typing it out.

Improvements

- Make detailed view page more specific, by taking the ID of the clicked container and matching with the ID from the Json/API and adding other data.
- Make img in Adding page upload img instead of img url.
- Add sort by name/brewery/type of beer for more filtering options.
- Using firebase instead of json for dynamic changing of database.
- Make website responsive.
- Re-add Add new Beer and Search function
