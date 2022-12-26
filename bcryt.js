import bcrypt from "bcryptjs";

const saltRounds = 10; // ? -> chain datas random
const password = 'Cp1234Ag09856!$#';

const hash = await bcrypt.hash(password, saltRounds);

bcrypt.compare(password, hash); // -> Boolean
