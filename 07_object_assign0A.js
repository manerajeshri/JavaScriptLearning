let professor ={  // creating an object
    name: "Rajeshri Mane",
    Qualification : "MTech",
    gender : "Female",
    city : "Pune",
    age : 32,
    degrees :{ //2
        engineering :'CSC',
        PHD : "Adv Computing",
        graduation : "BE",
        postGraduation : "MTech"
    },
    certificates : { //3
        cert1 : "Hacker rank participation ",
        cert2 : "Certificate in IFE course ",
        cert3 : "Certificate in Adv Programming"
    },
    concatCert : function () { //4
         return  this.degrees.PHD +", "+ this.degrees.postGraduation + ", " + this.degrees.graduation + ", "
         + this.degrees.engineering;
    }
}

console.log(`\n1] Professor details :`);
console.log(professor);
console.log(`\n2] Nested object Degrees: :`);
console.log(professor.degrees);
console.log(`\n3] Nested object Certificates: :`);
console.log(professor.certificates);
console.log(`\n4] function as Value: concat all degrees fron step2`);
const totalDegrees = professor.concatCert();
console.log(`Teacher degrees are : ${totalDegrees}`);
console.log(`Total degrees are : 4`);

console.log(`\n5] Adding new property : professor.married ="Yes"; and logging same:`);
professor.married ="Yes";
console.log(`Is professor Married? : ${professor.married}`);

console.log(`\n6] Modify existing property : professor.age = 33;`);
professor.age = 33;
console.log(` professor age is : ${professor.age}`);

console.log(`\n7] Deleting one certificate from nested object :`);
console.log(`Before :`);
console.log(professor.certificates);
 delete professor.certificates.cert2;
 console.log(`After :`);
 console.log(professor.certificates);
 
console.log(`\n8] Adding new certificate :`);
professor.certificates.newCert ="JavaScript "
console.log(professor.certificates);

console.log(`\n9] log nested object certificate :`);
console.log(professor.certificates);




