function stapone() {

  localStorage.setItem('key', 'daniel-dv');
  document.getElementById("stapone").style.display = "none";
document.getElementById("stapthree").style.display = "block";
document.getElementById("stapfour").style.display = "block";
document.getElementById("stapfive").style.display = "block";
document.getElementById("stapsix").style.display = "block";
document.getElementById("stapeight").style.display = "block";3

}


function validationlogin(){
  const b = localStorage.getItem('key');
  if(b == "daniel-dv"){
    document.getElementById("stapone").style.display = "none";
   document.getElementById("stapthree").style.display = "block";
  document.getElementById("stapfour").style.display = "block";
  document.getElementById("stapfive").style.display = "block";
document.getElementById("stapsix").style.display = "block";
document.getElementById("stapeight").style.display = "block";3
  }else{
    document.getElementById("stapone").style.display = "block";
    document.getElementById("stapthree").style.display = "none";
    document.getElementById("stapfour").style.display = "none";
    document.getElementById("stapfive").style.display = "none";
    document.getElementById("stapsix").style.display = "none";
    document.getElementById("stapeight").style.display = "none";3
  }
}

validationlogin()

function stapthree() {
  document.getElementById("stapone").style.display = "block";
  document.getElementById("stapone").style.display = "block";
  document.getElementById("canvas").style.display = "block";
  document.getElementById("stapthree").style.display = "none";
}


function satisfacao(receb) {
  switch (receb) {
    case "emoja":
      document.getElementById('resposta').innerHTML = "Tá péssima!";
      document.getElementById('emotion-effect-emojb').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emoja').style.background = 'yellow';
      document.getElementById('emotion-effect-emojc').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojd').style.background = '#bababa7d';
      document.getElementById('statusemoj').value = "Tá péssima!"
      document.getElementById('resposta').style.color = '#fb23f7c8';
      console.log("verdade A")
      break;
    case "emojb":
      document.getElementById('resposta').innerHTML = "Aceitável.";
      document.getElementById('resposta').innerHTML = "Nada legal.";
      document.getElementById('emotion-effect-emoja').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojc').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojd').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojb').style.background = 'yellow';
      document.getElementById('statusemoj').value = "Aceitável"
      document.getElementById('resposta').style.color = 'orange';
      break;
    case "emojc":
      document.getElementById('resposta').innerHTML = "Muito boa!";
      document.getElementById('emotion-effect-emoja').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojb').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojd').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojc').style.background = 'yellow';
      document.getElementById('statusemoj').value = "Muito boa!"
      document.getElementById('resposta').style.color = 'green';
      break;
    case "emojd":
      document.getElementById('emotion-effect-emoja').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojb').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojc').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojd').style.background = 'yellow';
      document.getElementById('resposta').innerHTML = "Realmente incrível!";
      document.getElementById('statusemoj').value = "Realmente incrível!"
      document.getElementById('resposta').style.color = 'green';
      break;
    case "emoje":
      document.getElementById('resposta').innerHTML = "-";
      document.getElementById('resposta').style.color = "white";
      document.getElementById('exampleFormControlTextarea1').value = '';
      document.getElementById('emotion-effect-emoja').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojb').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojc').style.background = '#bababa7d';
      document.getElementById('emotion-effect-emojd').style.background = '#bababa7d';
      break;
    default:
      console.log('falso')
      break
  }

}


function articleListmobile(receb) {
  switch (receb) {
    case "typescripa":
      const a = document.getElementById("TypeScriptDefault")
      if (a.checked) {
        document.getElementsByClassName("typescript")[0].style.display = "block";
        return validationArticle(a)
      } else {
        document.getElementsByClassName("typescript")[0].style.display = "none";
        return validationArticle(a)
      }
      break;

    case "javascripta":
      const b = document.getElementById("JavascriptDefault")
      if (b.checked) {
        document.getElementsByClassName("javascript")[0].style.display = "block";
        return validationArticle(b)
      } else {
        document.getElementsByClassName("javascript")[0].style.display = "none";
        return validationArticle(b)
      }
      break;

    case "angulara":
      const c = document.getElementById("AngularDefault")
      if (c.checked) {
        document.getElementsByClassName("angular")[0].style.display = "block";
        return validationArticle(c)
      } else {
        document.getElementsByClassName("angular")[0].style.display = "none";
        return validationArticle(c)
      }
      break;


    case "pythona":
      const d = document.getElementById("PythonDefault")
      if (d.checked) {
        document.getElementsByClassName("python")[0].style.display = "block";
        return validationArticle(d)
      } else {
        document.getElementsByClassName("python")[0].style.display = "none";
        return validationArticle(d)
      }
      break;

    case "react":
      const e = document.getElementById("ReactDefault")
      if (e.checked) {
        document.getElementsByClassName("react")[0].style.display = "block";
        return validationArticle(e)
      } else {
        document.getElementsByClassName("react")[0].style.display = "none";
        return validationArticle(e)
      }
      break;

    case "cm":
      const f = document.getElementById("CDefault")
      if (f.checked) {
        document.getElementsByClassName("CDefault")[0].style.display = "block";
        return validationArticle(f)
      } else {
        document.getElementsByClassName("CDefault")[0].style.display = "none";
        return validationArticle(f)
      }
      break;

  }

}



function validationArticle(pop) {

  const am = document.getElementById("TypeScriptDefault");
  const bm = document.getElementById("JavascriptDefault");
  const cm = document.getElementById("AngularDefault");
  const dm = document.getElementById("PythonDefault");
  const em = document.getElementById("ReactDefault");
  const fm = document.getElementById("CDefault");






  if ((am.checked == true && pop.value) || (bm.checked == true && pop.value) || (cm.checked == true && pop.value) || (dm.checked == true && pop.value) || (em.checked == true && pop.value) || (fm.checked == true && pop.value)) {
    return document.getElementById("geral").style.display = "none";
  } else {
    return document.getElementById("geral").style.display = "block";
  }
}
