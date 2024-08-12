package com.example.topiccrud.Service;

import com.example.topiccrud.Model.Topic;
import com.example.topiccrud.Repo.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TopicService {

    private final TopicRepository topicRepository;

    @Autowired
    public TopicService(TopicRepository topicRepository) {
        this.topicRepository = topicRepository;
    }

    public List<Topic> getAllTopics() {
        return topicRepository.findAll();
    }

    public Optional<Topic> getTopicById(Long id) {
        return topicRepository.findById(id);
    }

    public Topic createTopic(Topic topic) {
        return topicRepository.save(topic);
    }

    public Topic updateTopic(Long id, Topic topicDetails) {
        return topicRepository.findById(id)
                .map(topic -> {
                    topic.setTitle(topicDetails.getTitle());
                    topic.setDescription(topicDetails.getDescription());
                    return topicRepository.save(topic);
                })
                .orElseThrow(() -> new RuntimeException("Topic not found with id " + id));
    }

    public void deleteTopic(Long id) {
        topicRepository.deleteById(id);
    }
}
