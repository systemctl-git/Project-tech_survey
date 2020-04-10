class Form {
    constructor() { }

    askQuestions() {
        if (drawn == false) {
            title1 = createElement('h1');
            title1.html("Arjun's Survey of technology (Answer yes or no)");
            title1.position(350, 10);

            heading1 = createElement('h2');
            heading1.html("Q1: Do you think that technology should be accessable by all?");
            heading1.position(300, 75);
            input1 = createInput();
            input1.position(300, 150);

            heading2 = createElement('h2');
            heading2.html("Q2: Are technological devices getting too powerful?");
            heading2.position(300, 175);
            input2 = createInput();
            input2.position(300, 250);

            heading3 = createElement('h2');
            heading3.html("Q3: Is technology a useful tool?");
            heading3.position(300, 275);
            input3 = createInput();
            input3.position(300, 350);

            heading4 = createElement('h2');
            heading4.html("Enter your email address.");
            heading4.position(300, 375);
            input4 = createInput();
            input4.position(300, 450);

            submit = createButton('Submit');
            submit.position(300, 500);

            drawn = true;
        }

        submit.mousePressed(
            function () {
                if (submitted != true) {
                    submitted = true;
                    thanks = createElement('h2');
                    thanks.html('Thank you for submitting the form!');
                    thanks.position(300, 525);
                    var answers = database.ref('voteAnswers');
                    if (answers === 0) {
                        answers = [];
                    }
                    answers.push({
                        '1': input1.value(),
                        '2': input2.value(),
                        '3': input3.value(),
                        'email': input4.value(),
                    });
                    database.ref('voteAnswers').set(answers);
                } else {
                    thanks.html('You already voted for this.');
                }
            }
        )
    }
}