document.getElementById('smallFont').addEventListener('click', changeFontSmall);
document.getElementById('mediumFont').addEventListener('click', changeFontMedium);
document.getElementById('bigFont').addEventListener('click', changeFontBig);
document.getElementById('fontContrast').addEventListener('click', changeContrast);

function changeFontSmall(){
    document.querySelector('body').style= "font-size: 14px !important;";
}

function changeFontMedium(){
    document.querySelector('body').style= "font-size: 18px !important;";
}

function changeFontBig(){
    document.querySelector('body').style= "font-size: 28px !important;";
}

function changeContrast(){
    let a = document.getElementById('styleSheet').className;

    if (a === 'style'){
        document.getElementById('styleSheet').className = "style_contrast";
        document.getElementById('styleSheet').href = "css/style_contrast.css";
        document.getElementById('logoContact').src="img/black_miedzy.png";   
    }
    else{
        document.getElementById('styleSheet').className = "style";
        document.getElementById('styleSheet').href = "css/style.css";
        document.getElementById('logoContact').src="img/Logo_3.png";
    }
}