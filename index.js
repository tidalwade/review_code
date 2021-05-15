$('#modal-form').on("submit", handleSubmit)
$('#contact-btn').on("click", handleContactClick)

{/* <form id="modal-form">
        <div class="mb-3">
        <label for="firstName" class="form-label">First Name</label>
        <input type="text" class="form-control" id="firstName" aria-describedby="firstName">
        </div>
        <div class="mb-3">
        <label for="lastName" class="form-label">Last Name</label>
        <input type="text" class="form-control" id="lastName">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form> */}
function handleContactClick(){
    $("#modalLabel").html(`<h3>Contact Us</h3>`)
    let contactHTML = `
        <div class="mb-3">
            <label for="firstName" class="form-label">First Name</label>
            <input type="text" class="form-control" id="firstName" aria-describedby="firstName">
        </div>
        <div class="mb-3">
            <label for="lastName" class="form-label">Last Name</label>
            <input type="text" class="form-control" id="lastName">
        </div>
        <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea type="text" class="form-control" id="email"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    `
    $(".modal-body").html(contactHTML)
}
function throwConfetti(){
    for(let i=0; i < 100; i++){
        let width = 5 + Math.floor(Math.random() * 10)
        let height = 10 + Math.floor(Math.random() * 20)
        let red = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)
        let c = new Confetti(width, height, red, green, blue)
        c.show()
    }
}
function handleSubmit(e){
    e.preventDefault()
    let name = e.target.children[0].children[1].value
    $("#modalLabel").html(`<h3>Success!!</h3>`)
    $(".modal-body").html(`<h4>Thanks ${name}! You'll be hearing from one of our agents soon.</h4><button type="button" class="btn btn-secondary mt-5" data-bs-dismiss="modal">Close</button>`)
    throwConfetti()
}  
class Confetti{
    constructor(w,h,r,g,b){
        this.w = w
        this.h = h
        this.color = `rgb(${r},${g},${b})`
    }
    show(){
        console.log("showing confetti")
        let div = $('<div>')
        let styles = {
            position: "absolute",
            left: `${Math.floor(Math.random()*100)}%`,
            top: `${Math.floor(Math.random()*5) - 10}%`,
            width: this.w,
            height: this.h,
            transform: `rotate(${Math.floor(Math.random()*360)}deg)`,
            backgroundColor: this.color,
            animationName: "fall",
            animationDuration: `${Math.floor(Math.random()*4) + 3}s`,
            animationDelay: `${Math.floor(Math.random()*2)}s`,
            animationTimingFunction: "ease-in"
        }
        div.css(styles)
        $('body').append(div)
    }
}