const projects=[
    {
        name:"project cargo",
        description:"a web application for import and export management",
        technolgyUsed:["PHP","HTML","CSS","mysqldb"],
        year:2023
    },
   
    {
        name:"lavinia",
        description:"a web application for stock management",
        technolgyUsed:["PHP","HTML","CSS","mysql db"],
        year:2024
    },
     {
        name:"website portifolio",
        description:"personal portifolio",
        technolgyUsed:["figma","HTML","CSS"],
        year:2025
    }
];
projects.map((project)=>{
console.log("project name:",project.name);
console.log("Description:",project.description);
console.log("technologyUsed:",project.technolgyUsed);
console.log("year:",project.year);
});