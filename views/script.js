addEventListener("DOMContentLoaded",()=>{
    const Open_Add_Modal_btn = document.getElementById("Open_Add_Modal_btn");
    const Add_Modal = document.getElementById("Add_Student_Modal");
    
    if(Open_Add_Modal_btn) {
        Open_Add_Modal_btn.addEventListener("click", () => {
            Add_Modal.style.display = "flex"; 
        });
    }

    
    window.addEventListener("click", (e) => {
        if (e.target == Add_Modal) {
            Add_Modal.style.display = "none";
        }
    });

    const studentForm = document.getElementById('Student_Form');
    let nameInput = studentForm.querySelector('input[name="Name"]');
    let ageInput = studentForm.querySelector('input[name="Age"]');
    const Submit_Added_std_btn = document.getElementById('Submit_Added_std');

    Submit_Added_std_btn.disabled = true;

    
    function validateInputs() {
        const nameValue = nameInput.value; 
        const ageValue = ageInput.value;

        
        if (nameValue !== "" && ageValue !== "") {
            Submit_Added_std_btn.disabled = false; 
        } else {
            Submit_Added_std_btn.disabled = true;  
        }
    }

    // 4. نزرع "مراقبين" على الخانات
    nameInput.addEventListener('input', validateInputs);
    ageInput.addEventListener('input', validateInputs);

    const close_btn = document.getElementById("close_btn")
    close_btn.addEventListener("click", ()=>{
        Add_Modal.style.display="none"
    })

    const Shared_Update_Modal = document.getElementById("Shared_Update_Modal");
    const close_update_btn = document.getElementById("close_update_btn");
    const Submit_Updated_std= document.getElementById("Submit_Updated_std")
    const form = document.getElementById("Shared_Update_Form");
    
    // Inputs inside the modal
    const Input_Name = document.getElementById("update_name_input");
    const Input_Age = document.getElementById("update_age_input");

    // 2. Select ALL update buttons from the list
    const updateButtons = document.querySelectorAll(".open-update-modal-btn");

    // 3. Loop through buttons to add click event
    updateButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            
            // A. Get data from the clicked button
            const id = btn.getAttribute("data-id");
            const name = btn.getAttribute("data-name");
            const age = btn.getAttribute("data-age");

            // B. Fill the modal inputs with that data
            Input_Name.value = name;
            Input_Age.value = age;

            // C. Update the form action URL
            // This ensures sending the form updates the correct student ID
            // Example result: /update/64f8a2...
            form.action = `/update/${id}?_method=PUT`; 

            // D. Show the modal
            Shared_Update_Modal.style.display = "flex";
            Submit_Updated_std.disabled=true;

            function validateInputs() {
                const Current_Name = Input_Name.value
                const Current_Age = Input_Age.value
            
                if ((Current_Name !== "" && Current_Age !== "") && (Current_Name !== name || Current_Age !== age)) {
                    Submit_Updated_std.disabled = false; 
                } else {
                    Submit_Updated_std.disabled = true;  
                }
            }
        Input_Name.addEventListener('input', validateInputs);
        Input_Age.addEventListener('input', validateInputs);
        });
    });

    // 4. Close Modal Logic
    if(close_update_btn){
        close_update_btn.addEventListener("click", () => {
            Shared_Update_Modal.style.display = "none";
        });
    }

    // Close if clicking outside the white box
    window.addEventListener("click", (e) => {
        if (e.target === Shared_Update_Modal) {
            Shared_Update_Modal.style.display = "none";
        }
    });
    
})