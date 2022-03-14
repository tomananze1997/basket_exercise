const INITIAL_STATE = {
    items: [
        { name: "Strawberry", type: "fruit" },
        { name: "Blueberry", type: "fruit" },
        { name: "Orange", type: "fruit" },
        { name: "Banana", type: "fruit" },
        { name: "Apple", type: "fruit" },
        { name: "Corn", type: "vegetables" },
        { name: "Tomato", type: "vegetables" },
        { name: "Carrot", type: "vegetables" },
        { name: "Cheese", type: "dairy" },
        { name: "Yougurt", type: "dairy" },
        { name: "Butter", type: "dairy" },
        { name: "Milk", type: "dairy" },
        { name: "Bread", type: "grains" },
        { name: "Corn flakes", type: "grains" },
        { name: "Rice", type: "grains" },
        { name: "Pasta", type: "grains" },
        { name: "Egg", type: "protein" },
        { name: "Fish", type: "protein" },
        { name: "Chicken", type: "protein" },
    ],
};

const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
};

export default itemReducer;