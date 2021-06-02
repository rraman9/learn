import 'package:avataar_generator/enums.dart';
import 'package:avataar_generator/generator.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class AvatarGenerator extends StatefulWidget {
  @override
  _AvatarGeneratorState createState() => _AvatarGeneratorState();
}

class _AvatarGeneratorState extends State<AvatarGenerator> {
  displaySvg(rawSvg) async {
    final DrawableRoot svgRoot = await svg.fromSvgString(rawSvg, rawSvg);
    //return await svgRoot.toPicture().toImage(500, 500);
    return SvgPicture.string(rawSvg);
  }
  @override
  Widget build(BuildContext context) {
    Options option = new Options();
    option.facialHair = FacialHair.beardmagestic;
    return FutureBuilder(
      future: displaySvg(getSvg(option).replaceAll("path-", "path")),
      builder: (context,snapshot){
        return Container(
          child: snapshot.data,
        );
      },
    );
  }
}