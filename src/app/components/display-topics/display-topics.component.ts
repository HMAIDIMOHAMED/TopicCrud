import { Component } from '@angular/core';
import { TopicserviceService } from '../../services/topicservice.service';

@Component({
  selector: 'app-display-topics',
  templateUrl: './display-topics.component.html',
  styleUrl: './display-topics.component.css'
})
export class DisplayTopicsComponent {

  topics: any[] = [];

  constructor(private topicService : TopicserviceService){}

  ngOnInit() {
    this.displayAllTopics(); 
  }

  displayAllTopics() {
    this.topicService.displayAllTopics().subscribe(
      (data: any) => {
        this.topics = data; 
      },
      (error: any) => {
        console.error('Error fetching topics:', error);
      }
    );
  }
}
