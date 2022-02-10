import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    exports: [MatSnackBarModule],
    imports: [MatSnackBarModule]
})
export class MaterialModule { }