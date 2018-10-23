import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses', // css selector #courses .courses
    template: `
    <button type="button" class="btn btn-default btn-lg" 
        [class]="isFavorite ? 'fa fa-star' : 'fa fa-star-o'" 
        (click)="onButtonClick()">

    </button>
    {{ course.title | uppercase | lowercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number:'1.1-2'}} <br />
    {{ course.price | currency:'BRL':'code':'3.2-2' }} <br />
    {{ course.releaseDate | date:'shortDate' }} <br />
    {{ text | summary:10 }}
    `
})

//adicionar model binding 

export class CoursesComponent {
    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    isFavorite = false;

    onButtonClick() {
        this.isFavorite = !this.isFavorite;
        if (this.isFavorite) 
            console.log("Is favorite");
        else console.log("Is not favorite");
    }

    text = `Of all monster families, the difference in power from least to most is at its most staggering
    in vampires. Lesser vampires are quick and agile, stronger than the average man, stealthy
    as a shadow, and vicious in their attacks. But they are animalistic–often less than fully
    sentient. At the opposite on the spectrum, the power of a nosferat is so vast as to be almost
    incomparable. Katakan are a good midway point in the vampire family between bestial
    lesser vampires and overwhelming, brilliant higher vampires.
    Katakans are intelligent creatures, often more so than the average
    human. They are highly magical, able to hide from all
    forms of magical scanning including witcher medallions and
    other divination, and can communicate with prey telepathically.
    They cannot take any form but their own. In combat
    they are stealthy, hiding behind magical invisibility while they
    drive their prey mad with telepathic fear tactics. Katakan are
    hard to kill, regenerating from most wounds very quickly and
    dancing around attacks with their superior speed. They are
    still more animalistic than their more powerful cousins and
    are prone to lick blood off the cobblestones after eviscerating
    their prey with their claws. Popularly-known protections
    do not work on a katakan. Most will probably just annoy it,
    save for the stake through the heart. When fighting a katakan,
    fire is your best weapon since they are very flammable. Black
    blood can also be quite useful if the katakan tries to bite and
    feed on you. Alternatively, remember that any drug or amount
    of alcohol in your blood will affect a vampire that bites you.`
}

// `
// <h2>{{title}}</h2>
// <img [src]="imageUrl" />
// <table>
//     <tr>
//         <td [attr.colspan]="colSpan"></td>
//     </tr>
// </table>
// <button class="btn btn-primary" color="green" [class.active]="isActive" [style.color]="Color" [style.backgroundColor]="isActive ? 'red' : 'blue'">Dummy</button>

// <div (click)="onDivClicK()">
//     <button (click)="onSave($event)">Save</button>
// </div>

// <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
// `

// imageUrl: "https://via.placeholder.com/350x150";,
// colSpan: 2,
// isActive: true,
// Color: "darkred",
// email: "me@example.com"

// onKeyUp() {
//     if($event.keyCode === 13) {
//         console.log("ENTER was pressed");
//     }
    
//     console.log($event.target.value);
//     console.log(this.email);
// }

// onSave($event) {
//     $event.stopPropagation();
//     this.isActive = !this.isActive;
//     console.log("button was clicked" + $event);
// }

// onDivClicK() {
//     console.log("Div was clicked");
// }
// courses;

// constructor(service: CoursesService) {
//     this.courses = service.getCourses();
// }