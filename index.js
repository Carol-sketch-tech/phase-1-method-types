// Objectives
// recognizes the syntactic difference between regular,static,getter and setter methods.
// know how to use these methods.
/* there are few more methods that can be used inside class javascript object.
the regular that we've already seen.
2. static and getter and setter methods.
*/

// Standard methods- most thave the following syntax 
// area (){
//     return this.sideLength * this.sideLength;
// }
// methods can be used or called from inside other methods just like properties.
// the method listed above we can access directly.

// STATIC METHODS.
// they are not callable on instances of a class, only the class itself.They are usually used in utility classes,
// classes taht encapsulate a set of related methods but do not need to be made into instances.
// for example
class CommonMath {
    static triple(number){
        return number*number*number;
    }
    static findHypotenuse(a,b){
        return Math.sqrt(a * a + b * b)
    }
}
//  to access these static methods.
const num = CommonMath.triple(3);
console.log(num);
const c =CommonMath.findHypotenuse(3, 4);
console.log(c);

// Define get Keyword in javascript Class Context.
