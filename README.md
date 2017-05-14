# Venkateswara Portfolio Template


To view a live demo, [click here](https://venkateswarak.github.io/).

## Features

* Gulp ready (compiles Sass and minifies JS)
* Sass ready with lots of commenting
* Fully responsive
* Comes with Bootstrap grid system
* Easy colour changes can be done through simply variable edits

## Contents

    - [General](#general)
    - [Images](#images)
    - [Header Section](#header-section)
    - [Lead Section](#lead-section)
    - [About Section](#about-section)
    - [Experience Section](#experience-section)
    - [Education Section](#education-section)
    - [Skills Section](#skills-section)
    - [Contact Section](#contact-section)
    - [Footer Section](#footer-section)
- [Changelog](#changelog)
- [License](#license)



### General

In general, most styles on the page are based off the definitions of variables in the variable section of the style sheet:

```SCSS
// Define base and accent colors
$base-color: #3498db;
$base-color-hover: darken($base-color, 10%);

// Define background colors
$background: #fff;
$background-alt: #f2f2f5;

// Define border colors
$border: #dcd9d9;

// Define text colors
$heading: #374054;
$text: #74808a;
```


There is also a number of default CSS classes that can be applied such as `.shadow`, `.shadow-large`, `.btn-rounded-white`, and various others. These can be found under the General Styles section in the style sheet.



### Header Section

The header section can be found within the `<header>` tag and simply contains an unordered list of anchors to different sections of the page. 

```HTML
<li>
    <a href="https://google.com" class="no-scroll">Google</a>
</li>
```


```HTML
<header class="sticky">
    <!-- Header content -->
</header>
```

### Lead Section

The Lead section is pretty straightforward, it contains an h1 for name and an h2 for title. It also contains a link that can be used to link to your resume should you wish to add it as well.

### About Section

The about section contains a quick about blurb that can be edited by changing the text within the paragraph tags.

### Experience Section

The experience section creates a vertical timeline with all your relevant experience. The code for the timeline creation can be found within `js/scripts.js` 


The data attribute `data-date` is what is used to add a date to the associated timeline point. All that is really required is a wrapping div (i.e. `#experience-timeline`) and nested divs to build the timeline. The h3, h4, and p tags are option and the contents of the div can be styled however you wish.

To add additional section, simply add additional nested divs under the main wrapping div.

### Education Section

The Education is just a series of `.education-block` classes with some details associated with them. By default, it shows school name, date, degree, and some additional details. For example:



### Skills Section

The Skills section is simply an unordered list that spits out a "Skill Cloud" with all the skills listed. To add / remove skills, simply edit or add list elements, like so:


### Contact Section

Since the page is static, I opted to use the awesome Formspree to allow for a contact form without the need for anything else. To use it, you must have the page hosted on a server (loading a basic HTML page won't work) where a referrer header is generated. Also, simply add the email to the action. An example is as follows:

```HTML
<form method="POST" action="https://formspree.io/email@email.com">
    <input type="hidden" name="_subject" value="Contact request from personal website" />
    <input type="email" name="_replyto" placeholder="Your email" required>
    <textarea name="message" placeholder="Your message" required></textarea>
    <button type="submit">Send</button>
</form>
```
For more information on configuration of the contact form or dealing with errors, check out [Formspree](https://formspree.io/).

For a quick tutorial about formspree, check out this [tutsplus tutorial](https://webdesign.tutsplus.com/tutorials/quick-tip-add-a-formspree-form-to-your-static-sites--cms-23870) that covers different aspects and features of the form tool.

### Footer Section

The Footer contains an optional copyright where you can place your name as well as an unordered list of all of your social or coding related profiles. By default it contains Github, Stack Overflow, Facebook, Twitter, and Google Plus. You can add or remove them easily and simply use the Font Awesome icon associated with the social profile you wish to use. For a list of all icons, [click here](http://fontawesome.io/icons/).

## Changelog

### 1.1.3

* Added default favicon to be used or changed
* Added `sticky` class to make header fixed
* Updated docs to add image section

### 1.1.2

* Added `no-scroll` class option to header navigation anchor if you want to link to external site
* Changed contact form input / textarea colours to be based off `$base-color`
* Changed main background to 100vh so it doesn't overflow if viewport height < 700px

### 1.1.1

* Made input placeholder text more readable
* Removed timeline line when no JS
* Added some basic styling to timeline when no JS

### 1.1.0

* Fixed menu toggle on mobile devices
* Fixed z-index / scrolling issue with mobile menu
* Mobile menu now closes once a nav element is hit

## License

Completely free (MIT)! See [LICENSE.md](LICENSE.md) for more.
