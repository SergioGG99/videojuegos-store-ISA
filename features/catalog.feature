Feature: Ver catálogo de videojuegos

  Scenario: Usuario accede al catálogo
    Given el usuario está en la aplicación
    When solicita el catálogo
    Then recibe una lista de videojuegos disponibles
