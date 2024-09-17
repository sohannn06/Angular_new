// src/app/components/course-list/course-list.component.ts
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css'],
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
    });
  }

  register(courseId: number): void {
    this.courseService.registerCourse(courseId).subscribe((success) => {
      if (success) {
        alert('Registration successful!');
      } else {
        alert('Registration failed. Course is full.');
      }
    });
  }
}
