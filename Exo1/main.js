function checkPrimeNumber() {
	var i = 2;
	var nbr = document.getElementById("nbrPremier").value;
  
  console.log(nbr)
  
  if (nbr=="" || nbr==0 || nbr==1 || nbr==-1) {
    	document.getElementById("check").innerHTML="erreur Valeur"
  		return
  }
  
  while (i < (nbr/2) || -i > (nbr/2)) {
      
    if (nbr%i === 0) {
      document.getElementById("check").innerHTML="nonPrime"
    	return false
     
    }
    i++
	}
  document.getElementById("check").innerHTML="prime"
  true
}

console.log("kk")

return true