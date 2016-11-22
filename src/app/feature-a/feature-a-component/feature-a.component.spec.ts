/* tslint:disable:no-unused-variable */

import {TestBed} from '@angular/core/testing';
import {FeatureAComponent} from './feature-a.component';

describe('Component: feature-a', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FeatureAComponent]
        });
    });
    it('should create the app', () => {
        let fixture = TestBed.createComponent(FeatureAComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
});
