document.querySelector('.search').addEventListener('click', function() {
    document.getElementById('searchForm').classList.toggle('active');
  });

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
// import {
//     getFirestore,
//     collection,
//     getDocs,
//     where,
//     query

// } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";
// //getDoc ดึงตัวเดียว getDocs ดึงกลุ่มมาใช้
// const firebaseConfig = {

//xxxxxxxxxxxxxxxxxxxxxxxxxxx

// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// ///
// const schoolCol = collection(db, "schools");
// async function getSchools(db) {
//   const schoolSnapshot = await getDocs(schoolCol);
//   return schoolSnapshot;
// }
// const data = await getSchools(db);
// data.forEach((school) => {
//   showData(school);
//   console.log(school);
// });
// ///




// // //
// $(document).ready(function() {
//     // Add event listener to the form submission
//     $('#searchForm').submit(async function(event) {
//         event.preventDefault(); // Prevent the default form submission

//         // Get the input value
//         const inputValue = $('input[name="name"]').val();

//         // Display the answer in the console (you can modify this to do something else)
//         console.log("Answer:", inputValue);

//         // Clear the input field
//         $('input[name="name"]').val('');
        
        
//         // Perform the Firestore query
//         const q = query(schoolCol, where("name.thai", ">=", inputValue));
//         const queryTh = await getDocs(q);

//         if (queryTh.empty) {
//             alert("ไม่พบโรงเรียนที่ค้นหา")
//         } else {
//             $("#table tbody tr:not(:first-child)").remove();
//             queryTh.forEach((school) => {
//             showData(school);
//             console.log(school);
//         });
//         }  

//     });
// });



// function showData(school) {
//   const schoolList = school.data();  
//   function createTableCell(content) {
//     return $("<td></td>").html(content);
//   }
//   const row = $("<tr></tr>");

//   const nameCol = createTableCell(
//     `${schoolList.name.thai}<br>${schoolList.name.english}`
//   );
//   const schoolCodeCol = createTableCell(`${schoolList.schoolCode}`);
//   const address = schoolList.addresses[0];
//   const addressCol = createTableCell(
//     `${address.address}${address.number} แขวง ${address.subDistrict} เขต ${address.district} จังหวัด ${address.province} ${address.zipPost}`
//   );
//   const regionCol = createTableCell(`${address.region}`);
//   const serviceAreaCol = createTableCell(`${schoolList.educationServiceArea}`);

//   const websiteCol = createTableCell(`${schoolList.website}`);
//   const emailCol = createTableCell(`${schoolList.email}`);

//   if (schoolList.phone) {
//     var telCol = createTableCell(`${schoolList.phone}`);
//   } else {
//     var telCol = createTableCell(`ไม่ระบุ`);
//   }

//   const gradeCol = $("<td></td>");
//   for (let i = 1; i <= 12; i++) {
//     const gradeLevel = `grade${i}`;
//     const isActive = schoolList.gradeLevelIsActive[gradeLevel];
//     const cellColor = isActive ? "green" : "gray";
//     const gradeHTML = `<td style="background-color: ${cellColor}">X</td>`;
//     gradeCol.append(gradeHTML);
//   }

//   const schoolDirectorCol = createTableCell(`${schoolList.schoolDirector.name}`);

//   row.append(
//     nameCol,
//     schoolCodeCol,
//     addressCol,
//     regionCol,
//     serviceAreaCol,
//     websiteCol,
//     emailCol,
//     telCol,
//     schoolDirectorCol,
//     gradeCol
//   );
//   $("#table").append(row);
// }

