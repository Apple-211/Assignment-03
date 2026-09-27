# Wolf Pack Campus Guide

## Project Description

Wolf Pack Campus Guide is a responsive website designed to help university students discover campus activities, organizations, and upcoming events. The website provides an overview of several campus events and includes a detailed page for the featured Fall Festival.

The intended audience is university students who want to find activities, meet other students, and become more involved in campus life.

## Layout and Design Decisions

The website uses a simple campus-focused design with a red and white color scheme and a clear layout that makes event information easy to find.

CSS Grid is used for the upcoming event cards on the home page. The grid displays 3 columns on larger screens, 2 columns on medium-sized screens, and one column on smaller screens. Grid is also used on the featured event page to create the main content and sidebar layout.

Flexbox is used in the main navigation to arrange the website name and navigation links. It is also used for the related event cards on the featured event page. The related events use `justify-content`, `align-items`, `gap`, and `flex-wrap` so the cards can adjust to different screen sizes.

## Responsive Design

The website uses two responsive breakpoints:

* At 900px, the event grid changes from three to two columns. The featured event layout changes to one column so the sidebar moves below the main content.
* At 600px, the event grid changes to one column. The navigation and hero section also stack vertically to make the website easier to use on smaller screens.

The website was tested by resizing the browser window to check the desktop, and mobile layouts.

## Semantic HTML

Semantic HTML elements are used throughout the website to organize the content and improve accessibility and structure.

* `<header>` contains the website header and navigation.
* `<nav>` contains the navigation links.
* `<main>` contains the primary content of each page.
* `<section>` organizes major areas such as upcoming events and the About section.
* `<article>` is used for individual event cards.
* `<aside>` contains additional information about the featured event.
* `<figure>` and `<figcaption>` are used to provide images with captions.
* `<time>` is used for event dates and times.
* `<footer>` contains copyright, contact information, and navigation links.

## Images and Sources

The website uses images from Pexels. The images were downloaded from these websites and used as local files in the project's `images` folder.

Images used:

* `campus-events.jpg` — Photo by RDNE Stock Project https://www.pexels.com/photo/three-women-playing-bowling-on-grass-7551411/
* `festival.jpg` — Photo by Phi Long https://www.pexels.com/photo/khoi-mau-d-trong-dem-27806903/
* `coding-meetup.jpg` — Photo by Mikhail Nilov https://www.pexels.com/photo/people-using-computers-at-work-7988079/
* `movie-night.jpg` — Photo by iNZiLE DAL https://www.pexels.com/photo/photo-of-a-cinema-hall-14746411/
* `hiking-club.jpg` — Photo by Yasin Ouş https://www.pexels.com/photo/group-hiking-through-scenic-forest-trail-37468687/
* `student-fair.jpg` — Photo by Sehjad Khoja https://www.pexels.com/photo/dynamic-ping-pong-game-at-toronto-outdoor-festival-33844643/

The images are used according to the applicable free-use licenses of the image websites.

## Testing

The website was tested in a desktop web browser and by resizing the browser window to check responsive behavior. Navigation links, images, event sections, and responsive layouts were checked on both HTML pages.

The HTML and CSS were  put in W3C validators before final submission. 
