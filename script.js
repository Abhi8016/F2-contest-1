let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map((item) => console.log(item))
}

function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(console.log)
}

function addData() {
    //Write your code here, just console.log
    arr.push({ id: 4, name: "susan", age: "20", profession: "intern" })
    console.log(arr);
}

function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(obj => obj.profession !== "admin");
    console.log(arr);
}

function concatenateArray() {
    //Write your code here, just console.log
    let arr2 = [
        { id: 5, name: "IronMan", age: "50", profession: " industrialist, genius inventor, CEO" },
        { id: 6, name: "CaptainAmerica", age: "78", profession: "soldier" },
        { id: 7, name: "Thor", age: "1500", profession: "GOD" },
    ];

    let concatArray = arr.concat(arr2);
    console.log(concatArray);

}