import { Component } from '@angular/core';
import { TopicserviceService } from '../../services/topicservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-topic',
  templateUrl: './edit-topic.component.html',
  styleUrl: './edit-topic.component.css'
})
export class EditTopicComponent {
  topic: any = {
    title: '',
    description: ''
  };

  id!: number;

  constructor(private topicService: TopicserviceService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.topicService.getProductByName(this.id).subscribe(data => {
      this.topic = data;
    });
  }

  updateTopic(): void {
    this.topicService.updateTopic(this.topic).subscribe(
      data => {
        alert("Updated Successfully");
        this.router.navigate(['/displayTopics']);
      },
      error => alert("Sorry, an error occurred")
    );
  }

}
