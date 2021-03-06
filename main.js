// welcome.
const welcome = document.querySelector('.welcome');
const startButton = document.getElementById('start-quiz');

window.addEventListener( 'load', () => {
     
    setTimeout( () => {

        welcome.classList.add('active');
        startButton.classList.add('active');

    }, 3000 );

});


// display quize when button is clicked.
startButton.addEventListener( 'click', displayQuiz );

// displayQuiz app function.
function displayQuiz() {
    
    const exam = document.querySelector('.exam');

    exam.classList.add('active');
    startButton.classList.remove('active');

}

// choicesCheaker function.
function choicesCheaker( array, correct, not, answer ) {

    for( let j = 0; j < array.length; j++ ) {
        

            if( array[j].checked === true ) {

                if( array[j].value === answer) {
                    // add class correct.
                    correct.classList.add('correct');
                    // remove class not.
                    not.classList.remove('not');
                }

                else {
                    // remove class correct.
                    correct.classList.remove('correct');
                    // add class not.
                    not.classList.add('not');
                }
            }


}

}


function questions() {

    //first question arr.
   const exam__choices_01 = document.querySelector('.exam__choices-01');
   
   const correct_01 = document.querySelector('.correct-qn-1');
   const notCorrect_01 = document.querySelector('.not-qn-1');
   
   const inputsArr_01 = exam__choices_01.getElementsByTagName('input');
       
   // retrive the choicesCheaker function for first question.
   choicesCheaker( inputsArr_01, correct_01, notCorrect_01, 'javascript' );
   
   
   
   // second question arr.
   const exam__choices_02 = document.querySelector('.exam__choices-02');
   
   const correct_02 = document.querySelector('.correct-qn-2');
   const notCorrect_02 = document.querySelector('.not-qn-2');
   
   const inputsArr_02 = exam__choices_02.getElementsByTagName('input');
   
   // function choicesCheaker for second question.
   choicesCheaker( inputsArr_02, correct_02, notCorrect_02, 'markup' );
   
   
   // third question arr.
   const exam__choices_03 = document.querySelector('.exam__choices-03');
   
   const correct_03 = document.querySelector('.correct-qn-3');
   const notCorrect_03 = document.querySelector('.not-qn-3');
   
   const inputsArr_03 = exam__choices_03.getElementsByTagName('input');
   
   // function choicesCheaker for second question.
   choicesCheaker( inputsArr_03, correct_03, notCorrect_03, 'styling web page' );
   
   
   // forth question arr.
   const exam__choices_04 = document.querySelector('.exam__choices-04');
   
   const correct_04 = document.querySelector('.correct-qn-4');
   const notCorrect_04 = document.querySelector('.not-qn-4');
   
   const inputsArr_04 = exam__choices_04.getElementsByTagName('input');
   
   // function choicesCheaker for forth question.
   choicesCheaker( inputsArr_04, correct_04, notCorrect_04, 'sass' );
   
   
   // firth question arr.
   const exam__choices_05 = document.querySelector('.exam__choices-05');
   
   const correct_05 = document.querySelector('.correct-qn-5');
   const notCorrect_05 = document.querySelector('.not-qn-5');
   
   const inputsArr_05 = exam__choices_05.getElementsByTagName('input');
   
   // function choicesCheaker for second question.
   choicesCheaker( inputsArr_05, correct_05, notCorrect_05, 'react.js' );

}



const marksWrapper = document.getElementById('marksWrapper');

const doneButton = document.getElementById('done');

doneButton.addEventListener( 'click', () => {
    
    // retrive questions function on click.
    questions();

    let correct = document.querySelectorAll('.correct')
    let not = document.querySelectorAll('.not')
      
    let correctInt = correct.length; 
    let notInt = not.length;
    // calculate marks.
    let marks = ( ( correctInt / 5 ) * 100 ) + '%';

    let marksWrapper = document.getElementById('marksWrapper');
   
    marksWrapper.textContent = marks;

    let marks__comment = document.getElementById('marks__comment')

    if(marks === '100%') {
        marks__comment.textContent = 'Exellent!';
    } 

    else {
        marks__comment.textContent = '';
    }

    let marks_info = document.getElementById('marks_info');

    // show marks.
    marks_info.classList.add('show');

});



