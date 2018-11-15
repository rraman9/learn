import java.util.Collection;

public class TradingContext {

    private Collection<SmartOrderModel> smartOrders;

    public Collection<SmartOrderModel> getSmartOrders() {
        return smartOrders;
    }

    public void setSmartOrders(Collection<SmartOrderModel> smartOrders) {
        this.smartOrders = smartOrders;
    }

    public void printAllSmartIds() {
        smartOrders.forEach(smartOrderModel -> System.out.println(smartOrderModel.getSmartid()));
    }


}
