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
                  FlatButton(
                    child: Text('ORDER NOW'),
                    onPressed: () {
                      Provider.of<Orders>(context, listen: false).addOrder(cart
                          .items()
                          .values
                          .toList(), cart.totalAmount);
                      cart.clear();
                    },
                    textColor: Theme
                        .of(context)
                        .primaryColor,
                  )
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
