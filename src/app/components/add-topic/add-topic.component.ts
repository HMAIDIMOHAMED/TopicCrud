import { Component } from '@angular/core';
import { TopicserviceService } from '../../services/topicservice.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-add-topic',
  templateUrl: './add-topic.component.html',
  styleUrls: ['./add-topic.component.css'] 
})
export class AddTopicComponent {

  topic: any = {
    title: '',
    description: ''
  };

  constructor(private topicService: TopicserviceService, private router: Router) {}

  addTopic() {
    if (this.topic.title && this.topic.description) {
      this.topicService.addTopic(this.topic).subscribe(
        response => {
          console.log('Topic added successfully:', response);
          this.router.navigate(['/displayTopics']); 
        },
        error => {
          console.error('Error adding topic:', error);
        }
      );
    } else {
      console.error('Form is not valid.');
    }
  }
}
