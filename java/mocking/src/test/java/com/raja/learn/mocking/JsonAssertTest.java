package com.raja.learn.mocking;

import org.junit.Test;
import org.skyscreamer.jsonassert.JSONAssert;

public class JsonAssertTest {

    String actualResponse = "\n" + "{\"id\":1,\"name\":\"Ball\",\"price\":100,\"quantity\":10}";
    @Test
    public void jsonAssertLenient() throws Exception{
        String expectedResponse = "\n" + "{\"id\" :1,\"name\":\"Ball\"}";
        JSONAssert.assertEquals(expectedResponse, actualResponse, false);
    }

    @Test
    public void jsonAssertStrict() throws Exception{
        String expectedResponse = "\n" + "{\"id\":1,\"name\":\"Ball\",\"price\":100,\"quantity\":10}";
        JSONAssert.assertEquals(expectedResponse, actualResponse, true);
    }

    @Test
    public void jsonAssertStrictWithoutEscape() throws Exception{
        String expectedResponse = "{id:1, name:Ball, price:100}";
        JSONAssert.assertEquals(expectedResponse, actualResponse, false);
    }
}
