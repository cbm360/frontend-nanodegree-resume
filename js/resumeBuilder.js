var bio = {
    "name": "Camron Moore",
    "role": "Front-End Web Developer",
    "contacts": {
        "email": "camronbmoore@gmail.com",
        "phone": "720-263-0276",
        "github": "https://github.com/cbm360",
        "linkedin": "https://www.linkedin.com/in/camronmoore",
        "location": "Denver, CO"
    },
    "picture": "images/headshot.jpg",
    "welcomeMessage": "Life Long Learner, Team Leader, Front-End Web Developer, Scrum Master",
    "skills": [" JavaScript", " jQuery", " NodeJS", " Aurelia", " KnockoutJS", " Leaflet", " Ruby on Rails", " Twitter Bootstrap", " HTML5", " CSS3"]
};

var work = {
    "jobs": [
        {
            "employer": "CAP Logistics",
            "title": "Scrum Master, Front-End Web Developer",
            "location": "Denver, CO",
            "dates": "July 2013 - Current",
            "description": "Responsible for leading all Scrum ceremonies, and leading all front-end web development."
        },
        {
            "employer": "CAP Logistics",
            "title": "Business Analyst",
            "location": "Denver, CO",
            "dates": "April 2010 - July 2013",
            "description": "Write software requirements, and design and build actionable business intelligence."
        },
        {
            "employer": "MECR Ventures, LLC",
            "title": "CO-Founder, Business Consultant",
            "location": "Denver, CO",
            "dates": "August 2008 - January 2011",
            "description": "Consult with businesses on business intelligence, recruiting, and business process."
        },
        {
            "employer": "Sigma Think Tank",
            "title": "CO-Founder",
            "location": "Denver, CO",
            "dates": "August 2008 - December 2010",
            "description": "Non-profit vendor free networking group."
        },
        {
            "employer": "Tradition Golf Club",
            "title": "Assistant General Manager",
            "location": "La Quinta, CA",
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

            "years": "1998 - 2002",
            "location": "Greeley, CO"
        },
        {
            "name": "University of Northern Colorado",
            "degree": "Bachelors Degree Business Administration and Management",
            "years": "1998 - 2002",
            "location": "Greeley, CO"
        }
    ],
    "OnlineCourses": [
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
};


bio.display = function() {
    var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedContactPhone = HTMLmobile.replace("%data%", bio.contacts.phone);
    var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills);

    $("#header").append(formattedPic);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedContactPhone);
    $("#topContacts").append(formattedContactEmail);
    $("#topContacts").append(formattedContactGithub);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedWelcome);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (skill in bio.skills) {
            $("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
        }
    }
}
bio.display();

projects.display = function() {
    if (projects.projects.length > 0) {
        for (project in projects.projects) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
            $(".project-entry:last").append(formattedProjectTitle);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
            $(".project-entry:last").append(formattedProjectDates);

            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
            $(".project-entry:last").append(formattedProjectDescription);

            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
            $(".project-entry:last").append(formattedProjectImage);
        }
    }
}
projects.display();

work.display = function() {
    if (work.jobs.length > 0) {
        for (position in work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[position].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[position].title);
            var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[position].dates);
            $(".work-entry:last").append(formattedDates);

            var formattedDescripiton = HTMLworkDescription.replace("%data%", work.jobs[position].description);
            $(".work-entry:last").append(formattedDescripiton);
        }
    }
}
work.display();

education.display = function(){
    if (education.schools.length > 0) {
        for (school in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
            $(".education-entry:last").append(formattedSchoolName);

            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
            $(".education-entry:last").append(formattedSchoolDegree);

            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            $(".education-entry:last").append(formattedSchoolDates);

            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
            $(".education-entry:last").append(formattedSchoolLocation);
        }
    }

    if (education.OnlineCourses.length > 0) {

    }
}
education.display();

function mapDisplay(){
    $("#mapDiv").append(googleMap);
}
mapDisplay();

function recordClick(){
    $(document).click(function(loc) {
        var x = loc.pageX;
        var y = loc.pageY;
        logClicks(x,y);
    });
}
recordClick();