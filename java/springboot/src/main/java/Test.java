public class Test {
    public static void main(String[] args) {
        String message = "AAAAAAAA - This order for XXXXXXXX attempts to sell a greater quantity than is available for AAAAAAAA.  .00 is currently available. (Amount Over: -15,000.00, Order Quantity: 15,000.00, Current Position: .00, Pending/Open Orders: .00, Hard Segregations: .00).";
        message = message.replace("Amount Over: -15,000.00", "Amount Over: -35,00000");
        System.out.println(message);
    }
}
