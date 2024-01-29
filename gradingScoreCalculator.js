// Grading score calculator
function gradingScore(score) {
    let gradeScore;
    switch (true) {
      case (score <= 100 && score >= 90):
        gradeScore = "A";
        break;
      case (score<=89 && score>=80): 
        gradeScore='B';
        break;
      case (score <=79 && score>= 70):
        gradeScore='C';
        break;
      case (score<=69 && score>=60):
        gradeScore='D';
        break;
      case (score<=59 && score>=0):
        gradeScore='F';
        break;
      case (score>100 && score<0): 
        gradeScore='Invalid Score'
        break;   
      default:
        return 'Invalid Score'

    }
    return `you got ${gradeScore} grade`
  }
  const person1 =gradingScore(78);
  const person2 =gradingScore(48);
  const person3 =gradingScore(110);
  console.log(person1, person2 ,person3);