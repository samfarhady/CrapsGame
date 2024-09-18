function crapsGame(){
    function crapsGame() {
        let firstDice = Math.floor((Math.random()*6)+1);
        let dice1PNG = '/Dice/dice'+firstDice+'.png';
        let image1 = document.getElementById('img1');
        image1.src=dice1PNG;

        let secondDice = Math.floor((Math.random()*6)+1);
        let dice2PNG = '/Dice/dice'+secondDice+'.png';
        let image2 = document.getElementById('img2');
        image2.src=dice2PNG;
    }
    

}