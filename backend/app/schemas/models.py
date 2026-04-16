from pydantic import BaseModel, Field
from typing import Optional, Union, List

class CalculationRequest(BaseModel):
    expression: str = Field(..., example="5 * (2 + 3)")

class CalculationResponse(BaseModel):
    result: Union[float, int, str]
    expression: str
    status: str = "success"

class UnitConversionRequest(BaseModel):
    value: float
    from_unit: str
    to_unit: str
    category: str # length, weight, temperature, etc.

class ErrorResponse(BaseModel):
    detail: str
    status: str = "error"
