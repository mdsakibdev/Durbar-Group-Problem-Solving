/**
 * * map() + calculation + if/else + template literal ব্যবহার করতে হবে।
 * * Formula: Math.round((present / total) * 100)
 */

let students = [
    { name: "Lina", present: 15, total: 20 },
    { name: "Sam", present: 12, total: 20 }
]

let allSummary = students.map(student => {
    let percentage = Math.round((student.present / student.total) * 100)

    let status = "";
    if(percentage >= 90){
        status = "Excellent"
    }else if (percentage >= 75){
        status = "Good" 
    }else {
        status = "At Risk"
    }
    return `${student.name}: ${student.present}/${student.total} (${percentage}%) - ${status}`
})

console.log(allSummary)