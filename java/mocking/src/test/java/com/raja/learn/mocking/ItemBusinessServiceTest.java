package com.raja.learn.mocking;

import com.raja.learn.mocking.business.ItemBusinessService;
import com.raja.learn.mocking.model.Item;
import com.raja.learn.mocking.repository.ItemRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Arrays;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class ItemBusinessServiceTest {

    @InjectMocks
    private ItemBusinessService itemBusinessService;

    @Mock
    private ItemRepository repository;

    @Test
    public void testItemBusinessService() {
        Mockito.when(repository.findAll()).thenReturn(Arrays.asList(new Item(2, "item2", 10,50)));
        List<Item> items = itemBusinessService.retrieveAllItems();
        Assert.assertEquals(items.get(0).getValue(), 500);
    }

}
