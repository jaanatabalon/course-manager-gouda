import { students } from "./data/all-data.js";
'use strict';
(function () {

    function studentNames() {
        const studentList = document.querySelector('#studentList');
        for (let student of students) {
            studentList.insertAdjacentHTML("beforeend", `<li>${student["firstName"]}` + " " + `${student["lastName"]}</li>`);
        }
    }
    studentNames();


    
})()
// console.log(students);

// console.log("hi");

