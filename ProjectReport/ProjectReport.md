
<h1 align="center"> CFG Spring Nanodegree 2022 Group Project Report  </h1>
<p align="center">
  <img src="../packedit/src/styles/Images/Logos/full-logo.png" />
</p>

<p align="center"> created by </p>
<h2 align="center"> "Have you tried restarting?" </h2>


<br>
<p> Team member are:
<ul>  
<li> Eilidh Quinn
<li> Gracialine Ong
<li>Laura Almond
<li> BoGyeong Kim
</ul>


STILL TO CONSIDER/ADD:
File structure - took screenshot but may need to update for final report.

<br>
<h2> 1. Introduction </h2>

<p>This report explains how we approached PackedIt, our FullStack specialisation final project.</p>

<h3>1.1 Aims and objectives of the project<h3>

<p> The aim of this project was to build a complete, functional and user friendly web application in React. We aimed to build a web application called <b>PackedIt</b> which travellers can use to create and store lists of the items they need to remember to pack for trips.<p>

<p> In order to meet our aims and objectives are app must allow users to:<p>
<ol>
<li> create a packing list which takes in a list name, destination and date of travel.
<li> add personalised categories.
<li> mark an item as packed, delete an item or modify an item.
</ol>


<h3> 1.2 Roadmap of the report </h3>

<p>This report will cover: </p>
<ul>
<li> Introduction - describes the aims of our web app.
<li> Background - 
<li> Specifications and design
<li> Implementation and execution
<li> Testing and evaluation
<li> Conclusion
</ul>



<h2> 2. Background </h2>

<p>PackedIt has been designed to help frequent travellers plan what they need to remember for their trips with ease and simplicity. No more forgetting your passport, suncream or headphones and having to make a last minute trip home or fork out to buy something new while on holiday - time and money is precious when you are travelling!<p>

<p>PackedIt would be a complimentary addition to Skyscanner’s collection of traveller-first functionality that makes travel simple so that people are empowered to get out and explore what the world has to offer. We have created a web application that is aligned to the Skyscanner values of simplicity and user friendly design and functionality.</p>

<b>IS THE BELOW NEEDED OR IS IT OK WE CAPTURE IT IN REQUIREMENTS? THIS IS MORE THE FUNCTIONALITY AND WHAT THE USER CAN DO?</b>
<p>PackedIt allows users to:
<ul>
<li> Create a list per trip.  
<li> For each list, users can enter a list name, a destination and a date of travel.  This is then displayed on the 'Your List' page.
<li> Within the 'Your List' page there is a drop down to select which list the user would like to view.
<li> In each list the user can add as many personalised categories as they wish.
<li> Within each category the user can add as many items as they wish.
<li> Items can then be marked as packed, modified (if a typo or spelling mistake is made) or deleted (if the item is no longer wanted).
</ul> 

</p>


**explain the key functionality that we ended up with**

<h2> 3. Specifications and Design </h2>

<h3> 3.1 Stack/Tools & Libraries </h3>

<p> Our application was build using ReactJS.  However we installed a number of other packages to help with the styling as well as the back-end database. 

We also used:
<ul>
<li> React Bootstrap (including sass) to improve our styling.
<li> Material UI to improve our design.
<li> Firebase to store our data for any list created.
</ul>

We have created a simple four page web application with branding that is centred around simplicity, clean pages and using colours from around the world, aligned to Skyscanner’s branding values. 
<p>

<h3> 3.2 Requirements </h3>

<p>When designing our web application we agreed on a set of features which would make up our minimal viable product (MVP).  We also included a number of extensions that we would have like to implement if time allowed.  However our MVP meets all the aims of the project.
 

Features we implemented:
<ul>
<li> A home page where users can create their list.
<li> An about page with information on the app and our project team.
<li> A contact us page.
<li> User can 
<ul>
<li> create a list.
<li> add a list name (not mandatory).
<li> add a list destination (not mandatory).
<li> add a trip date (not mandatory).
<li> delete a list.
<li> create a category.
<li> edit a category.
<li> delete a category.
<li> create an item.
<li> view items already added.
<li> edit an item.
<li> mark an item as packed.
<li> delete an item.
</ul>
<li> A 'Page not found' page which is displayed if the user tries to visit a page that does not exist. 
</ul>

<p>Further features we would have liked to have implemented:</p>
<ul>
<li> Creating a log in system for users
<li> Sort items based on whether they have been completed or not.
<li> Connect to a weather API for the trip destination to display the current weather forecast.
<li> Option for user to create a ‘favourites’ or ‘basics’ list that can be copied over for each trip so they always have their essentials.
<li> Suggest items to pack based on weather e.g. umbrella if raining, suncream if over certain temperature, jacket if below a certain temperature.
<li> Holiday destination or type of holiday to impact the images on the web page. 
<li> Drag & drop or move around list items on the page.
</ul>


<h3> 3.3 Design </h3>

<p> All of the design choices we made have been in keeping with the values of keeping things simple and making the user experience as easy and enjoyable as possible, including:
<ul>
<li> Clean minimal look with a simple, selective colour palette 
<li> Separate colours for key tappable and non tappable elements 
<li> Landing page with clear 'create your list' functionality emphasises the purpose of the site and allows for an immediate start creating the list
<li> Made starting as easy as possible by adding suggestions in text boxes, categories for quick generation of a list and suggested items for each category
<li> Logo & brand name on the top left, nav bar buttons at the top right, key creating categories functionality down left hand side and bottom right following the stopping points in the Z pattern.
</ul>
</p>

