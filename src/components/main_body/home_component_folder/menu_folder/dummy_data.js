/* eslint-disable */

const event = [
    {   
        event_code: "",
        event_type: "free_topping",
    },
    {
        event_code: "",
        event_type: "discount",
        event_discount: 10
    }, 
    {
        event_code: "",
        event_type: "free_first",
        event_required_amount: 3
    },
    {
        event_code: "",
        event_type: "free_first_drink",
    }
]

export const items = [
    {
        title: "",
        type: "pizza",
        group: "",
        discription: "",
        ingredient: [
            {
                title: "Regular Dough",
                type: "ingredient",
                group: "dough",
                discription: "",
                ingredient: [],
                price: {
                    default: 2.00
                },
                discount: 0
            }
        ],
        price: {
            small: 0,
            medium: 0,
            large: 0,
            extra_large: 0
        },
        discount: 0,
    },
    {
        title: "Pepperoni",
        type: "pizza",
        group: "meat",
        discription: "",
        ingredient: [
            {
                title: "Regular Dough",
                type: "ingredient",
                group: "dough",
                discription: "",
                ingredient: [],
                price: {
                    default: 2.00
                },
                discount: 0
            }
        ],
        price: {
            small: 9.99,
            medium: 12.99,
            large: 14.49,
            extra_large: 17.79
        },
        discount: 0,
    },
    {
        title: "Vietnamese Coconut Larva",
        type: "pizza",
        group: "meat",
        discription: "",
        ingredient: [
            {
                title: "Regular Dough",
                type: "ingredient",
                group: "dough",
                discription: "",
                ingredient: [],
                price: {
                    default: 2.00
                },
                discount: 0
            }
        ],
        price: {
            small: 12.99,
            medium: 14.99,
            large: 17.49,
            extra_large: 21.79
        },
        discount: 0,
    },
    {
        title: "Pineapple Pizza",
        type: "pizza",
        group: "meat",
        discription: "",
        ingredient: [
            {
                title: "Pineapple Slice",
                type: "ingredient",
                group: "veggie",
                discription: "",
                ingredient: [],
                price: {
                    default: 2.00
                },
                discount: 0
            },
            {
                title: "Ham",
                type: "ingredient",
                group: "meat",
                discription: "",
                ingredient: [],
                price: {
                    default: 2.00
                },
                discount: 0
            },
            {
                title: "Crispy Bacon",
                type: "ingredient",
                group: "meat",
                discription: "",
                ingredient: [],
                price: {
                    default: 2.00
                },
                discount: 0
            },
            {
                title: "Thin Dough",
                type: "ingredient",
                group: "dough",
                discription: "",
                ingredient: [],
                price: {
                    default: 2.00
                },
                discount: 0
            }
        ],
        price: {
            small: 13.99, 
            medium: 15.35,
            large: 17.55, 
            ex_large: 19.99
        },
        discount: 0,
    },
    {
        title: "Coke",
        type: "drink",
        group: "soft drink",
        discription: "",
        ingredient: "",
        price: {
            default: 2.99
        },
        discount: 0,
    },
    {
        title: "Oolong Tea",
        type: "drink",
        group: "tea",
        discription: "",
        ingredient: "",
        price: {
            default: 2.99
        },
        discount: 0,
    },
    {
        title: "Pineapple Slice",
        type: "ingredient",
        group: "veggie",
        discription: "",
        ingredient: [],
        price: {
            default: 2.00
        },
        discount: 0
    }
]

