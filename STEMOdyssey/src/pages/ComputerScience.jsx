import '../styles/CS.css'
import { shuffle } from './MathGame';

const arr = ["Question 1", "Question 2", "Question 3", "Question 4", "Question 5"];

export function CSQuestion() {
    const operation = Math.floor(Math.random() * arr.length);
    const question = {};

    switch (operation) {
    
        case 0:
    const question1 = "What is a 'switch' statement in programming?";
    const wrong1Question1 = "switch statement is used to terminate a loop or function immediately.";
    const wrong2Question1 = "A switch statement continually evaluates an expression and executes a loop until the condition becomes false.";
    const wrong3Question1 = "A switch statement is used to assign a specific value to a variable based on the result of a boolean expression.";
    const rightQuestion1 = "A switch statement allows a variable to be tested for equality " + 
    "against a list of values. Each value is called a case, and the variable being switched on is checked for each case.";

   question.text = question1;
   question.answer = rightQuestion1;
   question.choices = shuffle([rightQuestion1, wrong1Question1, wrong2Question1, wrong3Question1]);

    
        break;



        case 1:
    const question2 = "What is the traditional print/output statement for a beginner’s program?";
    const wrong1Question2 = "Hello Life?";
    const wrong2Question2 = "Hello People of the World!";
    const wrong3Question2 = "Hello Universe!!";
    const rightQuestion2 = "Hello World";

    question.text = question2;
   question.answer = rightQuestion2;
   question.choices = shuffle([rightQuestion2, wrong1Question2, wrong2Question2, wrong3Question2]);
        break;



        case 2:
    const question3 = "What is an 'if' statment in programming";
    const wrong1Question3 = "An if statement is used to automatically terminate the program if the condition is MAYBE.";
    const wrong2Question3 = "An if statement is used to define a block of code that runs multiple times if the condition is FALSE.";
    const wrong3Question3 = "An if statement is a way to execute a block of code once for each element in an array.";
    const rightQuestion3 = "An if statement allows a program to perform different actions based on the outcome of a Boolean expression, enabling conditional execution of code blocks.";
        
    question.text = question3;
   question.answer = rightQuestion3;
   question.choices = shuffle([rightQuestion3, wrong1Question3, wrong2Question3, wrong3Question3]);
    
    break;


        
        case 3:
    const question4 = "What is the purpose of the 'break' keyword in programming";
    const wrong1Question4 = "To pause the execution of a loop temporarily, allowing other operations to complete before continuing.";
    const wrong2Question4 = "Exits the entire program, deleting everything.";
    const wrong3Question4 = "To skip the current iteration of a loop and CONTINUE with the next iteration."
    const rightQuestion4 = "To stop the execution of the current loop or switch case and resume execution at the next statement OUTSIDE it.";
    
    question.text = question4;
   question.answer = rightQuestion4;
   question.choices = shuffle([rightQuestion4, wrong1Question4, wrong2Question4, wrong3Question4]);
    
    break;



        case 4:
    const question5 = "What is the syntax (naming convention) programmers use when creating variable names";
    const wrong1Question5 = "DinoSyntax";
    const wrong2Question5 = "ProgrammerSyntax";
    const wrong3Question5 = "UpperCase";
    const rightQuestion5 = "CamelCase";
     
    question.text = question5;
   question.answer = rightQuestion5;
   question.choices = shuffle([rightQuestion5, wrong1Question5, wrong2Question5, wrong3Question5]);
    
    break;

    }


    return question;

}
