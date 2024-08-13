import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Topic } from '../topic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopicserviceService {

  baseURL = "http://localhost:8080/api/topics"
  constructor(private http: HttpClient) { }

  addTopic(topic: Topic): Observable<Topic> {
    return this.http.post<Topic>(this.baseURL, topic);
  }

  displayAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.baseURL);
  }

  deleteTopic(id: number) : Observable<void>{
    return this.http.delete<void>(`${this.baseURL}/${id}`);
  }

  updateTopic(topic: Topic): Observable<Topic> {
    return this.http.put<Topic>(`${this.baseURL}/${topic.id}`, topic);
}

  getProductByName(id: number): Observable<Topic> {
    return this.http.get<Topic>(`${this.baseURL}/${id}`);
  }
}
