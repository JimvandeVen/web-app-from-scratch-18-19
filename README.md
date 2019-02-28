# Web App From Scratch @cmda-minor-web 18-19

In this course I'm building a web application without frameworks or unnececairy librarys. So, as much as pussible, with plain html, css and javascript. The endproduct is a modular prototype for a single-page web app. Data is called from an external API and where nececairy manipulated and rendered in the web app. I'll learn to bring structure to my code and how to build a prototype from scratch. With this knowledge I will understand better how existing API's, libraries and frameworks work.

[DEMO](https://gifted-albattani-e5c23d.netlify.com/)

## Intro
My application is a search engine wherein you can find all existing magic the gathering cards. This is done with a small form with a few fields you need to fill in. After filling in the fields you get a selection of the cards that fall within your chosen filters. Up to 100 cards are shown. These cards are requested from an API where more than 10.000 cards exist. The goal is to search through those cards.

## API 

De [API](https://docs.magicthegathering.io/) die ik gebruik is de onofficiële REST interface voor Magic: The Gathering. Deze API returned maximaal 100 kaarten per call. De data die je terugkrijgt is in JSON. Je kan maximaal 5000 calls per uur doen.

##  Actor diagram

![Interaction diagram](src/interactionDiagram.png)


## Interaction diagram



## Designs en best Practices

Een van de best practices die ik heb gebruikt is Functional programming.

## Wishlist

- [x] Detail pagina
- [ ] Meer onderdelen in de form verwerken
- [x] Code splitsen in modules


Welke API wordt gebruikt en wat zijn de beperkingen? (rate limit)
Hoe flowed interactie door de applicatie? (interaction diagram)
Welke design patterns en best practices
Wat zou je nog willen toevoegen (feature wishlist / backlog)


## Week 2 - Design and Refactor 🛠

Doel: Breakdown maken van de web app. Routes en states toevoegen. Detailpagina renderen.

[Opdrachten](https://drive.google.com/open?id=1GMDTdW3LycAYpZSFI6gk_lrKrx8-zLWrNh69aaVEH5Y)

[Slides](https://drive.google.com/open?id=1IqQeu1m0dQiSC_KCvrn8eencAgtYe7X6qT-gm0n9Bmc)

## Week 3 - Wrapping up 🎁

Doel: Data manipuleren. Code splitsen in modules. Reflecteren op eindresultaat.

[Opdrachten](https://drive.google.com/open?id=13pKQu72pshaEzKw9q5JHLa-aop85nMP6nDCdqioWjoQ)

[Slides](https://drive.google.com/open?id=1BSzGYNLMgtHD4HRnK7f0DgyTv4Pg3xsQwD_eYNo7v0Y)


<!-- Add a link to your live demo in Github Pages 🌐-->

<!-- ☝️ replace this description with a description of your own work -->

<!-- Add a nice image here at the end of the week, showing off your shiny frontend 📸 -->

<!-- Maybe a table of contents here? 📚 -->

<!-- How about a section that describes how to install this project? 🤓 -->

<!-- ...but how does one use this project? What are its features 🤔 -->

<!-- What external data source is featured in your project and what are its properties 🌠 -->

<!-- Maybe a checklist of done stuff and stuff still on your wishlist? ✅ -->

<!-- How about a license here? 📜 (or is it a licence?) 🤷 -->
