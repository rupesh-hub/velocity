import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, throwError} from 'rxjs';
import {MessageResponse} from './messages.model';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {

  private http: HttpClient = inject(HttpClient);

  public message = (): Observable<MessageResponse> => {
    return this.http.get<MessageResponse>(
      `/messages`
    ).pipe(
      map(response => response),
      catchError(error => throwError(error))
    )
  }

}
