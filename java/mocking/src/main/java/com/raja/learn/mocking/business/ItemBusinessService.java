package com.raja.learn.mocking.business;

import com.raja.learn.mocking.model.Item;
import com.raja.learn.mocking.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ItemBusinessService {

    @Autowired
    private ItemRepository repository;
    public Item retrieveHardcodedItem() {
        return new Item(1, "Ball", 100, 10);
    }

    public List<Item> retrieveAllItems() {
        List<Item> items = repository.findAll();
        items.forEach(item -> item.setValue(item.getPrice()*item.getQuantity()));
        return items;
    }
}
