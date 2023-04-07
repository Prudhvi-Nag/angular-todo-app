// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-idcard',
//   templateUrl: './idcard.component.html',
//   styleUrls: ['./idcard.component.scss']
// })
// export class IdcardComponent {

// }

import { Component } from '@angular/core';
import { VisitCard } from './cardInterface';
import {  ElementRef, ViewChild } from '@angular/core';
import html2canvas from 'html2canvas';
// import {   ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';


@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.scss'] 
})
export class IdcardComponent {
  // @ViewChild('htmlData') htmlData!: ElementRef;
  
  constructor(private cardElement: ElementRef) {}
  
  user:VisitCard = {
    id:123,
    name:"Prudhvi",
    email:"prudhvi@gmail.com",
    phonenumber:7732093495,
    profession:"UI/UX Designer",
    address:"123 Street Road",
    city:"Hyderadad",
    company:"Motivity labs",
    logo:"",
    companymail:"www.motivitylabs.com"
  }

  // public openPDF(): void {
  //   let DATA: any = document.getElementById('htmlData');
  //   html2canvas(DATA).then((canvas) => {
  //     let fileWidth = 208;
  //     let fileHeight = (canvas.height * fileWidth) / canvas.width;
  //     const FILEURI = canvas.toDataURL('image/png');
  //     let PDF = new jsPDF('p', 'mm', 'a4');
  //     let position = 0;
  //     PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
  //     PDF.save('angular-demo.pdf');
  //   });
  // }

  // downloadAsImage(): void {
  //   const cardElement = this.cardElement.nativeElement;

  //   html2canvas(cardElement).then((canvas) => {
  //     // Convert canvas to blob and create a download link
  //     canvas.toBlob((blob) => {
        
  //       if(blob){
  //         const url = URL.createObjectURL(blob);
  //       }

  //       // Create a link and click it to trigger download
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = 'card.png';
  //       link.click();
  //     });
  //   });
  // }
  

  // captureCardAsImage() {
  //   const cardElement = document.getElementById('card');
  //   html2canvas(cardElement).then((canvas) => {
  //     const dataURL = canvas.toDataURL('image/png');
  //     const anchor = document.createElement('a');
  //     anchor.download = 'card.png';
  //     anchor.href = dataURL;
  //     anchor.click();
  //   });
  // }

  captureCardAsImage() {
    const cardElement = document.getElementById('card');
    if (cardElement) {
      html2canvas(cardElement).then((canvas) => {
        const dataURL = canvas.toDataURL('image/png');
        const anchor = document.createElement('a');
        anchor.download = 'card.png';
        anchor.href = dataURL;
        anchor.click();
      });
    }
  }
  

}

  



