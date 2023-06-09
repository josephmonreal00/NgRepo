import { Component, OnChanges, SimpleChanges, Input, SimpleChange } from '@angular/core';
@Component({
    selector: 'ng-on-changes',
    templateUrl: 'ng-on-changes.component.html',
    styleUrls: ['ng-on-changes.component.scss']
})
export class NgOnChangesComponent implements OnChanges {
    @Input() detectPropertyChange: string = "";
    public currentValue: string = "";
    public previousValue: string = "";
    public ngOnChanges(changes: SimpleChanges): void {
        const chng = changes['detectPropertyChange'];
        if (chng != undefined) {
            this.currentValue = chng.currentValue;
            this.previousValue = chng.previousValue;
        }
    }
}