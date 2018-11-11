package com.raja.learn.mocking.business;

import com.raja.learn.mocking.DataService;

public class BusinessImpl {

    public DataService getDataService() {
        return dataService;
    }

    public void setDataService(DataService dataService) {
        this.dataService = dataService;
    }

    private DataService dataService;
    public int calculateSum(int[] data) {
        int sum = 0;
        for (int value: data) {
            sum += value;
        }
        return sum;
    }

    public int calculateSumUsingDataService() {
        int sum = 0;
        int[] data = dataService.getAllData();
        for (int value: data) {
            sum += value;
        }
        return sum;
    }
}
