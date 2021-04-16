import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.scss']
})
export class PasswordStrengthComponent implements OnInit, OnChanges {

  @Input() password: string;

  has8Characters = false;
  hasSpecialChar = false;
  hasNumber = false;
  hasUppercase = false;

  faCheck = faCheck;
  faTimes = faTimes;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.evaluateStrength(changes['password'].currentValue);
  }

  evaluateStrength(password: string){
    let digitRegex = new RegExp(/\d/);
    this.hasNumber = digitRegex.test(password);

    let uppercaseRegex = new RegExp(/[A-Z]/);
    this.hasUppercase = uppercaseRegex.test(password);

    this.has8Characters = password.length >= 8;

    let specialCharRegex = new RegExp(/[$&+,:;=?@#|'<>.^*()%!-]/);
    this.hasSpecialChar = specialCharRegex.test(password);
  }
}
