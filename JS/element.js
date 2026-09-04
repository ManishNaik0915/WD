let body=document.body
let div=document.createElement("div")

div.style.height="400px"
div.style.width="400px"
div.style.backgroundColor="Orange"

div.innerHTML += `<h1> Welcome</h1>`
body.appendChild(div)



// let table=document.createElement("table")
// table.style.height="500px"
// table.style.width="500px"
// table.style.backgroundColor="Grey"

// table.innerHTML+=`<table rules="all" border="1" bgcolor="grey">
//         <tr>
//             <th>Id</th>
//             <th>Name</th>
//             <th>Salary</th>
//             <th rowspan="6" width="50px">P<br>L<br>A<br>C<br>E<br>D</th>
//             <th>Companies</th>
//         </tr>
//         <tr>
//             <td>01</td>
//             <td>Abc</td>
//             <td>30k</td>
//             <td><a href="https://www.tcs.com/" target="_blank">
//                     <img src="./TCS.jpg" width="80" height="50">
//             </a></td>
//         </tr>
//         <tr>
//             <td>02</td>
//             <td>Xyz</td>
//             <td>40k</td>
//             <td><a href="https://www.infosys.com/" target="_blank">
//                 <img src="./Infosys.png" width="80" height="50">
//             </a></td>
//         </tr>
//         <tr>
//             <td>03</td>
//             <td>Pqr</td>
//             <td>50k</td>
//             <td><a href="https://www.wipro.com/" target="_blank">
//                 <img src="./Wipro.png" width="80" height="50">
//             </a></td>
//         </tr>
//         <tr>
//             <td>04</td>
//             <td>Mno</td>
//             <td>50k</td>
//             <td><a href="https://www.capgemini.com/" target="_blank">
//                 <img src="./Capgemini.png" width="80" height="50">
//             </a></td>
//         </tr>
//         <tr>
//             <td>05</td>
//             <td>Efg</td>
//             <td>60k</td>
//             <td><a href="https://www.larsentoubro.com/" target="_blank">
//                 <img src="./L&T.png" width="80" height="50">
//             </a></td>
//         </tr>
//     </table>`
//     body.appendChild(table)