import {Component} from "@angular/core";
/**
 * Created by rraman on 7/9/2017.
 */
@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 events</h1>
            <hr/>
            <event-thumbnail #thumbnail [event]="event1"></event-thumbnail>
        </div>
    `
})
export class EventListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '7/9/2017',
        time: '10:00 am',
        price: '999.99',
        imageUrl: '/app/assets/images/angular-connect-shield.png',
        location: {
            city: 'London',
            country: 'England'
        }
    }
}