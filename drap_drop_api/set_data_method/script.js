const source = document.getElementById("source");
const target = document.getElementById("target");
const resetBtn = document.getElementById("reset");

// we listen for the dragstart event on the source element.
source.addEventListener("dragstart", (event) => {
  console.log("drag started");

  // add a small notifier to indicate that the drag has started.
  // the currentTarget returns us the element that the event listener is attached to.
  event.currentTarget.classList.add("dragging");

  // clear the drag data.
  event.dataTransfer.clearData();

  // set the drag format and data.
  // use the event target's is as the data.
  event.dataTransfer.setData("text/plain", event.target.id);
});

// we listen for the dragend event on the source element.
source.addEventListener("dragend", (event) => {
  console.log("drag ended.");

  event.currentTarget.classList.remove("dragging");
});

// we listen for the dragover event on the target element.
target.addEventListener("dragover", (event) => {
  console.log("dragged over the target.");
  event.preventDefault();
  event.currentTarget.classList.add("dropping");
});

// we listen for the drop event on the target element.
target.addEventListener("drop", (event) => {
  console.log("dragged dropped.");
  event.preventDefault();

  // get the data that was added to the drag-data of the DataTransfer object.
  // here the data we are retrieving is the id of the source element.
  const data = event.dataTransfer.getData("text/plain");
  console.log("data: ", data);
  const sourceEl = document.getElementById(data);
  event.target.appendChild(sourceEl);

  event.currentTarget.classList.remove("dropping");
});

// // we listen for the dragend event on the source element.
// target.addEventListener("dragend", (event) => {
//   console.log("drag ended.");

//   event.currentTarget.classList.remove("dropping");
// });

// we listen for the click event on the reset button.
resetBtn.addEventListener("click", () => document.location.reload());
