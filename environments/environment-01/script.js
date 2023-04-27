"use strict";

window.addEventListener("load", initApp);

async function initApp() {
    const users = await getUsers();
    console.log(users);
    const admins = getAdmins(users);
    showUsers(admins);
}
// del 1
async function getUsers() {
    const response = await fetch("users.json");
    const data = await response.json();
    return data;
}

// del 2
function showUsers(users) {
    for (const user of users) {
        const html = /*html*/ `
            <li>${user.name} - active: ${user.active}</li>
        `;

        document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
    }
}

// // del 3 - alternativ
// function showUsers(users) {
//     for (const user of users) {
//         if (user.role === "admin") {
//             const html = /*html*/ `
//             <li>${user.name} - active: ${user.active}</li>
//         `;

//             document.querySelector("#userlist").insertAdjacentHTML("beforeend", html);
//         }
//     }
// }

// del 3
function getAdmins(users) {
    const results = users.filter(isAdmin);

    function isAdmin(user) {
        return user.role === "admin";
    }

    return results;
}
