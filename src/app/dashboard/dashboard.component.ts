import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarBoxComponent } from '../components/components/calendar-box/calendar-box.component';
import { ImageMusicBoxComponent } from '../components/components/image-music-box/image-music-box.component';
import { ProgressBoxComponent } from '../components/components/progress-box/progress-box.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule , CalendarBoxComponent ,ImageMusicBoxComponent , ProgressBoxComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  imageLink: string = "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  userName: string = "Sajal Shrivastav";
  showPopup: boolean = false;
  newImageUrl: string = '';
  defaultImage: string = "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  openImagePopup() {
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
    this.newImageUrl = '';
  }

  updateImage() {
    if (this.newImageUrl) {
      // Test if the image loads successfully
      const img = new Image();
      img.onload = () => {
        this.imageLink = this.newImageUrl;
        this.closePopup();
      };
      img.onerror = () => {
        // If image fails to load, keep the current image
        alert('Failed to load image. Keeping current image.');
        this.closePopup();
      };
      img.src = this.newImageUrl;
    }
  }
}
