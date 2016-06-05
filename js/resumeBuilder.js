var bio = {
    "name": "Camron Moore",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "720-263-0276",
        "email": "camronbmoore@gmail.com",
        "github": "https://github.com/cbm360",
        "location": "Denver, CO"
    },
    "welcomeMessage": "Life Long Learner and Team Leader",
    "skills": ["Scrum", " JavaScript", " NodeJS", " Aurelia", " KnockoutJS", " Leaflet", " Ruby on Rails", " Twitter Bootstrap", " HTML5", " CSS3"],
    "biopic": "images/headshot.jpg",
    "display": function() {
        var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedContactPhone = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedContactEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedContactGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

        $("#header").append(formattedPic);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedContactPhone);
        $("#topContacts").append(formattedContactEmail);
        $("#topContacts").append(formattedContactGithub);
        $("#header").append(formattedWelcome);
        $("#footerContacts").append(formattedContactPhone);
        $("#footerContacts").append(formattedContactEmail);
        $("#footerContacts").append(formattedContactGithub);
        $("#footerContacts, #topContacts").append(formattedLocation);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);

            $.each(bio.skills, function (index, value) {
                var formattedSkills = HTMLskills.replace("%data%", value);
                $("#skills").append(formattedSkills);
            });
        }
    }
};

var work = {
    "jobs": [
        {
            "employer": "CAP Logistics",
            "title": "Scrum Master, Front-End Web Developer",
            "location": "Denver, CO",
            "dates": "July 2013 - Current",
            "description": "Responsible for leading all Scrum ceremonies,"
                            + " and leading all front-end web development."
        },
        {
            "employer": "CAP Logistics",
            "title": "Business Analyst",
            "location": "Denver, CO",
            "dates": "April 2010 - July 2013",
            "description": "Write software requirements, and design and"
                            + "build actionable business intelligence."
        },
        {
            "employer": "MECR Ventures, LLC",
            "title": "CO-Founder, Business Consultant",
            "location": "Denver, CO",
            "dates": "August 2008 - January 2011",
            "description": "Consult with businesses on business intelligence,"
                            + " recruiting, and business process."
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
    ],
    "display": function() {
        if (work.jobs.length > 0) {
            $.each(work.jobs, function (index, value) {
                var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", value.employer);
                    var formattedWorkTitle = HTMLworkTitle.replace("%data%", value.title);
                    var formattedEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
                    var formattedDates = HTMLworkDates.replace("%data%", value.dates);
                    var formattedDescripiton = HTMLworkDescription.replace("%data%", value.description);
                    var formattedLocation = HTMLworkLocation.replace("%data%", value.location);

                    $("#workExperience").append(HTMLworkStart);
                    $(".work-entry:last")
                        .append(formattedEmployerTitle)
                        .append(formattedDates)
                        .append(formattedDescripiton)
                        .prepend(formattedLocation);
            });
        }
    }
};

var education = {
    "schools": [
        {
            "name": "University of Northern Colorado",
            "location": "Greeley, CO",
            "degree": "BA",
            "majors": ["Communications"],
            "dates": "1998 - 2002",
            "url": "http://www.unco.edu"
        },
        {
            "name": "University of Northern Colorado",
            "location": "Greeley, CO",
            "degree": "BS",
            "majors": ["Business Administration and Management"],
            "dates": "1998 - 2002",
            "url": "http://www.unco.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "Nanodegree Front-End Web Developer",
            "school": "Udacity",
            "date": "2016",
            "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        },
        {
            "title": "Complete Ruby on Rails Developer",
            "school": "Udemy",
            "date": "2016",
            "url": "https://www.udemy.com/the-complete-ruby-on-rails-developer-course/"
        }
    ],
    "display": function(){
        if (education.schools.length > 0) {
            $.each(education.schools, function (index, value) {
                var formattedSchoolName = HTMLschoolName.replace("%data%", value.name).replace("#", value.url);
                var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", value.degree);
                var formattedSchoolDates = HTMLschoolDates.replace("%data%", value.dates);
                var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", value.location);
                var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", value.majors[0]);

                $("#education").append(HTMLschoolStart);
                $(".education-entry:last")
                    .append(formattedSchoolName + formattedSchoolDegree)
                    .append(formattedSchoolDates)
                    .append(formattedSchoolLocation)
                    .append(formattedSchoolMajor);
            });
        }

        if (education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses);

            $.each(education.onlineCourses, function (index, value) {
                var formattedCourseTitle = HTMLonlineTitle.replace("%data%", value.title).replace("#", value.url);
                var formattedCourseSchool = HTMLonlineSchool.replace("%data%", value.school);
                var formattedCourseDate = HTMLonlineDates.replace("%data%", value.date);
                var formattedCourseUrl = HTMLonlineURL.replace("%data%", value.url);

                $("#education").append(HTMLschoolStart);
                $(".education-entry:last")
                    .append(formattedCourseTitle + formattedCourseSchool)
                    .append(formattedCourseDate)
                    .append(formattedCourseUrl);
            });
        }
    }
};

var projects = {
    "projects": [
        {
            "title": "Custom Proprietary CRM",
            "dates": "2014 - 2016",
            "description": "This application replaces a legacy desktop CRM with a custom web based responsive CRM. Additional functionality for geospatial representation of customers, and advanced analytics is required.",
            "images": ["images/crm.jpg", "images/crm_customers.jpg", "images/crm_shipments.jpg"]
        },
        {
            "title": "Real Time Pricing Application",
            "dates": "2015 - 2016",
            "description": "The purpose of this application is to provide call center operations users with empirical data and real time market trends for spot rate pricing.",
            "images": ["images/pricing.jpg"]
        },
        {
            "title": "Customer Portal",
            "dates": "2016",
            "description": "This project is a refresh of an existing ASP.NET customer portal to allow customer to login and enter new shipments, view historical shipments, and request quotes. A new authentication layer is also needed using Auth0 and a custom database.",
            "images": ["images/portal_auth.jpg", "images/portal_newShipment.jpg", "images/customerportal.jpg"]
        },
        {
            "title": "Business Intelligence",
            "dates": "2014",
            "description": "The purpose of the dashboard is to provide actionable business intelligence to user ranging from company performance and financials to customer information, and user performance.",
            "images": ["images/businessintelligence.jpg"]
        },
        {
            "title": "Alpha Blog",
            "dates": "2016",
            "description": "The purpose of this project is to create a basic blog using Ruby on Rails.",
            "images": ["images/alphablog.jpg", "images/alphablog_articles.jpg", "images/alphablog_categories.jpg"]
        },
        {
            "title": "Finance Tracker",
            "dates": "2016",
            "description": "The purpose of this project is to create a basic finance tracker using Ruby on Rails, Yahoo finance API, and Devise authentication.",
            "images": ["images/financetracker.jpg", "images/financetracker_profile.jpg", "images/financetracker_friends.jpg"]
        }
    ],
    "display": function() {
        if (projects.projects.length > 0) {
            $.each(projects.projects, function (index, value) {
                var formattedProjectTitle = HTMLprojectTitle.replace("%data%", value.title);
                var formattedProjectDates = HTMLprojectDates.replace("%data%", value.dates);
                var formattedProjectDescription = HTMLprojectDescription.replace("%data%", value.description);

                $("#projects").append(HTMLprojectStart);
                $(".project-entry:last")
                    .append(formattedProjectTitle)
                    .append(formattedProjectDates)
                    .append(formattedProjectDescription);

                $.each(value.images, function (index, image) {
                    var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
                    $(".project-entry:last").append(formattedProjectImage);
                });
            });
        }
    }
};


bio.display();
work.display();
projects.display();
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