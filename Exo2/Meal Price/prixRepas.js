function prixRepas() {

    var bill = document.getElementById("bill").value;
    var tips = document.getElementById("tips").value;
    var people = document.getElementById("people").value;
    var prixRepas = 0;

    if (bill=="" || bill==0 || bill<0) {
    	document.getElementById("prixRepas").innerHTML="erreur Valeur"
  		return ;
    }

    if (tips=="" || tips==0 || tips<0) {
    	document.getElementById("prixRepas").innerHTML="erreur Valeur"
        return ;
    }

    if (people=="" || people==0 || people<0) {
        document.getElementById("prixRepas").innerHTML="erreur Valeur"
        return ;
    }
    
    tips = tips / 100;
    tips = bill * tips;

    prixRepas= (parseFloat(bill) + parseFloat(tips)) / people;
    document.getElementById("prixRepas").innerHTML = prixRepas;
}
