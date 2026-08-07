import { Component, inject } from '@angular/core';
import { ShopService } from '../../../core/services/shop-service';
import { MatDivider } from '@angular/material/divider';
import { MatListOption, MatSelectionList } from '@angular/material/list';
import { MatAnchor, MatButton } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef, MatDialogActions } from "@angular/material/dialog";
import { FormsModule } from '@angular/forms';
import { A11yModule } from "@angular/cdk/a11y";

@Component({
  selector: 'app-filters-dialog',
  imports: [
    MatDivider,
    MatSelectionList,
    MatListOption,
    MatDialogContent,
    FormsModule,
    A11yModule, MatButton,
    MatDialogActions
],
  templateUrl: './filters-dialog.html',
  styleUrl: './filters-dialog.css',
})
export class FiltersDialog {
  shopService = inject(ShopService);
  private dialogRef = inject(MatDialogRef<FiltersDialog>);
  data = inject(MAT_DIALOG_DATA)
  selectedBrands:string[] = this.data.selectedBrands;
  selectedTypes:string[] = this.data.selectedTypes;

  applyFilters(){
    this.dialogRef.close({
      selectedBrands:this.selectedBrands,
      selectedTypes:this.selectedTypes
    })
  }
}
