enum ToDoStates {
    NEW = 1,
    ACTIVE,
    COMPLETED,
    DELETED
}

let currentState = 0;

if (currentState === ToDoStates.NEW) {
    console.log('The todo thing is still new!!!');
}

if (ToDoStates.NEW === 1) {
    console.log('The todo thing is still new!!!');
}