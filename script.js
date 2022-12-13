document.getElementById('skills').addEventListener('click', skillsdisplay, false);
document.getElementById('projects').addEventListener('click', projectsdisplay, false);
document.body.addEventListener('load', display, false);

var tarjeta = document.getElementById('tarjeta');

var skills = document.getElementById("skills");
var skillsh3 = document.getElementById('skillsh3');
var skillscontainer = document.getElementById('skillscontainer');

var projects = document.getElementById("projects");
var projectsh3 = document.getElementById("projectsh3");
var projectscontainer = document.getElementById("projectscontainer");

function skillsdisplay(){
    skills.style.animation = 'skillsclick 0.6s  alternate both';
    projects.style.animation = '';

    tarjeta.style.display = 'none';
    projectscontainer.style.display = 'none';

    skillsh3.style.zIndex = '3';
    projectsh3.style.zIndex = '0';
    skillsh3.style.transition = 'all 1s ease';
    skillsh3.style.transform = 'rotate(0deg)';
    projectsh3.style.transform = 'rotate(44deg)';

    skillscontainer.style.animation = 'containerdisplay 1s';
    skillscontainer.style.display = 'flex';
}

function projectsdisplay(){
    projects.style.animation = 'projectsclick 0.6s  alternate both';
    skills.style.animation = '';

    tarjeta.style.display = 'none';
    skillscontainer.style.display = 'none';

    projectsh3.style.zIndex = '3';
    skillsh3.style.zIndex = '0';
    projectsh3.style.transition = 'all 1s ease';
    projectsh3.style.transform = 'rotate(0deg)';
    skillsh3.style.transform = 'rotate(-44deg)';

    projectscontainer.style.display = 'flex';
}


function display(){
    document.getElementById("main").style.transition = "all 1s ease";
    document.getElementById("main").style.display = "flex";
}

function inicio(){
    skills.style.animation = '';
    projects.style.animation = '';

    tarjeta.style.animation = 'containerdisplay 1s both';
    tarjeta.style.display = '';
    projectscontainer.style.display = 'none';

    skillsh3.style.zIndex = '0';
    projectsh3.style.zIndex = '0';
    skillsh3.style.transition = 'all 1s ease';
    skillsh3.style.transform = 'rotate(-44deg)';
    projectsh3.style.transform = 'rotate(44deg)';
    
    skillscontainer.style.display = '';

}
