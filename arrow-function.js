// What is the difference between following 3 functions

// 1
var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    this.tasks.forEach(function(task) {
      console.log(this.name + " wants to " + task);
    });
  }
};

bunny.showTasks();

// wants to transform
//  wants to eat cake
//  wants to blow kisses

// 2
var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: function() {
    this.tasks.forEach((task) => {
      console.log(this.name + " wants to " + task);
    });
  }
};
bunny.showTasks();

Usagi wants to transform
Usagi wants to eat cake
Usagi wants to blow kisses

// 3
var bunny = {
  name: 'Usagi',
  tasks: ['transform', 'eat cake', 'blow kisses'],
  showTasks: () => {
    this.tasks.forEach((task) => {
      console.log(this.name + " wants to " + task);
    });
  }
};
bunny.showTasks()

/*
Uncaught TypeError: Cannot read property 'forEach' of undefined
    at Object.showTasks (<anonymous>:5:16)
    at <anonymous>:1:7
showTasks @ VM307:5
(anonymous) @ VM322:1
*/
