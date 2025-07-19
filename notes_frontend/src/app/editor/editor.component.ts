import { Component } from '@angular/core';
import { FormattingToolbarComponent } from '../formatting-toolbar/formatting-toolbar.component';
import { SavingPopupComponent } from '../saving-popup/saving-popup.component';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [FormattingToolbarComponent, SavingPopupComponent],
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
/**
 * Notes editor screen, used for creating and editing notes.
 * Integrated from Figma design assets with toolbar, actions, and modal popup area.
 */
export class EditorComponent {}
