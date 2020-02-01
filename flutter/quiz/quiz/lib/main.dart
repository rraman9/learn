import 'package:flutter/material.dart';
import 'package:quiz/quiz.dart';
import 'package:quiz/result.dart';

import './question.dart';
import './answer.dart';

// void main() {
//   runApp(MyApp());
// }

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    // TODO: implement createState
    return _MyAppState();
  }
}

class _MyAppState extends State<MyApp> {
  final questions = const [
  {
    'questionText': 'What\'s your favorite color?',
    'answers': [
      {'text': 'Black', 'score': 1},
      {'text': 'Red', 'score': 2},
      {'text': 'Green', 'score': 3},
      {'text': 'White', 'score': 4}
    ],
  }

  ,

  {
  'questionText': 'What\'s your favorite animal?',
  'answers': [
  {'text':'Rabbit', 'score': 1},
  {'text':'Snake', 'score': 2},
  {'text':'Elephant','score': 3},
  {'text':'Lion', 'score': 4}],
  },
  {
  'questionText': 'Who\'s your favorite instructor?',
  'answers': [
  {'text':'Max', 'score': 1},
  {'text':'Vikas', 'score': 2},
  {'text': 'Ajay', 'score': 3},
  ]
  }];

  var _questionIndex = 0;
  var _totalScore = 0;

  void _resetQuiz() {
    setState(() {
      _questionIndex = 0;
      _totalScore = 0;
    });
  }

  void _answerQuestion(int score) {
    _totalScore += score;
    setState(() {
      _questionIndex = _questionIndex + 1;
    });
    print(_questionIndex);
    if (_questionIndex < questions.length) {
      print('We have more questions!');
    } else {
      print('No more questions!');
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Quiz time!'),
        ),
        body: _questionIndex < questions.length
            ? Quiz(
            answerQuestion: _answerQuestion,
            questionIndex: _questionIndex,
            questions: questions)
            : Result(_totalScore, _resetQuiz),
      ),
    );
  }
}
