require("../src/db/mongoose");
const User = require("../src/models/user");

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age });
    const count = await User.countDocuments({age});
    return count;
}

updateAgeAndCount("5e8b0b8ddb95a2226846fb81", 2).then((count) => {
    console.log(count);
}).catch((e) => {
    console.log(e);
});