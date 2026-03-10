let completed = 0;
let total = 4;

function completeTask(button)
{
    let row = button.parentNode.parentNode;
    let status = row.querySelector(".status");

    if(status.innerHTML === "Pending")
    {
        status.innerHTML = "Completed";
        completed++;

        document.getElementById("progress").innerHTML =
        completed + " out of " + total + " activities completed";

        button.disabled = true;
    }
}
