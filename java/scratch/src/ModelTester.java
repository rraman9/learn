import java.util.ArrayList;
import java.util.List;

public class ModelTester {
    public static void main(String[] args) {
        TradingContext tradingContext = new TradingContext();
        List<SmartOrderModel> orderModels = new ArrayList<>();
        orderModels.add(new FIOrderModel(1));
        orderModels.add(new FIOrderModel(2));
        tradingContext.setSmartOrders(orderModels);
        tradingContext.getSmartOrders().forEach(smartOrderModel -> System.out.println(smartOrderModel));
        System.out.println("Now chceking out smart ids");
        tradingContext.printAllSmartIds();
    }
}
