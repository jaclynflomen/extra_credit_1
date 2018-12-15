var classData = {
    coursename: "Oil & Gas",
    coursecode: "BCU-1001",
    profname: "Fname Lname",
    classtime : ["Tues 1PM", "Fri 9AM"],
    profimg: "images/eEdu_prof.jpg",
    topImg: "images/eEdu_mainImg.jpg",
    professor: "images/eEdu_profile.jpg",
    logo: "images/eEdu_ANUC_logo.jpg",
    classProf: "Oil & Gas - BCU-1001",
    admin: "Admin",

    coursedesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus incidunt provident officiis eligendi excepturi dolor perspiciatis amet, cupiditate soluta similique culpa possimus magnam molestias natus mollitia, repellat aliquid, quisquam! Numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid similique dolor, repudiandae quo quae voluptatibus ipsa, doloribus possimus ratione natus dicta voluptatem distinctio libero reprehenderit iure minima id architecto corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem nemo, voluptas voluptate modi dolorum maxime sunt ipsum fuga quas numquam deserunt dolorem labore voluptatum est at cumque consectetur! Laborum, numquam.",

    coursecontent: ["Lecture Materials", "Tutorials & Labs", "Quizzes", "Discussion Groups"],

    siteNav: ["Dashboard", "File Manager", "Email", "News"],
};

document.getElementById("coursedesc").innerHTML = classData.coursedesc;
document.getElementById("coursename").innerHTML = classData.coursename;
document.getElementById("profname").innerHTML = classData.profname;
document.getElementsByClassName("classtime")[0].innerHTML = classData.classtime[0];
document.getElementsByClassName("classtime")[1].innerHTML = classData.classtime[1];
document.getElementsByClassName("coursecontent")[0].innerHTML = classData.coursecontent[0];
document.getElementsByClassName("coursecontent")[1].innerHTML = classData.coursecontent[1];
document.getElementsByClassName("coursecontent")[2].innerHTML = classData.coursecontent[2];
document.getElementsByClassName("coursecontent")[3].innerHTML = classData.coursecontent[3];
document.getElementsByClassName("siteNav")[0].innerHTML = classData.siteNav[0];
document.getElementsByClassName("siteNav")[1].innerHTML = classData.siteNav[1];
document.getElementsByClassName("siteNav")[2].innerHTML = classData.siteNav[2];
document.getElementsByClassName("siteNav")[3].innerHTML = classData.siteNav[3];
document.getElementById("classProf").innerHTML = classData.classProf;
document.getElementById("admin").innerHTML = classData.admin;
document.getElementById("profimg").src = classData.profimg;
document.getElementById("topImg").src = classData.topImg;
document.getElementById("logo").src = classData.logo;
document.getElementById("professor").src = classData.professor;
