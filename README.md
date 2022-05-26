# Validador-Cpf
Algoritmo para calcular se o número de CPF fornecido é válido ou não utilizando HTML5, CSS3 e JavaScript. Interface com layout moderno e elegante.

# Estrutura do algoritmo utilizado:

Algoritmo para validação do CPF 
CPF = 123.456-789-00
Excluí os dois últimos dígitos                                  |   Excluí somente o último dígito
                                                                |   
1 * 10 = 10                                                     |  1 * 11 = 11
2 * 9  = 18                                                     |  2 * 10 = 20
3 * 8  = 24                                                     |  3 * 9  = 27
4 * 7  = 28                                                     |  4 * 8  = 32
5 * 6  = 30                                                     |  5 * 7  = 35
6 * 5  = 30                                                     |  6 * 6  = 36
7 * 4  = 28                                                     |  7 * 5  = 35
8 * 3  = 24                                                     |  8 * 4  = 32
9 * 2  = 18                                                     |  9 * 3  = 27
                                                                |  0 * 2  = 0
Soma = total                                                    |  
                                                                |  Soma = total
Conta = 11 - (total % 11)                                       |
                                                                |  Conta = 11 - (total % 11)
Se conta > 9 o digíto 1 será igual 0                            |
                                                                |  Se conta > 9 o digíto 1 será igual 0
Se não, o digíto 1 será igual o resultado da própria conta      |  
                                                                |  Se não, o digíto 1 será igual o resultado da própria conta
Para verificar basta comparar se o dois últimos dígitos fornecidos são iguais ao dígitos calculados pelo algoritmo
