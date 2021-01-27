import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../todo-item';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public todoArray: Array<TodoItem> = [];

  ngOnInit(): void {
  }

  // @ts-ignore
  public get atLeastOneChecked(): boolean {
    for (let i = this.todoArray.length - 1; i >= 0; i--){
      if (this.todoArray[i].checked){
        return true;
      }
    }
    /*
    for (let item of this.todoArray){
      if (item.checked === true)
        return true;
    }
     */
  }

  public addItem($event: KeyboardEvent): void{
    if ($event.code === 'Enter') {
      const $input: EventTarget|null = $event.target;
      if ($input instanceof HTMLInputElement){
        const str = $input.value.trim();
        if (str !== ''){
          // @ts-ignore
          this.todoArray.push({
            title: str,
            checked: false,
          });
          $input.value = '';
        }
      }
    }
  }

  public suppItem(index: number): void{
    // const index = this.todoArray.indexOf(item);
    if (index !== -1){
      this.todoArray.splice(index, 1);
    }
  }

  public suppAll(): void{
    for (let i = this.todoArray.length - 1; i >= 0; i--){
      if (this.todoArray[i].checked){
        this.suppItem(i);
      }
    }
  }
}
