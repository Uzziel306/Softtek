RUN Command Line

``$ node index.js input.txt``


Write an application that will be able to handle basic shapes. The application will take as input a list of
shapes, sizes, and colors. The application will output a list of all the shapes sorted by area, then by color
alphabetically. The application will also output a list of all the shapes of a given type by area, then by
color alphabetically.
The following shapes are allowed: circle, rectangle, square, and triangle.
The following colors are allowed for shapes: blue, green, red, purple, and yellow.
The following rules apply for the shapes:
* For all shapes, you will be given a color.
* For a circle, you will be given a radius.
* For a rectangle you will be given a length and width.
* For a square you will be given a length.
* For a triangle you will be given a base and height.

Sample input:
triangle, 5, 6, yellow
square, 8, red
circle, 3, blue
triangle, 5, 6, green
rectangle, 10, 5, purple
Sample output for all shapes:
triangle, 15.00, green
triangle, 15.00, yellow
circle, 28.27, blue
rectangle, 50.00, purple
square, 64.00, purple
Sample output for triangles:
triangle, 15.00, green
triangle, 15.00, yellow