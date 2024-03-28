import shredding from "./guitars.js";
import { playGuitar, plucking as fingerpicking} from "./guitars.js";
import * as User from "./user.js";


console.log(shredding());
console.log(playGuitar());
console.log(fingerpicking());

const user = new User.default("something@something.com", "Juanito");
console.log(user);
console.log(user.greeting());
