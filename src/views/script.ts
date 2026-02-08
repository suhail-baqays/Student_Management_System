addEventListener("DOMContentLoaded",()=>{
    let Add_Modal:HTMLDivElement = document.querySelector("#Add_Student_Modal")!
    let Open_Add_Modal_btn:HTMLButtonElement = document.querySelector("#Open_Add_Modal_btn")!
    let close_btn : HTMLSpanElement = document.querySelector("#close_btn")!
    let nameInput : HTMLInputElement=Add_Modal.querySelector('input[name="Name"]')!
    let ageInput : HTMLInputElement=Add_Modal.querySelector('input[name="Age"]')!
    let Submit_Added_std_btn : HTMLInputElement = Add_Modal.querySelector("#Submit_Added_std")!

    if(Open_Add_Modal_btn){
        Open_Add_Modal_btn.addEventListener("click" , ()=>{
            Add_Modal.style.display="flex"
        })
    }

    close_btn.addEventListener("click" , () =>{
        Add_Modal.style.display = "none"
    })

    window.addEventListener("click", (e) =>{
        if(e.target==Add_Modal) {
            Add_Modal.style.display="none"
        }
    })
    
    function Validate_Inputs():void{
        let nameValue:string = nameInput.value.trim()
        let ageValue:number = ageInput.valueAsNumber

        if (nameValue !== "" && !isNaN(ageValue) && ageValue > 0) {
            Submit_Added_std_btn.disabled = false; 
        } else {
            Submit_Added_std_btn.disabled = true;  
        }
    }
    
    nameInput.addEventListener('input', Validate_Inputs);
    ageInput.addEventListener('input', Validate_Inputs);
    Submit_Added_std_btn.disabled=true

    
   
    const Shared_Update_Modal:HTMLDivElement = document.querySelector("#Shared_Update_Modal")!
    const close_update_btn :HTMLSpanElement = document.querySelector("#close_update_btn")!
    const Submit_Updated_std:HTMLButtonElement = document.querySelector("#Submit_Updated_std")!
    const form :HTMLFormElement = document.querySelector("#Shared_Update_Form")!

    // Inputs inside the modal
    const Input_Name:HTMLInputElement = document.querySelector("#update_name_input")!
    const Input_Age:HTMLInputElement = document.querySelector("#update_age_input")!

    const updateButtons :NodeListOf<HTMLButtonElement> = document.querySelectorAll(".open-update-modal-btn")!
    updateButtons.forEach(btn =>{
        btn.addEventListener("click" , ()=>{
            
            const id = btn.getAttribute("data-id");
            const name:string = btn.getAttribute("data-name")!
            const age:string = btn.getAttribute("data-age")!

            Input_Name.value = name;
            Input_Age.value = age;

            form.action = `/update/${id}?_method=PUT`;

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
        })
    })


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