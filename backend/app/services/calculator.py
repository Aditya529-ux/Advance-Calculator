import math
import re
from typing import Dict, Any, Union
from simpleeval import SimpleEval, NameNotDefined

class CalculatorService:
    def __init__(self):
        self.evaluator = SimpleEval()
        # Register scientific functions
        self.evaluator.functions = {
            "sin": lambda x: math.sin(math.radians(x)),
            "cos": lambda x: math.cos(math.radians(x)),
            "tan": lambda x: math.tan(math.radians(x)),
            "log": math.log10,
            "ln": math.log,
            "sqrt": math.sqrt,
            "pow": pow,
            "fact": math.factorial,
            "abs": abs,
            "pi": lambda: math.pi,
            "e": lambda: math.e
        }

    def sanitize_expression(self, expression: str) -> str:
        """
        Clean and normalize the expression for the evaluator.
        """
        # Replace symbols with evaluator-friendly counterparts
        replacements = {
            '×': '*',
            '÷': '/',
            '^': '**',
            '−': '-',
            'π': 'pi()',
            'e': 'e()'
        }
        for old, new in replacements.items():
            expression = expression.replace(old, new)
        
        # Remove any characters not allowed in math expressions
        expression = re.sub(r'[^0-9+\-*/().,a-zA-Z\s]', '', expression)
        return expression

    def evaluate(self, expression: str) -> Union[float, int, str]:
        try:
            sanitized = self.sanitize_expression(expression)
            result = self.evaluator.eval(sanitized)
            
            # Format result
            if isinstance(result, float):
                if result.is_integer():
                    return int(result)
                return round(result, 10)
            return result
        except ZeroDivisionError:
            return "Error: Division by zero"
        except NameNotDefined as e:
            return f"Error: Undefined function or variable {str(e)}"
        except Exception as e:
            return f"Error: Invalid expression"

calculator_service = CalculatorService()
