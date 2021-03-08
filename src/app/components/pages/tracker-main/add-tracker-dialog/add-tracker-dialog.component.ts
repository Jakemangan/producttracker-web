import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-tracker-dialog',
  templateUrl: './add-tracker-dialog.component.html',
  styleUrls: ['./add-tracker-dialog.component.scss']
})
export class AddTrackerDialogComponent implements OnInit {

  public inputUrl!: string;

  constructor(
    public dialogRef: MatDialogRef<AddTrackerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {
  }

  submit(){
    this.dialogRef.close(this.inputUrl);
  }

  close(){
    this.dialogRef.close(null);
  }



}
