var from = document.getElementById("form");


function handleForm(event) {
    calculateBmi()
    event.preventDefault();
}


function resetBMI(){

    console.log("resetform")
    document.getElementById("formid").reset()
}
    from.addEventListener('submit', handleForm);
    from.addEventListerner('reset', resetBMI);

function calculateBmi(){
    
    let berat_badan = parseFloat(document.getElementById('berat-badan').value);
    let tinggi_badan = parseFloat(document.getElementById('tinggibadan').value);
    let jenis_kelamin = document.getElementById("gender").value;
    
    console.log(jenis_kelamin)

   
    if (isNaN(berat_badan) || isNaN(tinggi_badan) || jenis_kelamin==""){
        alert("Please enter valid input values,");
        return false;
    }
    
    
    console.log(80/Math.pow((tinggi_badan*10),2))
    let bmi= berat_badan/Math.pow((tinggi_badan*10),2)*1000000
   
    let hasil = bmi.toFixed(1);
    console.log(hasil)

    let hasil_bmi= document.querySelector(".hasil-bmi")
    hasil_bmi.innerHTML = ""
    hasil_bmi.append(hasil)

    
    let category;
    if (bmi <18.5){
        category = "Kekurangan Berat Badan";
    } else if ((bmi >=18.5) && (bmi <=24.9)) {
        category = "Normal (Ideal)";
    } else if ((bmi >=25.0) && (bmi <=29.9)) {
        category = "Kelebihan Berat Badan"
    } else if (bmi >=30.0){
        category = "Kegemukan (Obesitas)"
    }
    console.log(category)

    let keterangan_bmi= document.querySelector(".keterangan-bmi")
    keterangan_bmi.innerHTML = ""
    keterangan_bmi.append(category)

  
    result.innetHTML = bmi;
    return false
}