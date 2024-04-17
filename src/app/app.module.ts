import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    // Declare any components, directives, or pipes if necessary//
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule, // Include HttpClientModule in imports array///
    FormsModule,//something wrong with routes sss
    
  ],
})
export class AppModule { }