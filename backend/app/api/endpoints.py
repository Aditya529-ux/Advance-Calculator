from fastapi import APIRouter, HTTPException
from app.schemas.models import CalculationRequest, CalculationResponse
from app.services.calculator import calculator_service

router = APIRouter()

@router.post("/calculate", response_model=CalculationResponse)
async def calculate(request: CalculationRequest):
    result = calculator_service.evaluate(request.expression)
    
    if isinstance(result, str) and result.startswith("Error"):
        raise HTTPException(status_code=400, detail=result)
        
    return CalculationResponse(
        result=result,
        expression=request.expression,
        status="success"
    )

@router.get("/health")
async def health_check():
    return {"status": "healthy", "service": "calculator-api"}
