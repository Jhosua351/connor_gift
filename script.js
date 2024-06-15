document.querySelector('.thisNutsButton').addEventListener('click', function(){
    document.querySelector('.theseNutsText').style.display = 'block';
    document.querySelector('.thisNutsButton').style.display = 'none';
    document.querySelector('.realButton').style.display = 'block';
});

document.querySelector('.actualButton').addEventListener('click', function(){
    document.querySelector('img').style.display = 'block';
    document.querySelector('.theseNutsText').style.display = 'none';
    document.querySelector('.realButton').style.display = 'none';
});