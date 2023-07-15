# Comments about my application

- I decided to remove the background of images and logos with gimp.

- For the hover effect, I decided to work backwards to understand the logic, basically I started with the div covering the whole image, and on hover it goes down. Once I was comfortable with the effect, I reversed it. Basically the name of the movie goes up, while the description div starts with no height, and gains height progressively. I have different animation times for the in and out effect, in order to avoid clipping.

- I decided to write my own pagination, at first I used "React-Paginate" but it wasn't customizable enough for me. I could make it better in case there are too many pages (for example if you have 15 pages you want to only show a few pages and show "..." in between, I might implement it even though it's not required with this app because we only have 3 pages...)

- I tried to get the ratio of the images by calculating the ratio in the example image.

- I moved the resources folder in the src folder because I couldn't import it otherwise.

- I made some changes to the index.tsx page in order to use React 18 (instead of 17).

- I added a footer and a header with a search bar that shows movies containing the search input (without reloading, since I already load all movies the first time)

- I added a loading screen when loading the movies (it's barely noticeable with how fast the movies are loaded).

- I had to make sure that, if a user selects page 3 (for example) and uses the search bar to look for a movie, but gets only one page of results, the pagination would take them to page 1 (or page 2 of there are 2 pages of results). It works for any number of pages.

- I was confused with the workflow and the folders, I usually understand things like this better when someone explains it to me or gives me an example.

- I think that's it, if you have any questions feel free to ask! Thank you for reading and have a good day.
