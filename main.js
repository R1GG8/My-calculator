let a = "0"
let b = ""
let sign = ""

let buttons = document.querySelector("#buttons")
let display = document.querySelector(".input-div")

let plus = document.querySelector("#plus")
let minus = document.querySelector("#minus")
let division = document.querySelector("#division")
let mult = document.querySelector("#mult")

display.textContent = a

// Обработка нажатия на кнопки
buttons.addEventListener("click", (event) => {
    // Защита от мисклика:
    if (event.target.classList.contains("digit") ||
        event.target.classList.contains("signs") ||
        event.target.id == "cletter" || event.target.id == "equal") {

        if (!Number.isNaN(+event.target.textContent) || event.target.textContent == "=") {
            if ((!a || a && !sign) && (event.target.textContent != "=")) {
                if (display.textContent == "0" || display.textContent == "Ошибка") {
                    display.textContent = ""
                }
                display.textContent += event.target.textContent
                a = display.textContent
            }

            else if ((a && sign) && (event.target.textContent != "=")) {
                b == "" ? display.textContent = event.target.textContent : display.textContent += event.target.textContent
                b += event.target.textContent
            }
            else if (event.target.textContent == "=") {
                resetSigns()
                executeOperation(a, b, sign)
            }
        }
        else {
            sign = event.target.textContent
            if (sign == "C") {
                a = "0"
                b = ""
                sign = ""
                display.textContent = a
            }
        }
    }
})

// Выполнение арифметитеческой операции и вывод на экран
function executeOperation() {
    switch (sign) {
        case "+":
            display.textContent = +a + +b
            a = display.textContent
            b = ""
            sign = ""
            break;

        case "-":
            display.textContent = +a - +b
            a = display.textContent
            b = ""
            sign = ""
            break;
        case "*":
            display.textContent = +a * +b
            a = display.textContent
            b = ""
            sign = ""
            break;
        case "/":
            display.textContent = b == "0" ? "Ошибка" : +a / +b
            a = display.textContent
            b = ""
            sign = ""
            break;
        default:
            break;
    }
}

// Сброс подсветки с кнопок +, -, *, /
function resetSigns() {
    plus.style.backgroundColor = ""
    minus.style.backgroundColor = ""
    mult.style.backgroundColor = ""
    division.style.backgroundColor = ""
}

// Подсветка кнопок +, -, *, / при нажатии
plus.addEventListener("click", () => {
    resetSigns()
    plus.style.backgroundColor = "#1e9a1e"
})

minus.addEventListener("click", () => {
    resetSigns()
    minus.style.backgroundColor = "#1e9a1e"
})

mult.addEventListener("click", () => {
    resetSigns()
    mult.style.backgroundColor = "#1e9a1e"
})

division.addEventListener("click", () => {
    resetSigns()
    division.style.backgroundColor = "#1e9a1e"
})
