import { students } from "./data/all-data.js";
// 'use strict'; -- No need for 'use strict' when importing JS as a module. It's implicitly applied.
(function () {

    function studentNames() {
        const studentList = document.querySelector('#studentList');
        for (let student of students) {
            studentList.insertAdjacentHTML("beforeend", `<li>${student["firstName"]}` + " " + `${student["lastName"]}</li>`);
        }
    }
    studentNames();

    function printStudentDetails(details, index) { 
        return details[index];
    }

    function addStudentEventListeners() {
        const listItems = document.querySelectorAll('#studentList>li');

        for (let i = 0; i < listItems.length; i++) {
            listItems[i].addEventListener('click', () =>
                console.log(printStudentDetails(students, i))
            );
        }
    }
    addStudentEventListeners()
})()

