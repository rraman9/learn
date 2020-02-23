import 'package:flutter/material.dart';
import 'package:meals/main_drawer.dart';

class FiltersScreen extends StatefulWidget {
  static const routeName = '/filters';
  final Function setFilters;
  final Map<String, bool> currentFilters;

  FiltersScreen(this.setFilters, this.currentFilters);

  @override
  _FiltersScreenState createState() => _FiltersScreenState();
}

class _FiltersScreenState extends State<FiltersScreen> {

  bool _glutenFree = false;
  bool _vegetarian = false;
  bool _vegan = false;
  bool _lactoseFree = false;

  initState() {
    super.initState();
    _glutenFree = widget.currentFilters['gluten'];
    _vegetarian = widget.currentFilters['vegetarian'];
    _vegan = widget.currentFilters['vegan'];
    _lactoseFree = widget.currentFilters['lactose'];
  }

  Widget _buildSwitchListTile(String title, String description, bool currentValue, Function updateValue) {
    return SwitchListTile(title: Text(title), value: currentValue, onChanged: updateValue,);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Your filters'), actions: <Widget>[
        IconButton(icon: Icon(Icons.save), onPressed: () {
          final selectedFilters = {
            'gluten': _glutenFree,
            'lactose': _lactoseFree,
            'vegan': _vegan,
            'vegetarian': _vegetarian
          };
          widget.setFilters(selectedFilters);
        }),
      ],),
      drawer: MainDrawer(),
      body: Column(children: <Widget>[
        Container(padding: EdgeInsets.all(20), child: Text('Adjust your meal selection', style: Theme.of(context).textTheme.title,), ),
        Expanded(child: ListView(children: <Widget>[
          _buildSwitchListTile('Gluten-free', 'Only include gluten-free meal', _glutenFree, (newValue) {
            setState(() {
              _glutenFree = newValue;
            });
          }),
          _buildSwitchListTile('Lactose-free', 'Only include lactose-free meal', _lactoseFree, (newValue) {
            setState(() {
              _lactoseFree = newValue;
            });
          }),
          _buildSwitchListTile('Vegetarian', 'Only include vegetarian meal', _vegetarian, (newValue) {
            setState(() {
              _vegetarian = newValue;
            });
          }),
          _buildSwitchListTile('Vegan', 'Only include vegan meal', _vegan, (newValue) {
            setState(() {
              _vegan = newValue;
            });
          }),
        ],),)
      ],),
    );
  }
}