

const students = [
    {
        name: 'Lissy',
        city: 'Madrid',
        isNeolander: true,
    },
    {
        name: 'Ramon',
        city: 'Madrid',
        isNeolander: true,
    },
    {
        name: 'Elias',
        city: 'Hamburgo',
        isNeolander: false,
    },
    {
        name: 'Enrique',
        city: 'Santander',
        isNeolander: true,
    },
];

// students.forEach( (students) => {
//     let studentHTML = `
//     <div>
//     <h1>Nombre ${students.name}</h1>
//     <h2>Ciudad: ${students.city}</h2>
//     </div>`;

//     studentsBlock.innerHTML += studentHTML;
// });

const createStudents = student =>{
    return `
    <div>
    <h1>Nombre ${student.name}</h1>
    <h2>Ciudad: ${student.city}</h2>
    </div>`;
};

const isStudent = student => {
    return student.isNeolander ? student : '';
}

const addStudentToBlock =  studentHtml => {
    let studentBlock = document.querySelector('#students');
    studentBlock.innerHTML += studentHtml;
}

const runStudents = listStudents => {
    listStudents.forEach( students => {
      addStudentToBlock(createStudents(isStudent( students )));
    });
}

runStudents( students );