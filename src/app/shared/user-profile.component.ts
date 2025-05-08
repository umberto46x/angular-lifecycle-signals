import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
      <p>{{ id }}</p>
      <p> {{render()}}</p>
  `,
  styles: ``
})
export class UserProfileComponent implements OnInit,OnChanges {

 
  @Input() id: number | undefined


  ngOnChanges(changes: SimpleChanges): void {
    console.log("on changes id : ",this.id);
  }
  
  
  ngOnInit(): void {
    console.log("on init id :",this.id);
  }

  render() {
    console.log("rendered");
    }

}
