import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';
import {TrackerService} from '../../../../../services/tracker.service';
import {faTrash} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tracker-delete-dialog',
  templateUrl: './tracker-delete-dialog.component.html',
  styleUrls: ['./tracker-delete-dialog.component.scss']
})
export class TrackerDeleteDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<TrackerDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      title: string
    }) {}

  ngOnInit(): void {
  }

  submit(){
    this.dialogRef.close(true);
  }

  close(){
    this.dialogRef.close(false);
  }

}
