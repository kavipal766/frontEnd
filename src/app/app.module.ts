import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
// import { HttpModule } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http'
import { ApiIntegrationService } from './api-integration.service';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';


// import { HttpModule } from '@angular/http';
// import { InfoService} from './info.service';
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    HistoryComponent
    // HttpClientModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiIntegrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
