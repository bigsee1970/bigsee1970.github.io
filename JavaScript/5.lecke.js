

function ellenoriz() {
            document.getElementById("ev").value;
            let eredmeny = document.getElementById("eredmeny");

            if (isNaN(ev) || ev.trim() === "") {
                eredmeny.textContent = "Nem számot adtál meg!";
                eredmeny.style.color = "red";
            } else {
                eredmeny.textContent = "Számot adtál meg!";
                eredmeny.style.color = "green";
            }
        }

        