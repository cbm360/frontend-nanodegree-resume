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
    "skills": [" JavaScript", " jQuery", " NodeJS", " Aurelia", " KnockoutJS", " Leaflet", " Ruby on Rails", " GIT", " Visual Studio Online", " Twitter Bootstrap", " HTML5", " CSS3", " T-SQL", " MongoDB"]
};

var work = {
    "positions": [
        {
            "employer": "CAP Logistics",
            "title": "Scrum Master, Front-End Web Developer",
            "city": "Denver",
            "state": "CO",
            "years": "July 2013 - Current"
        },
        {
            "employer": "CAP Logistics",
            "title": "Business Analyst",
            "city": "Denver",
            "state": "CO",
            "years": "April 2010 - July 2013"
        },
        {
            "employer": "MECR Ventures, LLC",
            "title": "CO-Founder, Business Consultant",
            "city": "Denver",
            "state": "CO",
            "years": "August 2008 - January 2011"
        },
        {
            "employer": "Sigma Think Tank",
            "title": "CO-Founder",
            "city": "Denver",
            "state": "CO",
            "years": "August 2008 - December 2010"
        },
        {
            "employer": "Tradition Golf Club",
            "title": "Assistant General Manager",
            "city": "La Quinta",
            "state": "CA",
            "years": "October 2005 - July 2008"
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

var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedContactPhone = HTMLmobile.replace("%data%", bio.contactInfo.phone);
var formattedContactEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
var formattedContactGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (skill in bio.skills) {
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
    }
}

if (work.positions.length > 0) {
    for (position in work.positions) {
        var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.positions[position].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.positions[position].title);
        var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;

        $("#workExperience").append(HTMLworkStart);
        $(".work-entry:last").append(formattedEmployerTitle);
    }
}

$("#header").append(formattedPic);
$("#header").prepend(formattedName);
$("#header").append(formattedRole);
$("#header").append(formattedContactPhone);
$("#header").append(formattedContactEmail);
$("#header").append(formattedContactGithub);
$("#header").append(formattedWelcome);
//$("#header").append(HTMLskillsStart);
// $("#header").append(formattedSkills);

