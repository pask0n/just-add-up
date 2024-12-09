const textarea = document.querySelector(".textarea"),
submitBtn = document.querySelector(".submit-btn"),
output = document.querySelector(".output")

submitBtn.addEventListener("click", () => {
    
    let splittedByLine = textarea.value.split(/\r?\n|\r|\n/g);

    let finalArr = [];

    splittedByLine.forEach(item => {
        finalArr.push(item.split(" "))
    });

    finalArr = finalArr.flat().map(item => parseInt(item))
    
    output.textContent = finalArr.reduce((total, item) => total + item, 0)
})
