const complaintForm = document.getElementById("complaintForm");

complaintForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const pollutionType =
        document.getElementById("pollutionType").value;

    const description =
        document.getElementById("description").value;

    const location =
        document.getElementById("location").value;

    const severity =
        document.getElementById("severity").value;


    if (
        pollutionType === "" ||
        description === "" ||
        location === "" ||
        severity === ""
    ) {

        alert("Please fill all required fields.");

        return;
    }


    // Generate Complaint ID

    const randomNumber =
        Math.floor(1000 + Math.random() * 9000);

    const complaintID =
        "PCR-2026-" + randomNumber;


    // Display success message

    document.getElementById("complaintID").textContent =
        complaintID;

    document.getElementById("successMessage").style.display =
        "block";


    // Save complaint ID in browser

    localStorage.setItem(
        "complaintID",
        complaintID
    );


    // Save complaint details

    localStorage.setItem(
        "pollutionType",
        pollutionType
    );

    localStorage.setItem(
        "severity",
        severity
    );


    // Scroll to success message

    document.getElementById("successMessage")
        .scrollIntoView({
            behavior: "smooth"
        });

});


function trackComplaint() {

    const enteredID =
        document.getElementById("trackingID").value;

    const savedID =
        localStorage.getItem("complaintID");


    if (enteredID === "") {

        document.getElementById("trackingResult").textContent =
            "Please enter a complaint ID.";

        return;
    }


    if (enteredID === savedID) {

        const pollutionType =
            localStorage.getItem("pollutionType");

        const severity =
            localStorage.getItem("severity");


        document.getElementById("trackingResult").innerHTML =

            "Complaint Found!<br><br>" +

            "Pollution Type: " + pollutionType +
            "<br>" +

            "Severity: " + severity +
            "<br>" +

            "Status: Under Review";

    }

    else {

        document.getElementById("trackingResult").textContent =
            "Complaint ID not found.";

    }

}