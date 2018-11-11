package com.raja.learn.mocking;

import com.raja.learn.mocking.business.ItemBusinessService;
import com.raja.learn.mocking.controller.ItemController;
import com.raja.learn.mocking.model.Item;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;

@RunWith(SpringRunner.class)
@WebMvcTest(ItemController.class)
public class ItemControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ItemBusinessService itemBusinessService;

    @Test
    public void testDummyItem() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/dummy-item").accept(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content()
                        .json("\n" +
                                "{\"id\":1,\"name\":\"Ball\",\"price\":100,\"quantity\":10}")).andReturn();
    }

    @Test
    public void testItemFromBusinessServiceHardcoded() throws Exception {
        Mockito.when(itemBusinessService.retrieveHardcodedItem()).thenReturn(new Item(1, "Ball", 100, 10));
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/item-from-business-service").accept(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content()
                        .json("\n" +
                                "{\"id\":1,\"name\":\"Ball\",\"price\":100,\"quantity\":10}")).andReturn();
    }

    @Test
    public void testItemFromBusinessServiceRepository() throws Exception {
        Mockito.when(itemBusinessService.retrieveAllItems()).thenReturn(Arrays.asList(new Item(2, "item2", 10,50)));
        RequestBuilder requestBuilder = MockMvcRequestBuilders.get("/all-items-from-database").accept(MediaType.APPLICATION_JSON);
        MvcResult mvcResult = mockMvc.perform(requestBuilder).andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content()
                        .json("\n" +
                                "[{\"id\":2,\"name\":\"item2\",\"price\":10,\"quantity\":50}]")).andReturn();
    }
}
