# Testing

## Browser Compatibility

The website has been successfully tested on the following browsers:
- Chrome
- Edge
- Safari (on personal mobile device - iPhone 11 Pro)

__Chrome Screenshots__

![Home Top](documentation/testing/sj-fitness-chrome-desktop.jpg)

![Home Bottom](documentation/testing/sj-fitness-chrome-desktop-a.jpg)

![Pricing](documentation/testing/sj-fitness-chrome-desktop-b.jpg)

![Join Us](documentation/testing/sj-fitness-chrome-desktop-c.jpg)

__Edge Screenshots__

![Home Top](documentation/testing/sj-fitness-edge-desktop.jpg)

![Home Bottom](documentation/testing/sj-fitness-edge-desktop-a.jpg)

![Pricing](documentation/testing/sj-fitness-edge-desktop-b.jpg)

![Join Us](documentation/testing/sj-fitness-edge-desktop-c.jpg)

__Safari (Mobile) Screenshots__

![Home Top](documentation/testing/sj-fitness-safari-mobile.jpg)

![Home Middle](documentation/testing/sj-fitness-safari-mobile-a.jpg)

![Home Bottom](documentation/testing/sj-fitness-safari-mobile-b.jpg)

![Pricing Top](documentation/testing/sj-fitness-safari-mobile-c.jpg)

![Pricing Middle](documentation/testing/sj-fitness-safari-mobile-d.jpg)

![Pricing Bottom](documentation/testing/sj-fitness-safari-mobile-e.jpg)

![Join Us](documentation/testing/sj-fitness-safari-mobile-f.jpg)

## Code Validation

### HTML

No errors were returned on any page when passing through the official W3C Validator as shown in the links below.
  - [W3C Validator Home](https://validator.w3.org/nu/?doc=https://sniclasj.github.io/sj-fitness/index.html)
  - [W3C Validator Pricing](https://validator.w3.org/nu/?doc=https://sniclasj.github.io/sj-fitness/pricing.html)
  - [W3C Validator Join-Us](https://validator.w3.org/nu/?doc=https://sniclasj.github.io/sj-fitness/join-us.html)
  
However, the following warnings were highlighted on the Home page and the Join-Us page due to the absence of a heading (h2 to h6) in a section in both instances.

![Home Page Validator Warning](documentation/testing/sj-fitness-index-testing.jpg)

![Join Us Page Validator Warning](documentation/testing/sj-fitness-join-us-testing.jpg)

The Home page warning is related to the hero image section missing a h2 to h6 heading. The reason for this is that the section is specifically there to create the space for the 'hero-image' on the home page therefore a heading would not be suitable in this instance.

The Join Us page warnings are also due to the absence of a heading (h2 to h6) for the sections used to create space for the 'join us' form and for the looped video. Again, a heading would not be appropriate in these instances which is why they have been omitted.

The Pricing page did not return any errors or warnings as shown in the below screenshot.

![Pricing Page Validator](documentation/testing/sj-fitness-pricing-testing.jpg)

### CSS

No errors or warnings were found on any page when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fsniclasj.github.io%2Fsj-fitness%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) as shown in the screenshot below.
![CSS Validator](documentation/testing/sj-fitness-index-css-testing.jpg)

### Lighthouse

__Mobile Test Results: Home__
![Home Mobile Lighthouse Results](documentation/testing/sj-fitness-index-lighthouse-mobile.jpg)

__Mobile Test Results: Pricing__
![Pricing Mobile Lighthouse Results](documentation/testing/sj-fitness-pricing-lighthouse-mobile.jpg)

__Mobile Test Results: Join Us__
![Join Us Mobile Lighthouse Results](documentation/testing/sj-fitness-join-us-lighthouse-mobile.jpg)

__Desktop Test Results: Home__
![Home Mobile Lighthouse Results](documentation/testing/sj-fitness-index-lighthouse-desktop.jpg)

__Desktop Test Results: Pricing__
![Pricing Mobile Lighthouse Results](documentation/testing/sj-fitness-pricing-lighthouse-desktop.jpg)

__Desktop Test Results: Join Us__
![Join Us Mobile Lighthouse Results](documentation/testing/sj-fitness-join-us-lighthouse-desktop.jpg)

The issue highlighted in the Lighthouse testing is due to the contrast of text colour in relation to background colour on the pricing.html page. This is discussed in the Unfixed Bugs section at the end of this document.

## Responsiveness

__Home Page__

Large

![Home Large](documentation/testing/sj-fitness-responsiveness-large.jpg)

Medium

![Home Medium](documentation/testing/sj-fitness-responsiveness-medium.jpg)

Small

![Home Small](documentation/testing/sj-fitness-responsiveness-small.jpg)

__Pricing Page__

Large

![Pricing Large](documentation/testing/sj-fitness-responsiveness-pricing-large.jpg)

Medium

![Pricing Medium](documentation/testing/sj-fitness-responsiveness-pricing-medium.jpg)

Small

![Pricing Small](documentation/testing/sj-fitness-responsiveness-pricing-small.jpg)

__Join Us Page__

Large

![Join Us Large](documentation/testing/sj-fitness-responsiveness-join-us-large.jpg)

Medium

![Join Us Medium](documentation/testing/sj-fitness-responsiveness-join-us-medium.jpg)

Small

![Join Us Small](documentation/testing/sj-fitness-responsiveness-join-us-small.jpg)

## User Story Tests

- As a user, I want to be able to click links in the navbar, so that I can view different pages on the site.
![Navbar](documentation/testing/sj-fitness-navbar.jpg)
- As a user, I want to be able to see social media icons, so that I can follow the business on their social platforms.
![Social Media Icons in Footer](documentation/testing/sj-fitness-footer.jpg)
- As a user, I want to see a summary of products, so that I can better understand the most suitable option.
![Pricing Options](documentation/testing/sj-fitness-pricing-tiers.jpg)
- As a user, I want to be able to contact the company, so that I can ask further questions or provide information.
![Email for Contact in Footer](documentation/testing/sj-fitness-footer.jpg)
![Contact Form](documentation/testing/sj-fitness-join-us-form.jpg)
- As a user, I want to be able to view the site on any device, so that I can see it on my phone, tablet, or desktop.
![Responsive Mock Up](documentation/testing/sj-fitness-responsive-mock-up.jpg)
- As a user, I want to be able to see where the company is located, so that I can see how easy it is for me to get there.
![Map on Home Page](documentation/testing/sj-fitness-chrome-desktop-a.jpg)

## Unfixed Bugs

The only issue that I am aware of is the contrast issue on the pricing.html page. In order to completely address this, I could modify the colour theme of the website to increase the contrast ratio. To partially rectify this issue, I have added text shadowing to the text style so that the text is more visible/readable.

I have since learned how to replace colours with root variables in the style.css file. This means that I could now easily update the colour scheme of the entire website in order to rectify the contrast ratio issue noted above. I have kept my original colour scheme for the site in this instance however, it is a useful learning for future projects.