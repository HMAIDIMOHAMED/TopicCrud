import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTopicComponent } from './components/add-topic/add-topic.component';
import { DisplayTopicsComponent } from './components/display-topics/display-topics.component';
import { EditTopicComponent } from './components/edit-topic/edit-topic.component';

const routes: Routes = [
  {path:'addTopic', component:AddTopicComponent},
  {path:'displayTopics', component:DisplayTopicsComponent},
  {path:'updateTopic/:id', component:EditTopicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
