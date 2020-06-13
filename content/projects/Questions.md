---
title: Question (.NET)
GitURL: question
section: "Libraries"
License: MIT
Language: dotNET
date: 2015-02-10
NotAccepting: true
Description: "A library of classes which allows you to create questions easily for Console Applications."
Usability: 4
---

### 1. Description

Question is a simple class which allows you to create a questionaire in C#.NET or VB.NET.  
This is done as a school project in early 2015, and is released under the MIT license.

### 2. Requirements

This software might require proprietary software to run, which I no longer use. It may be possible to use Mono Runtime.

### 3. Usage

#### 3.1 Visual Basic

```basic
' Clone the object
Dim MyQuestion As Question

' Initialize
MyQuestion = New Question(
1, '  Question number/ID, will be displayed to user
"What is CIL?", ' The Question
"Code Intermedia Language", ' Option A
"Common Interface Locale", ' Option B
"Common Intermediate Language", ' Option C (Correct answer)
"Common Integer Language", ' Option D
Question.QuestionOption.C) ' The correct answer (In the case, C)

' Display the question
MyQuestion.Run()

' Check if the user passed that question
If MyQuestion.Passed Then
    Console.WriteLine("Good job!")
Else
    Console.WriteLine("You could do better next time!")
End If
```
#### 3.2 C Sharp

```c#
// Clone the object
Question myQuestion;

// Initialize
myQuestion = new Question(
    1, // Question number/ID, will be displayed to user
    "What is CIL?", // The Question
    "Code Intermedia Language", // Option A
    "Common Interface Locale", // Option B
    "Common Intermediate Language", // Option C (Correct answer)
    "Common Integer Language", // Option D
    Question.QuestionOption.C); // The correct answer (In this case, C)

// Display the question
myQuestion.Run();

// Check if the user passed that question
if (myQuestion.passed())
{
    Console.WriteLine("Good Job!");
} 
else {
    Console.WriteLine("You could do better next time!");
}
```
