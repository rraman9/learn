package com.raja.learn.mocking;


import org.junit.Assert;
import org.junit.Test;

public class TestBusiness {

    @Test
    public void testCalculateSum() {
        BusinessImpl business = new BusinessImpl();
        int actualResult = business.calculateSum(new int[] {1,2,3});
        int expectedResult = 6;
        Assert.assertEquals(6, actualResult);
    }

    @Test
    public void testCalculateSumUsingDataService() {
        
    }
}
