
class school{
    constructor(Name, Email, Contact){

        this.Name = Name;
        this.Email = Email;
        this.Contact = Contact;
        
    }

    studentinfo(){
        console.log("Student Name: " + this.Name + "\nEmail: " + this.Email + "\nContact: " + this.Contact);
        document.getElementById("student").innerHTML = (`Student Name: ${this.Name} <br>     Email: ${this.Email} <br> Contact: ${this.Contact} <br>`);
    }

    facultyinfo(){
        console.log("Faculty Name: " + this.Name + "\nEmail: " + this.Email + "\nContact: " + this.Contact);
        document.getElementById("faculty").innerHTML = (`Faculty Name: ${this.Name} <br> Email: ${this.Email} <br> Contact: ${this.Contact} <br>`);
    }

    peoninfo(){
        console.log("Peon Name: " + this.Name + "\nEmail: " + this.Email + "\nContact: " + this.Contact);
        document.getElementById("peon").innerHTML = (`Peon Name: ${this.Name} <br> Email: ${this.Email} <br> Contact: ${this.Contact} <br>`);
    }
}

let s1 = new school("Dhara", "dhara@gmail.com", 1234567890);
s1.studentinfo();

let f1 = new school("Keyur", "keyur@gmail.com", 1234567890);
f1.facultyinfo();

let p1 = new school("Sachin", "sachin@gmail.com", 1234567890);
p1.peoninfo();