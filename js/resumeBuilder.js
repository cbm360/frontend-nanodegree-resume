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
        $("#topContacts").append(formattedLocation);
        $("#header").append(formattedWelcome);
        $("#footerContacts").append(formattedContactPhone);
        $("#footerContacts").append(formattedContactEmail);
        $("#footerContacts").append(formattedContactGithub);

        if (bio.skills.length > 0) {
            var skill = null;

            $("#header").append(HTMLskillsStart);

            for (skill in bio.skills) {
                if (bio.skills.hasOwnProperty(skill)) {
                    var formattedSkills = HTMLskills.replace("%data%", bio.skills[skill]);
                    $("#skills").append(formattedSkills);
                }
            }
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
    ],
    "display": function() {
        if (work.jobs.length > 0) {
            var position = null;

            for (position in work.jobs) {
                if (work.jobs.hasOwnProperty(position)) {
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
    }
};

var education = {
    "schools": [
        {
            "name": "University of Northern Colorado",
            "location": "Greeley, CO",
            "degree": "BA",
            "majors": "Communication",
            "dates": "1998 - 2002",
            "url": "http://www.unco.edu"
        },
        {
            "name": "University of Northern Colorado",
            "location": "Greeley, CO",
            "degree": "BS",
            "majors": "Business Administration and Management",
            "dates": "1998 - 2002",
            "url": "http://www.unco.edu"
        }
    ],
    "OnlineCourses": [
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
        var school = null;

        if (education.schools.length > 0) {
            for (school in education.schools) {
                if (education.schools.hasOwnProperty(school)) {
                    $("#education").append(HTMLschoolStart);

                    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name).replace("#", education.schools[school].url);
                    $(".education-entry:last").append(formattedSchoolName);

                    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
                    $(".education-entry:last").append(formattedSchoolDegree);

                    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
                    $(".education-entry:last").append(formattedSchoolDates);

                    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
                    $(".education-entry:last").append(formattedSchoolLocation);

                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
                    $(".education-entry:last").append(formattedSchoolMajor);
                }
            }
        }

        if (education.OnlineCourses.length > 0) {
            var course = null;

            $("#education").append(HTMLonlineClasses);

            for (course in education.OnlineCourses) {
                if (education.OnlineCourses.hasOwnProperty(course)) {
                    $("#education").append(HTMLschoolStart);

                    var formattedCourseTitle = HTMLonlineTitle.replace("%data%", education.OnlineCourses[course].title).replace("#", education.OnlineCourses[course].url);
                    $(".education-entry:last").append(formattedCourseTitle);

                    var formattedCourseScool = HTMLonlineSchool.replace("%data%", education.OnlineCourses[course].school);
                    $(".education-entry:last").append(formattedCourseScool);

                    var formattedCourseDate = HTMLonlineDates.replace("%data%", education.OnlineCourses[course].date);
                    $(".education-entry:last").append(formattedCourseDate);
                }
            }
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
            var project = null;
            var image = null;

            for (project in projects.projects) {
                if (projects.projects.hasOwnProperty(project)) {
                    $("#projects").append(HTMLprojectStart);

                    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
                    $(".project-entry:last").append(formattedProjectTitle);

                    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
                    $(".project-entry:last").append(formattedProjectDates);

                    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
                    $(".project-entry:last").append(formattedProjectDescription);

                    for (image in projects.projects[project].images) {
                        if (projects.projects[project].images.hasOwnProperty(image)) {
                            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                            $(".project-entry:last").append(formattedProjectImage);
                        }
                    }
                }
            }
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