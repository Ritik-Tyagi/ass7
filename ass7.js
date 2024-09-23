//1

let subjectsHash = {
    1: "Javascript",
    2: "HTML",
    3: "CSS",
    4: "Java",
    5: "Rust",
  };
  
  let students = [
    { id: 1, name: "Prateek", subjectID: 5 },
    { id: 2, name: "Yogesh", subjectID: 2 },
    { id: 3, name: "Nrupul", subjectID: 4 },
    { id: 4, name: "Prateek", subjectID: 1 },
  ];
  
  
  let result = {};
  
  
  students.forEach(student => {
    const subjectName = subjectsHash[student.subjectID];
    
   
    if (!result[student.name]) {
      result[student.name] = [];
    }
    
   
    result[student.name].push(subjectName);
  });
  
  console.log(result);


//2

let prateekMarksData = {
    name: "Prateek",
    subject1: "Javascript",
    subject2: "HTML",
    subject3: "CSS",
    subject4: null,
    subject5: null,
    marks1: 90,
    marks2: 81,
    marks3: 80,
    marks4: null,
    marks5: null,
  };
  
  let nrupulMarksData = {
    name: "Nrupul",
    subject1: "Java",
    subject2: "Python",
    subject3: null,
    subject4: null,
    subject5: null,
    marks1: 95,
    marks2: 85,
    marks3: null,
    marks4: null,
    marks5: null,
  };
  
  let allStudentsMarksData = [prateekMarksData, nrupulMarksData];
  
  
  function summarizeMarksData(studentsData) {
    return studentsData.map(student => {
      let summary = {
        name: student.name,
        marks: []
      };
  
      for (let i = 1; i <= 5; i++) {
        const subject = student[`subject${i}`];
        const score = student[`marks${i}`];
  
        if (subject && score !== null) {
          summary.marks.push({ subject: subject, score: score });
        }
      }
  
      return summary;
    });
  }
  
  const summarizedData = summarizeMarksData(allStudentsMarksData);
  console.log(summarizedData);

  //3


  const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
  ];
  
  let result1 = {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  };
  
 
  voters.forEach(voter => {
    if (voter.age >= 18 && voter.age <= 24) { 
      result1.numYoungPeople++;
      if (voter.voted) {
        result1.numYoungVotes++;
      }
    } else if (voter.age >= 25 && voter.age <= 44) { 
      result1.numMidsPeople++;
      if (voter.voted) {
        result1.numMidVotesPeople++;
      }
    } else if (voter.age >= 45) { // Old
      result1.numOldsPeople++;
      if (voter.voted) {
        result1.numOldVotesPeople++;
      }
    }
  });
  
  console.log(result1);
  

  //4

  const data = [
    {
      name: "Superman",
      favoriteIceCreams: [
        "Strawberry",
        "Vanilla",
        "Chocolate",
        "Cookies & Cream",
      ],
    },
    {
      name: "Batman",
      favoriteIceCreams: [
        "Cookies & Cream",
        "Mint Chocolate Chip",
        "Chocolate",
        "Vanilla",
      ],
    },
    {
      name: "Flash",
      favoriteIceCreams: ["Chocolate", "Rocky Road", "Pistachio", "Banana"],
    },
    {
      name: "Aquaman",
      favoriteIceCreams: ["Vanilla", "Chocolate", "Mint Chocolate Chip"],
    },
    {
      name: "Green Lantern",
      favoriteIceCreams: [
        "Vanilla",
        "French Vanilla",
        "Vanilla Bean",
        "Strawberry",
      ],
    },
    {
      name: "Robin",
      favoriteIceCreams: ["Strawberry", "Chocolate", "Mint Chocolate Chip"],
    },
  ];
  
 
  const flavorCount = {};
  
  
  data.forEach(superhero => {
    superhero.favoriteIceCreams.forEach(flavor => {
      if (flavorCount[flavor]) {
        flavorCount[flavor]++;
      } else {
        flavorCount[flavor] = 1;
      }
    });
  });
  
  console.log(flavorCount);
  