

export const PRODUCTS: any = [

    {
        id: 1,
        description: "Bluetooth Device",
        imageUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        title: "Headphones",
        quantity:"1",
        price:"20,000"
    },
    {
        id: 2,
        description: "Bluetooth Device",
        imageUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/rxjs-in-practice-course.png',
        title: "Watch",
       quantity:"4",
        price:"30,000"
    },

    {
        id: 3,
        description: 'Bluetooth Device',
        title: "Mobile",
        imageUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-ngrx-course.png',
         quantity:"1",
        price:"40,000"
  },

    {
        id: 4,
        description: "Bluetooth Device",
        imageUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        title: "TV",
         quantity:"2",
        price:"50,000"
  },
   
];


export function findProductById(id:number) {
    return PRODUCTS.find(product => product.id === id);
}