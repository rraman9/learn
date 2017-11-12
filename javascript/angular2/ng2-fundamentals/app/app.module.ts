/**
 * Created by rraman on 6/12/2017.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {EventsAppComponent} from "./event-apps.component";
import {EventListComponent} from "./events/event-list.component";
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
@NgModule ({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {
}