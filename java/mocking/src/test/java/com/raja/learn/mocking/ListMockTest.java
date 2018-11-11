package com.raja.learn.mocking;

import org.junit.Assert;
import org.junit.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mockito;

import java.util.List;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

public class ListMockTest {

    List<String> mockList = Mockito.mock(List.class);

    @Test
    public void testSingleParameter() {
        when(mockList.size()).thenReturn(5);
        Assert.assertEquals(5, mockList.size());
    }

    @Test
    public void testReturnMultipleValues() {
        when(mockList.size()).thenReturn(5).thenReturn(10);
        Assert.assertEquals(5, mockList.size());
        Assert.assertEquals(10, mockList.size());
    }

    @Test
    public void testReturnParameters() {
        when(mockList.get(0)).thenReturn("first");
        Assert.assertEquals("first", mockList.get(0));
        Assert.assertEquals(null, mockList.get(1));
    }

    @Test
    public void testWithGenericParameters() {
        when(mockList.get(anyInt())).thenReturn("random");
        Assert.assertEquals("random", mockList.get(1000));
    }

    @Test
    public void verificationBasics() {
        String value = mockList.get(0);
        String value1 = mockList.get(1);
        String value2 = mockList.get(2);
        Mockito.verify(mockList).get(0);
        Mockito.verify(mockList, times(3)).get(anyInt());
        Mockito.verify(mockList, atLeast(2)).get(anyInt());
    }

    @Test
    public void testArgumentCapture() {
        mockList.add("SomeString");
        ArgumentCaptor<String> captor = ArgumentCaptor.forClass(String.class);
        verify(mockList).add(captor.capture());
        Assert.assertEquals("SomeString", captor.getValue());
    }

    @Test
    public void testMultipleArgumentCapture() {
        mockList.add("SomeString");
        mockList.add("SomeString2");
        ArgumentCaptor<String> captor = ArgumentCaptor.forClass(String.class);
        verify(mockList, times(2)).add(captor.capture());
        List<String> allValues = captor.getAllValues();
        Assert.assertEquals("SomeString", allValues.get(0));
        Assert.assertEquals("SomeString2", allValues.get(1));
    }
}
