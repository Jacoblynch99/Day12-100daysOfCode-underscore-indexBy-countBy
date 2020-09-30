const _ = require("underscore")

const pies = [
  {
    pieFlavor: "apple",
    pieRating: "5/5",
    pieId: 105,
  },
  {
    pieFlavor: "pumpkin",
    pieRating: "4/5",
    pieId: 122,
  },
  {
    pieFlavor: "blueberry",
    pieRating: "4/5",
    pieId: 335,
  },
  {
    pieFlavor: "rhubarb",
    pieRating: "1/5",
    pieId: 245,
  },
]

const countByRating = (obj) => {
  return obj.pieRating === "5/5"
    ? "All pies that are 5/5"
    : obj.pieRating === "4/5"
    ? "All pies that are 4/5"
    : obj.pieRating === "3/5"
    ? "All pies that are 3/5"
    : obj.pieRating === "2/5"
    ? "All pies that are 2/5"
    : obj.pieRating === "1/5"
    ? "All pies that are 1/5"
    : "All pies that are 1/5"
}

const indexBy = _.indexBy(pies, "pieId") // Returns a new obj with the key specified by the second argument passed into indexBy.Does not change the original data.

const countBy = _.countBy(pies, countByRating) // Return a new obj with th key declared in the function given by the second argument passed into countBy. Does not change the original data.

console.log(`Underscore Data:`, indexBy)
console.log(`Original Data:`, pies)
console.log(
  `*****************************************************************************************`
)
console.log(`Underscore Data:`, countBy)
console.log(`Original Data:`, pies)
