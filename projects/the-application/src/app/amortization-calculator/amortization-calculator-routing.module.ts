import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AmortizationCalculatorComponent } from './amortization-calculator.component'

const routes: Routes = [
  {
    path: '',
    component: AmortizationCalculatorComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmortizationCalculatorRoutingModule {}
