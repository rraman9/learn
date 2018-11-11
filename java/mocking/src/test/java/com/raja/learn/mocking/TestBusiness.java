package com.raja.learn.mocking;


import com.raja.learn.mocking.business.BusinessImpl;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class TestBusiness {

    @InjectMocks
    BusinessImpl business = new BusinessImpl();

    @Mock
    DataService dataService;

    @Test
    public void testCalculateSum() {
        BusinessImpl business = new BusinessImpl();
        int actualResult = business.calculateSum(new int[] {1,2,3});
        int expectedResult = 6;
        Assert.assertEquals(6, actualResult);
    }

    @Test
    public void testCalculateSumUsingDataService() {
        Mockito.when(business.getDataService().getAllData()).thenReturn(new int[] {6,7,8});
        int expectedResult = 21;
        int actualResult = business.calculateSumUsingDataService();
        Assert.assertEquals(expectedResult, actualResult);
    }
}
