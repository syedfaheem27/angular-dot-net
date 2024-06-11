import { NgModule } from '@angular/core';
import { TabsComponentA } from './tabA/tabA.component';
import { TabsComponentB } from './tabB/tabb.component';
import { TabsComponentC } from './tabC/tabC.component';

@NgModule({
  declarations: [TabsComponentA, TabsComponentB, TabsComponentC],
  bootstrap: [TabsComponentA],
})
export class TabsModule {}
