import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup} from '@angular/forms';
import {debounceTime, switchMap} from 'rxjs/operators';
import {TrackerService} from '../../../../services/tracker.service';
import { faCheckCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-add-tracker-dialog',
  templateUrl: './add-tracker-dialog.component.html',
  styleUrls: ['./add-tracker-dialog.component.scss']
})
export class AddTrackerDialogComponent implements OnInit {

  public inputUrl!: string;
  public canContinue = false;
  public isWorking: boolean = undefined;
  public form: FormGroup;

  public faCheckCircle = faCheckCircle;
  public faQuestionCircle = faQuestionCircle;

  constructor(
    public dialogRef: MatDialogRef<AddTrackerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string,
    private _fb: FormBuilder,
    private _trackerService: TrackerService) {}

  ngOnInit(): void {
    this.form = this._fb.group({
      url: this._fb.control("")
    })
    
    this.form.valueChanges.pipe(debounceTime(500), switchMap(valueChanges => {
      return this._trackerService.checkHostnameIsConfirmedWorking(valueChanges.url);
    })).subscribe(isWorking => {
      this.isWorking = isWorking;
      this.canContinue = true;
    })
  }

  submit(){
    this.dialogRef.close(this.inputUrl);
  }

  close(){
    this.dialogRef.close(null);
  }



}
