import { Component, OnInit, ViewChild } from '@angular/core';
import { CSVRecord } from '../CSVModel';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  public records: any[] = [];
  @ViewChild('csvReader') csvReader: any;

  constructor() {}

  ngOnInit() {}

  fileChangeListener(event: Event) {
    console.log(event);
    const text = [];
    const files = (event.srcElement as HTMLInputElement).files;
    console.log('file->', files);

    if (this.isValidCSVFile(files[0])) {
      const input = event.target as HTMLInputElement;
      console.log('input from event.target->', input);
      const reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        const csvData = reader.result;
        console.log('csvData->', csvData);
      };
    }
  }
  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }
}
