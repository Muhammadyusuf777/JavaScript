a = 1
b = 2
def add(x, y):
    return x + y
def subtract(x, y):
    return x - y
def multiply(x, y):
    return x * y
def divide(x, y):
    if y == 0:
        return "Cannot divide by zero"
    return x / y
print("Addition:", add(a, b))
print("Subtraction:", subtract(a, b))
print("Multiplication:", multiply(a, b))
print("Division:", divide(a, b))


# let yigindi = 0;

# for (let i = 1; i <= 20; i++) {
#     if (i >= 10 && i % 2 === 0) {
#         yigindi += i;
#     }
# }

# console.log("Natija:", yigindi);