public class FIOrderModel extends SmartOrderModel {
    private int id;

    public FIOrderModel(int id) {
        super("Smart:" + id);
        this.id = id;
    }

    @Override
    public String toString() {
        return "ID is:" + id;
    }
}
