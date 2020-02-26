// import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
// import { BlobUploadsViewStateService } from './../../services/BlobUploadsViewStateService';
// @Component({
//   selector: 'app-file-upload',
//   templateUrl: './file-upload.component.html',
//   styleUrls: ['./file-upload.component.css']
// })
// export class FileUploadComponent {
//   @ViewChild('fileInput', { static: false }) fileInput: ElementRef<
//     HTMLInputElement
//   >;
//   constructor(private blobState: BlobUploadsViewStateService) {}

//   onSelected(files: FileList): void {
//     this.fileInput.nativeElement.value === '';
//     this.blobState.uploadItems(files);
//   }

//   showFileDialog(): void {
//     this.fileInput.nativeElement.click();
//   }
// }
