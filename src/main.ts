import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import pdfjsLib from 'pdfjs-dist/build/pdf';

// // Set worker source
// pdfjsLib.GlobalWorkerOptions.workerSrc = 'assets/pdf.worker.min.js'; // Adjust the path as per your project structure

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err:any) => console.error(err));
