const album1Avg = document.getElementById('album-1-avg');
const album1Values = [...document.querySelectorAll('.album-row-s2')];

album1Avg.textContent = getMean(album1Values);

//functions
function getMean(array) {
    let numbersArray = [];
    array.filter(el => !isNaN(parseInt(el.innerHTML))).forEach((el) => {
        numbersArray.push(JSON.parse(el.innerHTML));
    });
    return Math.round((numbersArray.reduce((acc, el) => acc + el) / numbersArray.length) * 100) / 100;
}