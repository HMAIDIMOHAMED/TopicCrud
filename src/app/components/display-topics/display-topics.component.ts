import { Component } from '@angular/core';
import { TopicserviceService } from '../../services/topicservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-topics',
  templateUrl: './display-topics.component.html',
  styleUrl: './display-topics.component.css'
})
export class DisplayTopicsComponent {

  topics: any[] = [];


  constructor(private topicService : TopicserviceService, private router:Router){}

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

  updateTopic(id: number){
    this.router.navigate(['updateTopic',id])
  }
  deleteTopic(id: number): void {
    if (confirm(`Are you sure you want to delete topic "${id}"?`)) {
      this.topicService.deleteTopic(id).subscribe(
        () => {
          alert(`Topic "${id}" deleted successfully!`);
          this.displayAllTopics(); 
        },
        error => {
          alert(`Failed to delete product "${id}".`);
          console.error('Error deleting topic:', error);
        }
      );
    }
  }
}
