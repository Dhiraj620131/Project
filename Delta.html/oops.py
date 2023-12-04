# class Student:
#     def set_name(self,name):
#         self.name=name
#     def get_name(self):
#         return self.name
# student1=Student()
# student1.set_name("Dhiraj")
# print(student1.get_name())
# student2=Student()
# student2.set_name("Ankit")
# print(student2.name)
# class Rectangle:
#     def set_dimensions(self,width,height):
#         self.width=width
#         self.height=height
#     def area(self):
#         return self.height*self.width
#     def perimeter(self):
#         return  2*(self.height*self.width) 
# rectangle1=Rectangle()

# rectangle1.set_dimensions(4,3)
# print("The height and width are: ",rectangle1.height,rectangle1.width)
# print("The area is :",rectangle1.area())
# print("The perimeter:",rectangle1.perimeter())
# class Rectangle:
#     def __init__(self,width,height):
#         print(f"A rectangle is created with height: {height} and width: {width}")
#         self.width=width
#         self.height=height
#     def set_dimensions(self,width,height):
#         self.width=width
#         self.height=height
#     def area(self):
#         return self.height*self.width
#     def perimeter(self):
#         return  2*(self.height*self.width) 
# rectangle1=Rectangle(4,3)
# rectangle1=Rectangle(45,7)
# rectangle1=Rectangle(2,8)
# class ABC:
#     def __init__(self):
#         self.public_attribute=None
#     def public_function():
#         pass
    
# obj1=ABC()
# obj1.public_attribute
# obj1.public_function()
# class ABC:
#     def __init__(self):
#         self.__private_attribute=10
#     def __private_function():
#         pass
# class ABC:
    # def __init__(self):
    #     self._protected_attribute=10
    # def _protected_function():
    #     pass
# class Parent:
#     def __init__(self):
#         self.super_attribute=True
#         print("This is the parent class")
# class Child(Parent):
#     def __init__(self):
#         super().__init__()
#         print("This is a child class")
#         print(self.super_attribute)
        
# child1=Child()

# class  Vehicle:
#     def __init__(self, seating_capacity):
#         self.seating_capacity=seating_capacity
#     def get_fare(self):
#         return self.seating_capacity * 100
        
        
# class Bus(Vehicle):
#     def __init__(self, seating_capacity):
#         super().__init__(seating_capacity)
        
#     def get_fare(self):
#         vehicle_fare=super().get_fare()
#         maintenance_fare=0.1*vehicle_fare
#         total_fare=vehicle_fare+maintenance_fare
#         return total_fare
# vehicle1=Vehicle(50)
# print("vehicle fare:",vehicle1.get_fare())
# bus1=Bus(50)
# print("bus fare:",bus1.get_fare())
# class Animal:
#     def speaks(self):
#         pass
# class Dog(Animal):
#     def speaks(self):
#         print("Barks")
# class Cat(Animal): 
#     def speaks(self):
#         print("Meow")
# class Cow(Animal):
#     def speaks(self):
#         print("Mooo")
        
# dog  =Dog()
# cat=Cat()
# cow=Cow()
# dog.speaks()
# cat.speaks()
# cow.speaks()
# class Add:
#     def sum(self, a, b):
#         print(a+b)
#     def sum(self, a, b, c):
#         print(a+b+c)
# compile-time Polymorphism
# class ComplexNumbers:
#     def __init__(self, real, img):
#         self.real=real
#         self.img=img
#     def __add__(self, other):
#         return ComplexNumbers(self.real+other.real,self.img+other.img)
        
# c1=ComplexNumbers(1,2)
# c2=ComplexNumbers(3,4)
# c3=c1 + c2
# print(c3.real, "+ i",c3.img)
# Run-Time Polymorphism
# class Animal:
#     def speaks(self):
#         print("Generic noise ")
        
# class Dog(Animal):
#     def speaks(self):
#         print("Barks")
# class Cat(Animal): 
#     def speaks(self):
#         print("Meow")
# class Cow(Animal):
#     def speaks(self):
#         print("Mooo")
        
# dog  =Dog()
# cat=Cat()
# cow=Cow()
# dog.speaks()
# cat.speaks()
# cow.speaks()
# Abstraction
# a = int(input("enter a: "))
# b = int(input("Enter b: "))


# try:
#     result=a/b
# except ZeroDivisionError:
#     result=None
#     print("Error: Cannot divide by zero")
# finally:
#     print("Division operation completed: ",result)

# class A:
#     print("Inside class")
# A()
# A()
# obj=A()
# class Student:
#     def __init__(self,name,id):
#         self.name=name
#         self.id=id
#         # self.age=age
# std=Student("Simon",1)
# std.id=2
# print(std.id)
# class A():
#     def __init__(self,count=100):
#         self.count=count
# class A:
#     def __init__(self,name):
#         self.name=name
# a1=A("john")
# a2=A("john")


    
        


    