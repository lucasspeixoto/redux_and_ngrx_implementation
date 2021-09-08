import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from "@ngrx/data";
import { Course } from "../model/course";

@Injectable()
export class CourseEntityService extends EntityCollectionServiceBase<Course> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Course", serviceElementsFactory);
  }
}

/* O CoursesEntityService vai ser quem nos fornecerá todas as funcionalidades
para gerenciamento do nosso estado de curso (Course entity state) */
