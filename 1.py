import numpy as np
import matplotlib.pyplot as plt

# Example dataset
# Independent variable (X)
X = np.array([1, 2, 3, 4, 5])
# Dependent variable (Y)
Y = np.array([2.2, 2.8, 4.5, 3.7, 5.5])

# Calculate the mean of X and Y
mean_X = np.mean(X)
mean_Y = np.mean(Y)

# Calculate the coefficients (m: slope, c: intercept)
m = np.sum((X - mean_X) * (Y - mean_Y)) / np.sum((X - mean_X) ** 2)
c = mean_Y - m * mean_X

print(f"Slope (m): {m}")
print(f"Intercept (c): {c}")

# Predicted Y values using the regression line
Y_pred = m * X + c

# Plot the data points and regression line
plt.scatter(X, Y, color='blue', label='Data Points')
plt.plot(X, Y_pred, color='red', label='Regression Line')
plt.xlabel('X')
plt.ylabel('Y')
plt.legend()
plt.title('Linear Regression')
plt.show()

# Predict a new value (example)
x_new = 6
y_new = m * x_new + c
print(f"Predicted value for X={x_new}: Y={y_new}")
