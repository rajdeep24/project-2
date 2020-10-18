// $.get("/api/customer-create-event", function (Event) {
//     console.log(Event);
//     console.log(Event[0].address)


// })
$(document).ready(function() {
    let getAllEvents = () =>{
        $.get("/api/customer-profile", function (data) {
            console.log(data);
            let oneOfTheseNumbers = data;
            buildEvents(oneOfTheseNumbers);
        });
    }

    let buildEvents = (parameter) => {
        for (var i = 0; i < parameter.length; i++) {  

            let eventDescription = parameter[i].description

            
            $("#apiCall").append(`
            <tr>
            <td>${parameter[i].eventName}</td>
            <td>${parameter[i].eventDate.substring(0,10)}</td>
            <td>${parameter[i].startTime}</td>
            <td>${parameter[i].endTime}</td>
            <td>${parameter[i].eventType}</td>
            <td>${parameter[i].guestCount}</td>
            <td>${parameter[i].city},${parameter[i].state},${parameter[i].zipCode}</td>
            </tr>`)

            $(".holy-grail-left").append(`
            <h4> Event Description:</h4><p>${eventDescription}</p>`)
        
        }
    } 
    getAllEvents();

    let getCustomerProfile = () => {
        $.get("/api/customer-signup", function (data) {
            console.log(data);
            let customerData = data;
            updateProfile(customerData);
        });
    }

    let updateProfile = (parameter) => {
        for (var i = 0; i < parameter.length; i++) {  
            $("#profile-section").append(`
            <h4>${parameter[i].first_Name} ${parameter[i].last_Name}</h4>
            <p>Email: ${parameter[i].email}</p>
            `)
        }
    } 
    getCustomerProfile();




})