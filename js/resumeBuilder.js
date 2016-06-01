var bio = {
    "name": "Camron Moore",
    "role": "Front-End Web Developer",
    "contactInfo": {
        "email": "camronbmoore@gmail.com",
        "phone": "720-263-0276",
        "github": "https://github.com/cbm360",
        "linkedin": "https://www.linkedin.com/in/camronmoore"
    },
    "picture": "images/headshot.jpg",
    "welcomeMessage": "Life Long Learner, Team Leader, Front-End Web Developer, Scrum Master",
    "skills": [" JavaScript", " jQuery", " NodeJS", " Aurelia", " KnockoutJS", " Leaflet", " Ruby on Rails", " GIT", " Visual Studio Online", " Twitter Bootstrap", " HTML5", " CSS3", " T-SQL", " MongoDB"],
    "location": "Denver, CO"
};

var work = {
    "positions": [
        {
            "employer": "CAP Logistics",
            "title": "Scrum Master, Front-End Web Developer",
            "city": "Denver",
            "state": "CO",
            "dates": "July 2013 - Current",
            "description": "Responsible for leading all Scrum ceremonies, and leading all front-end web development."
        },
        {
            "employer": "CAP Logistics",
            "title": "Business Analyst",
            "city": "Denver",
            "state": "CO",
            "dates": "April 2010 - July 2013",
            "description": "Write software requirements, and design and build actionable business intelligence."
        },
        {
            "employer": "MECR Ventures, LLC",
            "title": "CO-Founder, Business Consultant",
            "city": "Denver",
            "state": "CO",
            "dates": "August 2008 - January 2011",
            "description": "Consult with businesses on business intelligence, recruiting, and business process."
        },
        {
            "employer": "Sigma Think Tank",
            "title": "CO-Founder",
            "city": "Denver",
            "state": "CO",
            "dates": "August 2008 - December 2010",
            "description": "Non-profit vendor free networking group."
        },
        {
            "employer": "Tradition Golf Club",
            "title": "Assistant General Manager",
            "city": "La Quinta",
            "state": "CA",
            "dates": "October 2005 - July 2008",
            "description": "Oversee all club operations."
        }
    ]
};

var education = {
    "schools": [
        {
            "name": "University of Northern Colorado",
            "degree": "Bachelors Degree Communication",
            "years": "1998 - 2002"
        },
        {
            "name": "University of Northern Colorado",
            "degree": "Bachelors Degree Business Administration and Management",
            "years": "1998 - 2002"
        }
    ],
    "Online Courses": [
        {
            "name": "Udacity",
            "degree": "Nanodegree Front-End Web Developer",
            "years": "2016"
        },
        {
            "name": "Udemy",
            "degree": "Complete Ruby on Rails Developer",
            "years": "2016"
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Custom Proprietary CRM",
            "dates": "2014 - 2016",
            "description": "This application replaces a legacy desktop CRM with a custom web based responsive CRM. Additional functionality for geospatial representation of customers, and advanced analytics is required.",
            "images": "images/crm.jpg"
        },
        {
            "title": "Real Time Pricing Application",
            "dates": "2015 - 2016",
            "description": "The purpose of this application is to provide call center operations users with empirical data and real time market trends for spot rate pricing.",
            "images": "images/pricing.jpg"
        },
        {
            "title": "Customer Portal",
            "dates": "2016",
            "description": "This project is a refresh of an existing ASP.NET customer portal to allow customer to login and enter new shipments, view historical shipments, and request quotes. A new authentication layer is also needed using Auth0 and a custom database.",
            "images": "images/customerportal.jpg"
        },
        {
            "title": "Business Intelligence",
            "dates": "2014",
            "description": "The purpose of the dashboard is to provide actionable business intelligence to user ranging from company performance and financials to customer information, and user performance.",
            "images": "images/businessintelligence.jpg"
        },
        {
            "title": "Alpha Blog",
            "dates": "2016",
            "description": "The purpose of this project is to create a basic blog using Ruby on Rails.",
            "images": "images/alphablog.jpg"
        },
        {
            "title": "Finance Tracker",
            "dates": "2016",
            "description": "The purpose of this project is to create a basic finance tracker using Ruby on Rails, Yahoo finance API, and Devise authentication.",
            "images": "images/financetracker.jpg"
        }
    ]
}

function displayBio(){
    var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedContactPhone = HTMLmobile.replace("%data%", bio.contactInfo.phone);
    var formattedContactEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
    var formattedContactGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.location);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);

    $("#header").prepend(formattedPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedContactPhone);
    $("#topContacts").append(formattedContactEmail);
    $("#topContacts").append(formattedContactGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedWelcome);
}
displayBio();

function displayWork(){
    if (work.positions.length > 0) {
        for (position in work.positions) {
            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.positions[position].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.positions[position].title);
            var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            $("#workExperience").append(HTMLworkStart);
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.positions[position].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescripiton = HTMLworkDescription.replace("%data%", work.positions[position].description);
            $(".work-entry:last").append(formattedDescripiton);
        }
    }
}
displayWork();

function displaySkills(){
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (skill in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
        }
    }
}
displaySkills();

function recordClick(){
    $(document).click(function(loc) {
        var x = loc.pageX;
        var y = loc.pageY;
        logClicks(x,y);
    });
}
recordClick();



