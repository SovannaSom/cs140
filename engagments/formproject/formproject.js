  
            document.getElementById("myForm").addEventListener("submit", function(event) {
            event.preventDefault();
            // alert("Form Submitted");
            const fullname = document.getElementById("fullname").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const birthdate = document.getElementById("birthday").value;
            const age = document.getElementById("age").value;

            if (!fullname || !email) {
                alert("You need a name and email.")
                return;
            }

            if (!age || age < 18){
                alert("You need to be 18 or older.")
                return;
            }
            if (!password) {
                alert("Please enter your password.");
                return;
            }
            if (!birthdate) {
                alert("Please enter your birthday.");
                return;
            }
            
            

            const data = {
                name: fullname,
                email: email,
                password: password,
                birthdate: birthdate,
                age: age
// this called JSON
            };


            const xhr = new XMLHttpRequest();
            xhr.open("GET", "submit.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange=function() {
                if (xhr.readyState===4 && xhr.status===200){
                    // alert("Form submitted successfully.")
                    
                    const message = document.getElementById("message");
                    const response = JSON.parse(xhr.responseText);
                    
                    message.textContent = response.message;
                    // or
                    // const form = document.getElementById("myForm")
                    
                    // form.textContent="Thank You for Submitting!"
                    // form.style.color = "green";
                    document.getElementById("myForm").reset();
                    form.reset();

                }
                else if (xhr.readyState===4){
                    alert("Error submitting form.")
                } 
            };
            xhr.send(JSON.stringify(data))
            // alert(`Sucess: ${fullname}`);
            console.log(data);
            });
