import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css'],
})
export class StepperComponent {
  @Input() steps: number = 4;
  @Input() currentStep: number = 3;

  getStepsWithState() {
    let stepArray = [];
    for (let i = 1; i <= this.steps; i++) {
      let currentStep = i <= this.currentStep ? true : false;
      stepArray.push({
        currentStep,
      });
    }
    return stepArray;
  }
}
