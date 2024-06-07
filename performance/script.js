let subjects = [];
let editIndex = -1;

function addSubject() {
    const subjectInput =
        document.getElementById('subject');
    const grade =
        document.getElementById('grade').value;
    const creditInput =
        document.getElementById('credit');
    const credit =
        parseInt(creditInput.value);

    // Validate credit input 
    const inputError =
        document.getElementById('inputError')
    const creditError =
        document.getElementById('creditError');
    if (!subjectInput.value || isNaN(credit)) {
        inputError.textContent =
            'Please fill out all fields.';
        return;
    } else if (credit < 1 || credit > 5) {
        creditError.textContent =
            'Credit must be between 1 and 5';
        return;
    } else {
        creditError.textContent = '';
    }
    if (editIndex !== -1) {
        subjects[editIndex] = { subject: subjectInput.value, grade, credit };
        editIndex = -1;
    } else {
        subjects.push({ subject: subjectInput.value, grade, credit });
    }

    displaySubjects();
    clearForm();
}

function displaySubjects() {
    const subjectList =
        document.getElementById('subjectList');
    subjectList.innerHTML = '';

    subjects.forEach((s, index) => {
        const row = document.createElement('tr');

        const subjectCell = document.createElement('td');
        subjectCell.textContent = s.subject;

        const gradeCell = document.createElement('td');
        gradeCell.textContent = s.grade;

        const creditCell = document.createElement('td');
        creditCell.textContent = s.credit;

        const actionCell = document.createElement('td');
        const editButton = document.createElement('button');
        editButton.className = 'edit';
        editButton.textContent = 'Edit';
        editButton.onclick = () => editSubject(index);

        const deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteSubject(index);

        actionCell.appendChild(editButton);
        actionCell.appendChild(deleteButton);

        row.appendChild(subjectCell);
        row.appendChild(gradeCell);
        row.appendChild(creditCell);
        row.appendChild(actionCell);

        subjectList.appendChild(row);
    });
}

function editSubject(index) {
    const subjectInput =
        document.getElementById('subject');
    const selectedSubject = subjects[index];

    subjectInput.value = selectedSubject.subject;
    document.getElementById('grade').value =
        selectedSubject.grade;
    document.getElementById('credit').value =
        selectedSubject.credit;

    editIndex = index;
}

function deleteSubject(index) {
    subjects.splice(index, 1);
    displaySubjects();
}


function calculateCGPA() {
    const totalCredits = subjects.reduce((sum, s) => sum + s.credit, 0);
    const weightedSum = subjects.reduce((sum, s) => sum + getGradePoint(s.grade) * s.credit, 0);

    const cgpa = totalCredits === 0 ? 0 : (weightedSum / totalCredits).toFixed(2);
    document.getElementById('cgpa').textContent = cgpa;

    // Display performance level
    displayPerformanceLevel(parseFloat(cgpa));
}


function getGradePoint(grade) {
    // Assign grade points as per your grading system 
    switch (grade) {
        case 'S':
            return 0.0;
        case 'A':
            return 5.0;
        case 'B':
            return 4.0;
        case 'C':
            return 3.0;
        case 'D':
            return 1.0;
        case 'F':
            return 0.0;
        default:
            return 0.0;
    }
}

function clearForm() {
    document.getElementById('subject').value = '';
    document.getElementById('grade').value = 'A';
    document.getElementById('credit').value = '';
}

function resetForm() {
    subjects = [];
    editIndex = -1;
    document.getElementById('subjectList').innerHTML = '';
    document.getElementById('cgpa').textContent = '0.00';
    clearForm();
}





function evaluatePerformanceLevel(cgpa) {
    if (cgpa < 1) {
        return "Poor: If your CGPA is below 1, you are likely to struggle academically and may need significant support and intervention to improve your grades. You should meet with your academic advisor, professors, and tutors to develop a plan for getting back on track.";
    } else if (cgpa >= 1 && cgpa < 2) {
        return "Fair: If your CGPA is between 1 and 2, you are likely to perform at a fair level. While you are not failing, your grades are still below average. You should analyze which courses you are struggling in and seek help from tutors or professors. You may also want to consider reducing your course load or dropping extracurricular activities to focus more on your studies.";
    } else if (cgpa >= 2 && cgpa < 3) {
        return "Good: If your CGPA is between 2 and 3, you are likely to perform at a good level. You are earning average to above-average grades in most of your courses. You should continue working hard and consider taking on more challenging courses or projects to further improve your skills and knowledge.";
    } else if (cgpa >= 3 && cgpa < 4) {
        return "Excellent: If your CGPA is between 3 and 4, you are likely to perform at an excellent level. You are earning high grades in most of your courses and are likely demonstrating strong academic abilities. You should maintain your hard work and consider pursuing research opportunities, internships, or other enrichment activities to further enhance your education.";
    } else {
        return "Outstanding: If your CGPA is between 4 and 5, you are likely to perform at an outstanding level. You are earning top grades in all of your courses and are likely demonstrating exceptional academic abilities. You should be commended for your hard work and dedication. You should continue to challenge yourself academically and consider applying for prestigious scholarships, fellowships, or graduate programs.";
    }
}

function displayPerformanceLevel(cgpa) {
    const performanceLevel = evaluatePerformanceLevel(cgpa);
    document.getElementById('performanceLevel').textContent = performanceLevel;
}


function confirmLogout() {
    if (confirm("Are you sure you want to logout?")) {
        // If the user confirms, redirect to the login page
        window.location.href = "../index.html"; // Replace with the actual URL of your login page
    }
}