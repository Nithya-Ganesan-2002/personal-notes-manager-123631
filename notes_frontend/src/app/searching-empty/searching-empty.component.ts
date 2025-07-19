import { Component } from '@angular/core';

// PUBLIC_INTERFACE
@Component({
  selector: 'app-searching-empty',
  standalone: true,
  templateUrl: './searching-empty.component.html',
  styleUrls: ['./searching-empty.component.css']
})
/**
 * Displays an empty state when no search results found for notes.
 * Matches Figma design for visual consistency.
 */
export class SearchingEmptyComponent {}
