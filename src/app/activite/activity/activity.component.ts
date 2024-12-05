import { NgClass } from '@angular/common';
import { Component, computed, model, signal } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import {
  ActivityTypeAndIconName,
  ActivityTypeAndSchedulingContent,
  ActivityTypeOptions,
} from '../../common/constant/activity.constant';
import { Activity, ActivityType } from '../../model/activity.model';
import { RelativeTimePipe } from '../../pipe/relative-time.pipe';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [
    MatIconModule,
    MatMenuModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    NgClass,
    RelativeTimePipe,
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss',
})
export class ActivityComponent {
  readonly ActivityType = ActivityType;
  readonly ActivityTypeAndIconName = ActivityTypeAndIconName;
  readonly ActivityTypeAndSchedulingContent = ActivityTypeAndSchedulingContent;
  readonly ActivityTypeOptions = ActivityTypeOptions;

  readonly assignUser = {
    firstName: 'Milton',
    lastName: 'Romguera',
  };

  selectedType = signal<ActivityType>(ActivityType.Phone);
  message = model<string>('');
  placeholder = computed(
    () =>
      `Add note about ${this.assignUser.firstName} ${this.assignUser.lastName}....`
  );

  activities = signal<Activity[]>([
    {
      id: 0,
      assignUser: {
        firstName: 'Milton',
        lastName: 'Romguera',
      },
      timestamp: new Date().toISOString(),
      type: ActivityType.Message,
      message: 'test constet a sdnfknalskdfn asd faslkdflaskdf saknfklasdf',
    },
  ]);

  reset(): void {
    this.message.set('');
    this.selectedType.set(ActivityType.Phone);
  }

  onDelete(index: number): void {
    this.activities.update((state) => {
      state.splice(index, 1);
      return [...state];
    });
  }

  onSubmit(): void {
    this.activities.update((state) => {
      state.splice(1, 0, {
        id: Date.now(),
        assignUser: this.assignUser,
        timestamp: new Date().toISOString(),
        type: this.selectedType(),
        message: this.message(),
      });

      return [...state];
    });
    this.reset();
  }
}
