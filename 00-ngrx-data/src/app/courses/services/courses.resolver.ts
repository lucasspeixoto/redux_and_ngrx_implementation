import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { filter, first, tap } from "rxjs/operators";
import { CourseEntityService } from "./course-entity.service";

/* O resolver vai ser o responsável por obter os dados do backend e
armazenar na store */
@Injectable()
export class CoursesResolver implements Resolve<boolean> {
  constructor(private coursesService: CourseEntityService) {}
  // emit true and the route transition finish
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.coursesService.loaded$.pipe(
      tap((loaded) => {
        if (!loaded) {
          this.coursesService.getAll();
        }
      }),
      filter((loaded) => !!loaded),
      first()
    );
  }
}
