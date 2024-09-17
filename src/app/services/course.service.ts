// src/app/services/course.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private courses: Course[] = [
    { id: 1, name: 'Angular Basics', description: 'Learn the basics of Angular.', startDate: new Date(), endDate: new Date(), capacity: 20, enrolled: 15 },
    { id: 2, name: 'Advanced Angular', description: 'Deep dive into Angular.', startDate: new Date(), endDate: new Date(), capacity: 15, enrolled: 10 },
  ];

  constructor() { }

  getCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  registerCourse(courseId: number): Observable<boolean> {
    const course = this.courses.find(c => c.id === courseId);
    if (course && course.enrolled < course.capacity) {
      course.enrolled++;
      return of(true);
    }
    return of(false);
  }
}
