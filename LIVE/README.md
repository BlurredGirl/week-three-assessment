# week-three-assessment

User Story
- I want to browse a set of thumbnail images that load quickly
- I want to select a thumbnail and display a larger version of the image
- I expect accessible considerations like alternative text for images, and the ability to click next and previous buttons using the keyboard


🎯 Please mention the requirements you met and which goals you achieved for this assignment:

I met all of the following requirements:
- One page, with a set of thumbnail images, and a larger image
- Styled appropriately with CSS, and make use of media queries.
- Use client-side JavaScript to display the larger image when a thumbnail is selected
- Use client-side JavaScript to navigate between images using the keyboard

🎯 Were there any requirements or goals that you were not quite able to achieve?
- I had a goal to add add an opaque background image in the large image box, however I could not find a way to make the background image opaque without it also affecting the large image itself. I instead added a background image in the style of a frame.

🎯 If so, could you please tell us what was it that you found difficult about these tasks?
- I tried a couple of different methods to make the background image opaque, however they both impacted the main image.

(Optional)
🏹 Feel free to add any other reflections you would like to share about your submission e.g.
 
What went really well and what could have gone better?
- I am really happy with the outcome, especially as I missed the session on Thursday as I am away at the moment. I had trouble with the flexbox positioning but overcame this, as well as trying to understand how to interact with the buttons via CSS as they were in a combined object, however I managed to achieve the outcome I wanted and felt really proud!

Detailing useful external sources that helped you complete the assignment (e.g Youtube tutorials).
- On a couple of occasions I struggled with the exact prompts for what I wanted (eg, added an extra '.' at the start which wasn't needed, or tried to link to something incorrectly). I used chat GPT to help spot errors in my code when I came across a problem. I also used a youtube tutorial to help implement the keyboard interactivity.
- I utilised Lighthouse and Wave

Describing errors or bugs you encountered while completing your assignment.
- Covered above

Requesting feedback about a specific part of your submission.
- What would be the best method to add an opaque background image to the container without impacting the main photo?
- How would you suggest moving the buttons to be in line with the thumbnail gallery if this is what I wanted to do in the future? (I like how it looks but it would be good to know!)

------

Accessibility Considerations + Stretch Goal:

- I ensured all images have an alt tag
- I have implemented keyboard navigation (arrow buttons, tab, space and scroll)
- I ran 'WAVE' which highlighted a lack of heading structure, so I went back to the code and implemented a header and footer


- I initially ran 'Lighthouse' in incognito mode and had the following scores:

Performance: 65
Accessibility: 100
Best Practice: 100
SEO: 90

I then read why the performance was low and the biggest impact seemed to be that the thumbnail images were not given a size. I then added the 'height / width' into the javascript under each image, however if I gave it a 'px' it returned an error, and if I gave it a '%' it negatively impacted the look of the page. I ran Lighthouse again just with the '100' for each height & width and this returned a new score of:

Performance: 88
Accessibility: 100
Best Practice: 100
SEO: 90

I'm not sure why this is, as it doesn't seem to have implemented a visual change on the page even when changing the numbers from 100 to other figures, however it has definitely positively impacted the accessibility score. Please can I have some feedback as to why this is, and what I should have done instead?

