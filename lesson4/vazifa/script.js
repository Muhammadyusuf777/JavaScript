let Junmoq = prompt(
    ` U mashina buxankaga oxshaydi, odam tashidi va hajmi jixatidan uzunroq.
    U gm zavodga tegishli. bu qaysi avtomibil.`
)

switch (Junmoq) {
    case "Nexia":
        console.log("siz xato javob kritdingiz.");
        break
    case "Cobalt":
        console.log("siz xato javob kritdingiz.")        
        break
    case "Damas":
        console.log("Siz to'g'ri javob kritdingiz, javob Damas edi.")    
        break
    default:
        console.log("Siz mavjud bolmagan qiymat kritdingiz")    
}

// ============================================

let savol = prompt("U mashina dunyo buyicha eng qimmat moshina tez turadi tagi juda past.Bu qaysi moshna")

switch(savol){
    case "Nexia":
        console.log("Siz xato javob kritdingiz.")
        break
    case "Cobalt":
        console.log("Siz xato javob kritdingiz.")
        break
    case "Bugatty":
        console.log("Siz tog'ri javob kritdingiz, javob Bugatty edi.")
        break
    case "Damas":
        console.log("siz xato javob kritdingiz.")
        break
    default:
        console.log("Siz mavjud bolmagan qiymat krtdingiz")
}

// ===================================

let Topishmoq = prompt("Haftada birinchi kunni nominima bosh harifi D")

switch(Topishmoq){
    case "Seshanba":
        console.log("Siz xato javob kritdingiz.")
        break
    case "Chorshanba":
        console.log("Siz xato javob kritdingiz.")
        break
    case "Dushanba":
        console.log("Siz tog'ri javob kritdingiz, javob Bugatty edi.")
        break
    case "Damas":
        console.log("Payshanba.")
        break
    default:
        console.log("Siz mavjud bolmagan qiymat krtdingiz")
}

// =========================================

let namangan = prompt("55-Maktab qayerda namanganda")

switch(namangan){
    case "chorsu":
        console.log("Siz xato javob kritdingiz.")
        break
    case "Sardoba":
        console.log("Siz xato javob kritdingiz.")
        break
    case "1-Axsikent":
        console.log("Siz tog'ri javob kritdingiz, javob Bugatty edi.")
        break
    case "Chust":
        console.log("siz xato javob kritdingiz.")
        break
    default:
        console.log("Siz mavjud bolmagan qiymat krtdingiz")
}

// ============================================

let paygambar = prompt("acer core nechchigacha boladi")

switch(paygambar){
    case "core 3":
        console.log("Siz xato javob kritdingiz.")
        break
    case "core 5":
        console.log("Siz xato javob kritdingiz.")
        break
    case "core 9":
        console.log("Siz tog'ri javob kritdingiz, javob Bugatty edi.")
        break
    case "core 7":
        console.log("siz xato javob kritdingiz.")
        break
    default:
        console.log("Siz mavjud bolmagan qiymat krtdingiz")
}


// =============================================================================

let raqam1 = 0
raqam1 > 0
    ? console.log("bu son musbat son = ", raqam1)
    : console.log("bu son manfiy son = ", raqam1)

let raqam2 = 0
raqam2 === 0 
    ? console.log("bu son musbat ham manfiyam emas")
    : raqam2 > 0
    ? console.log("bu son musbat son = ", raqam2)
    : console.log("bu son Manfiy son = ", raqam2)