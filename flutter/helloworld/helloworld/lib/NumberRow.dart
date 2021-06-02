import 'package:flutter/material.dart';

class NumberRow extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Text('1'),
        Column(
          children: [
            CircleAvatar(backgroundColor: Colors.white, radius: 5,),
            Container(color: Colors.orange, height: 30, width: 2,),
          ],
        )
      ],
    );
  }
}
