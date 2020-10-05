import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { RouterTestingModule } from '@angular/router/testing'

import { AmortizationCalculatorComponent } from './amortization-calculator.component'

describe('AmortizationCalculatorComponent', () => {
  let component: AmortizationCalculatorComponent
  let fixture: ComponentFixture<AmortizationCalculatorComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule],
        declarations: [AmortizationCalculatorComponent]
      }).compileComponents()
    })
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(AmortizationCalculatorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
