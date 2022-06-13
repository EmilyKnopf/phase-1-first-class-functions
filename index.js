// function runFiveMiles(){
//     console.log("Go for a five-mile run")

// }
// function liftWeights(){
//     console.log("pump iorn")
// }
// function liftWeights(){
//     console.log("Swim 40 laps")
// }

// function Monday(){
//     runFiveMiles()
//     liftWeights()
// }

// function excerciseRoutine(postRunAcitivitiy){
//     runFiveMiles()
//     liftWeights()
// }

// function Monday(){
//     excerciseRoutine(liftWeights);
// }

// function exerciseRoutine(postRunActivitiy) {
//     runFiveMiles()
//     postRunActivitiy()
// }

function receivesAFunction(whatIAteToday){
    whatIAteToday()

}

function returnsANamedFunction(){
    return function aNamed(){
    console.log("A function has been named")
    }
}
function returnsAnAnonymousFunction() {
    return function (){
    console.log("A function has no name")
    }
}