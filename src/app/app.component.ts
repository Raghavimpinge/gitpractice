import { Component } from '@angular/core';
import Tesseract from 'tesseract.js';
// import { PDFDocumentProxy } from 'pdf-lib';
// import { getDocument, PDFDocumentProxy } from 'pdfjs-dist';

// pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularapp';

  extractedText: string = '';

 
  // async extractTextFromImage(image: File) {
  //   const worker = Tesseract.createWorker();
  //   await worker.load();
  //   await worker.loadLanguage('eng');
  //   await worker.initialize('eng');
  //   const { data: { text } } = await worker.recognize(image);
  //   this.extractedText = text;
  //   console.log(text);
  //   await worker.terminate();
  // }

  onFileChange(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      // this.extractTextFromImage(file);
    }
  }
 

}