<p>To sit alongside clean white backgrounds and white and dark grey text, we chose three warm, vibrant and youthful colours to appeal to a young and diverse audience of travellers. </p>

<p>The logo has the shape of a suitcase easily recognisable as a symbol for travelling and packing, with a tick in the middle indicating PackedIt is about 'checking' things off and having everything needed for a trip.</p>

<p>Additionally we used imagery of travelling and packing that has hints of these colours so that all visuals in the site are in keeping with this colour theme.</p>

<p>We opted to go for soft rounded edges on any icons, buttons and other shapes. The research tells us that rounded edges take less cognitive effort to visually process and they are also effective content containers because they almost point inward towards the center. </p>

<p>We chose two Sans Serif fonts (Raleway and Nunito) which again, due to their rounded edges, take less cognitive effort to process and have an approachable and fun feel to them. </p>

<h3> 3.4 Architecture </h3>
<p>PackedIt is built with ReactJS connecting to Google's Firebase for the back-end database.  Below is a simple diagram of our architecture:</p>

<p align="center">
  <img src="../ProjectReport/images/AppArchitecture.png" />
</p>

<h3> 3.5 File Structure <h3>

We split out every component into it's own component.js file and these were all saved within the components folder.  We also had seperate js file for each page.  Style sheets were also split out where appropriate.  See screenshot below for our file structure:

<p align="center">
  <img src="../ProjectReport/images/FileStructure.png" />
</p>


ADD IN FLOW OF APP?

<h2> 4. Implementation and execution </h2>

<h3> 4.1 Development approach and team member roles</h3>

<p>In our first two meetings as a group we discussed our strengths and weaknesses, our availability for dedicated project work over the four week period and confirmed our core project idea. </p>

<p>Below is out team's SWOT analysis.  As can be seen a lot of technology we used to create PackedIt was brand new to us and it was a steep learning curve, however it also offered us the opportunity to learn and work together as a team to deliver our final project PackedIt.</p>

<p align="center">
  <img src="../ProjectReport/images/SWOT.png" />
</p>

<p>Team member roles changed over the course of the project based on availability and other commitments.  The team worked together to review key documents and make final decisions based on individual work (for example design decisions).
</p>

<p>To ensure collaboration and consistency we used a shared GitHub repository to store our code.  This allowed different team members to work on different branches at the same time and then at the appropriate time merging these into the main branch.  Branches were only merged after a branch was working and the full team agreed to merge it into the main branch.  This ensured our main ranch was always the latest most up to date working version.</p>


<h3> 4.2 Implementation process (achievements, challenges, decision to change something)</h3>

<p>Throughout this project we have worked well together to produce our final project app PackedIt.  This has been achieved through collaborative working, providing feedback on work and everyone in the team understanding the goal of the project.</p>

<p> However, this has not come without challenges, a few challenges we faced were:
<ul>
<li> Initially intended on having a one page scroll navigation but due to the complexity, we choose to focus our efforts on having a fully functioning packing list.
<li> Figuring out the correct data structure of our items and categories.  Originally they were held seperately however on further investigation we decided to combine them into the one object.  However accessing these categories and items was then a challenge in itself.
<li> One particular issue we have faced (and so far have been unable to solve) is being able to edit the item, this is very nested and we have not been able to edit the item.
<li> We experienced issues with Firebase quota limits, this was due to our app 'spamming' firebase.
</ul>
</p>
<h3> 4.3 Agile development<h3>
<p>We approached the project in an agile way, loosley following SCRUM with each week being a week long sprint.  We held two weekly virtual meetings:
<ul>
<li> Thursday evenings we met at 18:00 for a quick 'stand-up' to discuss our progress on tasks, what our plans were for the next day or two and to discuss any key issues that had popped up.
<li> Sundays we met at 10:30 for a longer meeting where we made decisions on any issues that popped up, discussed what the plans was for the following week, show features that had been implemented as well as working on any larger parts of work or work that required us all to contribute.  Sometimes this included doing paired programming via Visual Studio Code Live Share extension.
</ul>
 </p> 
<p>We also kept in touch throughout the project development on Slack via various dedicated channels. This allowed the full team to keep up to date with the progress of the project and work around whatever other commitments we had.  This space had links to all of our other key shared workspaces and accounts e.g. Google Drive, Trello, GitHub & Figma.</p>
<p> To support the delivery of the project we also had a Trello board. We used this as the basis of our sprint review and sprint planning meetings.  Items were place in order of priority so it was clear which parts we should work on first.  Each member was able to take on tasks and place them in the appropriate column (for example, backlog, doing, blocked or testing).  This also allowed team members to assign themsleves tasks based on skill and availability.<p>

<p align="center">
  <img src="../ProjectReport/images/Trello.png" />
</p>

  
<p>We also had a Slack workspace where we kept in daily contact via various dedicated channels for project planning.  In this Slack channel, we had bookedmarks to links to other shared workspaces and accounts e.g. Google Drive, Trello & GitHub.</p>

<p>We frequently refactored code to find better ways of structuring our code for readability and sustainability, trying not to shy away from change when it was necessary to improve the project.</p>



    -  **did we do code reviews?**

<h2> 5. Testing and evaluation </h2>
<h3> 5.1 Testing strategy </h3>
<h3> 5.2 Functional and user testing </h3>
<h3> 5.3 System limitations </h3>

<h2> 6. Conclusion </h2>