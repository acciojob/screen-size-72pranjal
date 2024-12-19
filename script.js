//your JS code here. If required.
let div = document.querySelector('#sizeInfo')
        let h1 = document.createElement('h1')
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        h1.innerText = `Width: ${screenWidth} and Height: ${screenHeight}`
        div.append(h1)
        window.addEventListener('resize', ()=> {
            const screenWidth = window.innerWidth;
            const screenHeight = window.innerHeight;
            h1.innerText = `Width: ${screenWidth} and Height: ${screenHeight}`
        })