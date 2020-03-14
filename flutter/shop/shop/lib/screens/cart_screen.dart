import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:shop/providers/cart.dart' show Cart;
import 'package:shop/providers/orders.dart';
import 'package:shop/widgets/cart_item.dart';

class CartScreen extends StatelessWidget {
  static const String routeName = '/cart';

  @override
  Widget build(BuildContext context) {
    final cart = Provider.of<Cart>(context);

    return Scaffold(
      appBar: AppBar(title: Text('Your cart')),
      body: Column(
        children: <Widget>[
          Card(
            margin: EdgeInsets.all(15),
            child: Padding(
              padding: EdgeInsets.all(8),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: <Widget>[
                  Text(
                    'Total',
                    style: TextStyle(fontSize: 20),
                  ),
                  Spacer(),
                  SizedBox(
                    width: 10,
                  ),
                  Chip(
                    label: Text(
                      '\$${cart.totalAmount}',
                      style: TextStyle(
                          color:
                          Theme
                              .of(context)
                              .primaryTextTheme
                              .title
                              .color),
                    ),
                  ),
                  OrderButton(cart: cart,)
                ],
              ),
            ),
          ),
          SizedBox(
            height: 10,
          ),
          Expanded(
              child: ListView.builder(
                  itemCount: cart.itemCount,
                  itemBuilder: (ctx, i) =>
                      CartItem(
                          cart
                              .items()
                              .values
                              .toList()[i].id,
                          cart
                              .items()
                              .values
                              .toList()[i].price,
                          cart
                              .items()
                              .values
                              .toList()[i].quantity,
                          cart
                              .items()
                              .values
                              .toList()[i].title,
                          cart
                              .items()
                              .keys
                              .toList()[i]
                      )))
        ],
      ),
    );
  }
}

class OrderButton extends StatefulWidget {
  const OrderButton({
    Key key,
    @required this.cart,
  });

  final Cart cart;

  @override
  _OrderButtonState createState() => _OrderButtonState();
}

class _OrderButtonState extends State<OrderButton> {
  var _isLoading = false;
  @override
  Widget build(BuildContext context) {
    return FlatButton(
      child: _isLoading? CircularProgressIndicator() : Text('ORDER NOW'),
      onPressed: widget.cart.totalAmount <= 0 || _isLoading ? null : () async {
        setState(() {
          _isLoading = true;
        });
        await Provider.of<Orders>(context, listen: false).addOrder(widget.cart
            .items()
            .values
            .toList(), widget.cart.totalAmount);
        widget.cart.clear();
        setState(() {
          _isLoading = false;
        });
      },
      textColor: Theme
          .of(context)
          .primaryColor,
    );
  }
}
